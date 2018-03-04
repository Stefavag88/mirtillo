import React from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const App = (props) => {
    return (
    <Layout url={props.url}>
        <h3>This is the HOME Page {props.name}</h3>
    </Layout>
    )
};

App.getInitialProps = async({req}) => {
    
    return {name: 'Vaggelis'};
}

export default App;
