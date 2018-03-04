import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../ant-theme-vars.less';

//for development you can use this instead of link to extracted css
<style dangerouslySetInnerHTML={{ __html: stylesheet }} />

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        return { html, head, errorHtml, chunks }
    }
    
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link rel="stylesheet" href="/static/styles.css" />
                </Head>
                <body className="custom_class">
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}