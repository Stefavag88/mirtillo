import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Product from './Product';

const ProductDetails = (props) => (
    <Query query={GET_PRODUCT_BY_ID} variables={{id:props.productId}}>
        {({loading, data, error}) => {
            if (error) return (<span>Error loading product.</span>)
            if (loading) return (<div>Loading...</div>)
            if (data && data.product) {
                return (<Product id={data.product.id} name={data.product.name} picture="marias_feet"/>)
            }
        }}
    </Query>
)


const GET_PRODUCT_BY_ID = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      category
      description
      available
    }
  }
`
export default ProductDetails;