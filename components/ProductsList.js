import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
const POSTS_PER_PAGE = 10

function ProductsList({
    data: { loading, error, products },
}) {
    console.log(error);
    if (error) return (<span>Error loading posts.</span>)
    if (products && products.length) {
        return (
            <div>
                <ul>
                    {products.map((post, index) => (
                        <li key={post.id}>
                            <span>{index + 1}. </span>
                            <h3>{post.name}</h3>
                            <p>{post.description}</p>
                            <footer>Category: {post.category}</footer>
                        </li>
                    ))}
                </ul>
            </div>
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
