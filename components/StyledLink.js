import React from 'react'
import styled from 'styled-components'
import {colors, sizes} from '../theme';
import Link from 'next/link';

const StyledLink = styled.a`
    font-size: 1.5rem;
    box-sizing: border-box;
    font-weight: 500;
    text-decoration: none;
    padding:0.2em 0.4em;
    margin:0.5em;
    color: ${props => props.theme.textDark};
    &:hover{
        box-shadow: 0 -0.1em 0 ${props => props.theme.accent} inset;
    }
    &:active {
        color: ${props=> props.theme.primary};
    }

    transition: all 0.256s ease-in
}
`


export default StyledLink;