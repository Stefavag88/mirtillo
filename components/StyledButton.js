import styled from 'styled-components'
import Button from 'antd/lib/button'
import { sizes, theme } from '../theme'

const StyledButton = styled(Button)`
    border: none;
    font-family: 700;
    border-radius:${props => props.circle ? '50%' : '0.2em' };
    align-self:flex-end;
    justify-self:flex-end;
    background:transparent;

    &:hover{
        background:transparent;
        color: ${theme.accent};
    }
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

    font-size:1.2em;
    margin:0.5em 1em;
    @media screen and (max-width:${sizes.phone}px){
        font-size: 1em;
        margin:0.3em 0.6em;
    } 
    @media screen and (min-width:${sizes.phone+1}px) and (max-width:${sizes.tablet}px){
        font-size: 1.6em;
        margin:0.4em 0.8em;
    }
`

export default StyledButton;