import Header from './StyledNav'
import { theme } from '../theme'
import { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import ResizeAware from 'react-resize-aware'
import Router from 'next/router'
import NProgress from 'nprogress'

class Layout extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.showLoadingBar();
    const [width, height] = [window.innerWidth, window.innerHeight];
    this.setState({ width, height, children: this.childWithProp(this.props.children, width, height) });
  }

  showLoadingBar = () => {
    Router.onRouteChangeStart = (url) => NProgress.start();
    Router.onRouteChangeComplete = () => setTimeout(() => NProgress.done(), 300);
    Router.onRouteChangeError = () => setTimeout(() => NProgress.done(), 300);
  }

  childWithProp = (width, height, children = null) => React.Children.map(this.props.children, (child) => {
    return React.cloneElement(child, { width, height });
  });

  handleResize = ({ width, height }) => {
    console.log('Resizing...')
    this.setState((prevState, props) => {
      return { width, height, children: this.childWithProp(width, height) };
    })
  };

  render() {

    const { width, height, children } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ResizeAware style={{ position: 'relative' }}
          onlyEvent
          onResize={this.handleResize}>
          <div className='layout'>
            <Header width={width} height={height} url={this.props.url} />
            {children}
            <Footer />
          </div>
        </ResizeAware>
      </ThemeProvider>
    )
  }

}

export default Layout