import React from 'react'
import Layout from '../components/Layout'
import withData from '../lib/apollo'
import ProductDetails from '../components/ProductDetails'

export default withData(props => {
    if(props.url === null || props.url === undefined) return;

    return (<Layout url={props.url}>
                <ProductDetails productId={props.url.query.id}/>
            </Layout>)
});