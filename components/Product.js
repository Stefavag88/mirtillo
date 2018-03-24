import StyledIcon from './StyledIcon'
import StyledTooltip from './StyledTooltip'
import {Tooltip} from 'antd'
import styled from 'styled-components'
import { sizes } from '../theme'
import StyledButton from './StyledButton'
import Router from 'next/router'

const StyledCard = styled.div`
    width: 320px;
    height:320px;
    margin: 1em;
    border-radius:0.2em;
    overflow:hidden;
    display:flex;
    position:relative;
    flex-direction:column;
    align-content: space-between;
    justify-content: space-between;
    background:rgba(255,255,255,0.7);
    transition: all 0.4s ease-in-out;
    @media all and (max-width: ${sizes.phone}px){
        width: 280px;
        height:280px;
    }
    @media all and (min-width: 550px) and (max-width: ${sizes.tablet}px){
        width: 496px;
        height: 496px;
    }

`

const StyledPic = styled.picture`
    object-fit:cover;
    max-width:100%;
    z-index:2;
    &:hover{
        transform: scale(1.2);
    }
    transition: all 0.4s ease-in-out;
`
const StyledProductName = styled.span`
    position:absolute;
    margin:1em;
    bottom:0;
    font-size:1.2em;
    font-weight:500;
    left:${props => props.show ? '0' : '-100%'};
    z-index:${props => props.show ? '40' : '0'};
    color:${props => props.show ? 'white' : 'transparent'};
    transition: all 0.256s ease-in-out;
`

const StyledProductIcons = styled.section`
    display:flex;
    flex-direction:column;
    position:absolute;
    top:0;
    font-size:1.5em;
    font-weight:700;
    right:${props => props.show ? '0' : '-100%'};
    z-index:${props => props.show ? '40' : '0'};
    color:${props => !props.show && 'transparent'};
    transition: all 0.256s ease-in-out;
`

class Product extends React.Component{

    constructor(){
        super();

        this.state={isMouseOn:false}
    }

    onMouseEnter = (ev) => {
            this.setState({isMouseOn:true});
    }

    onMouseLeave = (ev) => {
        this.setState({isMouseOn:false})
    }

    navigateToProduct = (id) => {
        Router.push({
            pathname: `/product/${id}`,
            
          })
    }

    render(){
        const {width, height, id, name, picture} = this.props; 

        return (
            <StyledCard onMouseEnter={this.onMouseEnter} 
                        onMouseLeave={this.onMouseLeave} 
                        onClick={() => this.navigateToProduct(id)}>
               <StyledPic>
                    <source media="(max-width: 420px)"
                            srcset={`/static/images/${picture}-360w.jpg 1x, /static/images/${picture}-360w_2x.jpg 2x`}/>
                    <source media="(min-width: 421px) and (max-width: 768px)"
                            srcset={`/static/images/${picture}-496w.jpg 1x, /static/images/${picture}-496w_2x.jpg 2x`}/>
                    <img src={`/static/images/${picture}-360w.jpg`} key={id} alt={name}/>        
                </StyledPic>
                <StyledProductName show={this.state.isMouseOn}>{name}</StyledProductName>}
                <StyledProductIcons show={this.state.isMouseOn}>
                    <StyledTooltip placement='topLeft' title='Add To Favorites'>
                        <StyledButton circle icon="heart"/>
                    </StyledTooltip>
                </StyledProductIcons>
            </StyledCard>
             
        )
    }
   
}

export default Product;




