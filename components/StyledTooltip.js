import {Tooltip} from 'antd'
import styled from 'styled-components'
import {theme} from '../theme'

const StyledTooltip = styled(Tooltip)`
    background: ${theme.dark};
    color: ${theme.accent};
    margin-bottom:-0.5em;
`

export default StyledTooltip;