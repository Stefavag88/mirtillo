import React from 'react'
import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import withData from '../lib/apollo'

export default withData((props) => {
    
    return (
        <Layout url={props.url}>
            <section style={{display:'flex'}}>
                {/* <section className="filters" style={{border:'1px solid #eaeaea', margin:'1em', minWidth:'200px'}}>
                Filter A
                Filter B
                </section> */}
                <ProductsList height={props.height} width={props.width}/>
            </section> 
        </Layout>
    );
});
