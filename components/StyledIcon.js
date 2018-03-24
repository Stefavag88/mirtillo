import styled from 'styled-components'
import {Icon} from 'antd'
import {theme, sizes} from '../theme'

const StyledIcon = styled(Icon)`
    color: ${props => {
        switch(props.color){
            case 'primary':
                return theme.primary;
            case 'hovered':
                return theme.hovered;
            case 'accent':
                return theme.accent;
            case 'dark':
                return theme.dark;
            default:
                return theme.textLight; 
        }
    }};

    font-size:1em;
    margin:0.5em 1em;
    @media screen and (max-width:${sizes.phone}px){
        font-size: 1.2em;
        margin:0.3em 0.6em;
    } 
    @media screen and (min-width:${sizes.phone+1}px) and (max-width:${sizes.tablet}px){
        font-size: 1.4em;
        margin:0.4em 0.8em;
    } 
`

export default StyledIcon;