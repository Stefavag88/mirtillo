import styled from 'styled-components'
import Button from 'antd/lib/button'

const StyledButton = styled(Button)`
    border: none;
    border-radius:50%;
    font-size:1.5rem;
    font-weight:700;
    color:${props => props.theme.dark};
    float: ${props => props.float}
`

export default StyledButton;