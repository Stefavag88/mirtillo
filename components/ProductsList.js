import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Product from './StyledCard'
import styled from 'styled-components'
const POSTS_PER_PAGE = 10;

const StyledProductList = styled.section`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;

`

function ProductsList({
    data: { loading, error, products }
}) {
    console.log(error);
    if (error) return (<span>Error loading posts.</span>)
    if (products && products.length) {
        return (
            <StyledProductList>
                    {products.map((post, index) => (
                        <Product key={post.id} id={post.id} name={post.name} picture="marias_feet"/>
                            
                    ))}
            </StyledProductList>
        )
    }
    return <div>Loading...</div>
}



const products = gql`
  query products($limit: Int!) {
    products(limit: $limit) {
      id
      name
      category
      description
      available
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(products, {
    options: {
        variables: {
            limit: POSTS_PER_PAGE
        }
    },
    props: ({ data }) => ({
        data
    })
}
)(ProductsList)
