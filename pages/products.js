import React from 'react'
import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import withData from '../lib/apollo'

export default withData((props) => {
    
    return (
        <Layout url={props.url}>
            <h1>Products Page</h1>
            <ProductsList/>
        </Layout>
    );
});
