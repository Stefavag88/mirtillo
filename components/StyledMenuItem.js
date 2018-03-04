import styled from 'styled-components'
import {sizes} from '../theme'


const MenuItem = styled.a`
    font-size: 1.5rem;
    box-sizing: border-box;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: ${props => props.active ? `0 0.1em 0 ${props.theme.hovered}` : ''};
    padding:0.3em 0.5em;
    margin:0.02em 0.3em;
    color: ${props => props.theme.dark};

    @media all and (max-width: ${sizes.phone}px){
        font-size:1.3rem;
    }
    &:hover{
        color: ${props => props.theme.hoveredOpated};
        box-shadow: 0 0.12em 0 ${props => props.theme.accent};
    }
    &:active {
        color: ${props => props.theme.hoveredOpated};
    }
`

export default MenuItem