import styled from 'styled-components';
import { Container } from '../globalStyles';


export const HomeContainer = styled(Container)`
    width: 100%;
    padding:60px 2%;
    min-height: 80vh;
`;

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    animation:mymove 2.5s ease 0s 1;
    
    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
}
  100% {
    opacity:1;
}

`


export const TextInfo = styled.div`
    width: 50%;
    justify-content: center;
    display: flex;
    text-align: justify;
    font-weight: bold;
    font-size: 3em;
    line-height: 75px;
    display: flex;
    flex-direction: column;
   
    > div > p > span{
        background-color: #ffd600;
        color: white;
        padding: 10px;
        border-radius: 10px;
        }

    @media screen and (max-width:960px){
        width: 100%;
        >div{text-align: center;}
    }
    @media screen and (max-width:480px){
        font-size: 2em;
    }
`

export const Subtext = styled.div`
        font-size: 16px;
        flex-wrap: wrap;
        line-height: 36px;
        margin-top: 40px;
        color:#9e9e9e;

     span{
        font-size: 26px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        gap: 36px;
    }

     >span>a{
        text-decoration: none;
        color: #9e9e9e;
        transition: 0.5s;
    }

    >span>a:hover{
        color: black;
    }

     svg{
        margin-top: 30px;
    }
    @media screen and (max-width:960px){
        text-align: center;
    }
`
export const ImgInfo = styled.div`
    width: 50%;
    text-align: center;
    >img{
        width:418.6px; 
        height:519.2px;
    }
    @media screen and (max-width:960px){
        width: 100%;
        margin-top: 80px;
    }
    @media screen and (max-width:512px){
        >img{
            width:calc(418.6px /2); 
            height:calc(519.2px/2);
        }
    }
`
