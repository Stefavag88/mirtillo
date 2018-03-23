import { Icon } from 'antd';
import styled from 'styled-components';
import { sizes } from '../theme';

const StyledCard = styled.div`
    width: 360px;
    height:360px;
    margin: 1em;
    border:1px solid #eaeaea;
    border-radius:0.2em;
    overflow:hidden;
    display:flex;
    position:relative;
    flex-direction:column;
    align-content: space-between;
    justify-content: space-between;
    &:hover{ 
        opacity:0.9
    }

    transition: all 0.4s ease-in-out;
    @media all and (max-width: ${sizes.phone}px){
        width: 280px;
        height:280px;
    }
    @media all and (min-width: ${sizes.phone + 1}px) and (max-width: ${sizes.tablet}px){
        width: 320px;
        height:320px;
    }

`

const StyledImg = styled.img`
    object-fit:cover;
    max-width:100%;
    z-index:2;
    &:hover{
        transform: scale(1.2);
    }
    transition: all 0.4s ease-in-out;
`

const StyledSpan = styled.span`
    z-index:100;
    font-size:1em;
    font-weight:500;
    color:white;
`
const ImageFooter = styled.div`
    position:absolute;
    color: white;
    width:360px;
    top:90%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0.4em;
`

class Product extends React.Component{

    render(){

        const {width, height, id, name, picture} = this.props; 

        return (
            <StyledCard>
                <StyledImg srcset={
                                `/static/images/${picture}-360w.jpg 320w,
                                 /static/images/${picture}-360w_x2.jpg 320w x2,
                                 /static/images/${picture}-496w.jpg 496w,
                                 /static/images/${picture}-496w_x2.jpg 496w x2
                                `}
                           src={`/static/images/${picture}-360w.jpg`} alt={name}/>
                <ImageFooter>
                    <StyledSpan>{name}</StyledSpan>
                    <Icon type="heart"/>
                </ImageFooter>
            </StyledCard>
        )
    }
   
}

export default Product;




