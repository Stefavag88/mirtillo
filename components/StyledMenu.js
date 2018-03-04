import MenuItem from './StyledMenuItem'
import Link from 'next/link'
import styled from 'styled-components'

const StyledMenu = styled.nav`
box-sizing: border-box;
padding:0.1em;
display: flex;

@media all and (max-width: 500px){
    flex-direction:column;
}
`

export default ({ url, handleItemClick }) => (
    <StyledMenu>
        <Link href={{ pathname: "/about" }} passHref>
            <MenuItem active={url.pathname === '/about'}>about</MenuItem>
        </Link>
        <Link href={{ pathname: "/index" }} passHref>
            <MenuItem active={url.pathname === '/index'}>home</MenuItem>
        </Link>
        <Link href={{ pathname: "/products" }} passHref>
            <MenuItem active={url.pathname === '/products'}>products</MenuItem>
        </Link>
    </StyledMenu>
)