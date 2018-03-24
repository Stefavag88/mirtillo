import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Product from './Product'
import styled from 'styled-components'
const POSTS_PER_PAGE = 10;

const StyledProductList = styled.section`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;

`

const ProductsList = (props) => (
            <Query query={GET_PRODUCTS} variables={{limit:props.limit}}>
                 {({loading, error, data}) => {
                    if (loading) return (<div>Loading ...</div>)
                    if (error) return (<span>Error loading posts.</span>)
                    if (data.products && data.products.length) {
                       return (<StyledProductList>
                                {data.products.map((product, index) => (
                                  <Product key={product.id} id={product.id} name={product.name} picture="marias_feet"/>
                                ))}
                            </StyledProductList>
                       )
                    }
                 }}
            </Query>  
)

const GET_PRODUCTS = gql`
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
export default ProductsList;