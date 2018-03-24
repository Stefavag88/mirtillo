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

    font-size:${props => props.big ? '1.8em' : '1.2em'};
    margin:0.5em 0.5em;
`

export default StyledButton;