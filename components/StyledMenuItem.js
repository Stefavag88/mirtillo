import styled from 'styled-components'


const MenuItem = styled.a`
    font-size: 1.5rem;
    box-sizing: border-box;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: ${props => props.active ? `0 -0.1em 0 ${props.theme.hovered} inset` : ''};
    padding:0.2em 0.4em;
    margin:0.5em;
    color: ${props => props.theme.textDark};
    &:hover{
        box-shadow: 0 -0.1em 0 ${props => props.theme.accent} inset;
    }
    &:active {
        color: ${props => props.theme.primary};
    }
`

export default MenuItem