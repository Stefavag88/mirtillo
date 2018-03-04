import styled from 'styled-components'
import { colors, sizes } from '../theme'

const StyledHr = styled.hr`
  height:0;
  border:0;
&:after{
  display:block;
  content:"";
  border-top:1px solid rgba(0, 0, 0, 0.3);
  width:${props => props.width >= sizes.tablet ? '100%' : '97%'}
  margin:auto;
  height:6px;
  background: radial-gradient(ellipse at 50% -100%,  rgba(0,0,0,0.6) 0,rgba(255,255,255,0) 70%); /* W3C */
}
`

export default StyledHr;