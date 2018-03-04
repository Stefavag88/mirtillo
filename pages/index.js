import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import { Row, Col } from 'antd'

class App extends React.Component {

    componentDidMount(){
    }


    render() {
        const { url } = this.props;

        return (
            <Layout url={url}>
                <span>Hello World</span>
            </Layout>
        );
    }
};

export default App;
