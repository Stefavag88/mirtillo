import React from 'react'
import { colors, sizes } from '../theme'
import ResizeAware from 'react-resize-aware'
import StyledMenu from './StyledMenu'


class Header extends React.Component {
    state = {}

    componentDidMount() {
        this.setState({ menuToggleOpen: false })
    }

    handleMenuToggle = ({ }) => this.setState({ menuToggleOpen: !this.state.menuToggleOpen });

    render() {
        const { url } = this.props;

        return (
            <div>
                {this.props.width >= 500 &&
                    <StyledMenu url={url} />
                }
                {this.props.width < 500 &&
                    <button onClick={this.handleMenuToggle}>
                        Toggle
                    </button>
                }
                {(this.props.width < 500 && this.state.menuToggleOpen) && <StyledMenu url={url} />}
            </div>
        )
    }
}


export default Header;
