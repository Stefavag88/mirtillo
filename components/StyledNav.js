import React from 'react'
import { colors, sizes } from '../theme'
import StyledMenu from './StyledMenu'
import StyledButton from './StyledButton'
import Icon from 'antd/lib/icon'
import StyledHr from './StyledHr'


class Header extends React.Component {
    state = {}

    componentDidMount() {
        this.setState({ menuToggleOpen: false })
    }

    handleMenuToggle = ({ }) => this.setState({ menuToggleOpen: !this.state.menuToggleOpen });

    render() {
        const { url, width } = this.props;

        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                {width >= sizes.tablet &&
                    <StyledMenu url={url} />
                }
                {width < sizes.tablet &&
                    <StyledButton color='dark' big circle icon='bars' onClick={this.handleMenuToggle} />
                }
                {(width < sizes.tablet && this.state.menuToggleOpen) && <StyledMenu url={url} />}
                {(width >= sizes.tablet || this.state.menuToggleOpen) && <StyledHr width={width}/>}
            </div>

        )
    }
}


export default Header;
