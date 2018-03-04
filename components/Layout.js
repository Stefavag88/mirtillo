import Header from './StyledNav'
import { theme } from '../theme'
import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
import Footer from './Footer'
import ResizeAware from 'react-resize-aware'

class Layout extends React.Component {

  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
    const [width, height] = [window.innerWidth, window.innerHeight];
    this.setState({width, height, children: this.childWithProp(this.props.children, width, height)});
  }

  childWithProp = (children, width, height) => React.Children.map(this.props.children, (child) => {
    return React.cloneElement(child, {width, height});
  });

  handleResize = ({width, height}) => {
    this.setState((prevState, props) => {
      return {width, height};
    })
  };

  render() {

    const {width, height, children} = this.state;


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