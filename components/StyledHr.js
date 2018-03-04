import styled from 'styled-components'
import { sizes } from '../theme'

const StyledHr = styled.hr`
  height:0;
  border:0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0.5em;
&:after{
  display:block;
  content:"";
  border-top:1px solid ${props => props.theme.hovered};
  width:${props => props.width >= sizes.tablet ? '100%' : '98%'};
  margin:0 auto;
  height:0.4em;
  background: radial-gradient(ellipse at 50% -100%, ${props=> props.theme.hovered} 0,rgba(255,255,255,0) 70%); /* W3C */
}
`

export default StyledHr;