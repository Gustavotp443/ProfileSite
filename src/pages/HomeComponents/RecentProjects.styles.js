import styled from "styled-components";
export const ProjectsWrapper = styled.div`
    min-height: 80vh;
    padding: 120px 2%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    animation:mymove 2.5s ease 0s 1;
    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
}
  100% {
    opacity:1;
}}
    .slide{
    opacity: 0;
    transition: 1s ease;
    
}
.slide.active{
    z-index: 10;
opacity: 1;
transition-duration:1s;
transform: scale(1.02);}
`
export const ProjectsHeader = styled.div`
    color: white;
    span{
    background-color: rgb(255, 214, 0);
    padding: 10px;
    border-radius:10px;
    }
    h2{
        font-size: 2.2em;
    }
    >p{

        font-size: 1.7em;
        margin-top: 10px;
        color: #bdbdbd;
    }
`
export const ProjectsSlider = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const SliderContainer = styled.div`
    margin-top: 60px;
    position: relative;
    height: 350px;
    width: 600px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 16px 16px 2px 1px rgba(255, 214, 0,0.8);

    @media screen and (max-width:580px){
        width: 800px;
    }
`
export const SliderBox = styled.div`
position: absolute;
background-color: black;
color: white;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
transition: opacity .2s;
border-radius: 10px;


`
export const SliderTop = styled.div`
margin-top:20px;
height: 20%;
    >h2{
    justify-content: justify;
    }

    
   
`
export const SliderText = styled.div`
color: #ccc;
height: 50%;
display: flex;
justify-content: flex-start;
text-align: justify;
margin: 0 8%;
    >p{
        
    }
`

export const SliderButton = styled.div`
    position: relative;
    top: -20px;
    height: 30%;
    button{
    width: 150px;
    height: 60px;
    border-radius: 5px;
    background-color:rgb(255, 214, 0) ;
    font-weight: bold;
    cursor: pointer;
    border: 5px solid rgb(255, 150, 0);
    border-top-color:rgb(255, 214, 0);
    border-left-color:rgb(255, 214, 0);
    border-right-color:rgb(255, 214, 0);
    transition: 0.5s;
    }
    button a{
        text-decoration: none;
        color: inherit;
    }
    button svg{
    font-size: 16px;
}

    >button:hover{
    border-bottom-color:rgb(255, 214, 0);
    color: white;
    transform: translate(10%);
}
`
export const LeftArrow = styled.div`
margin: 0 2%;
user-select: none;
background-color: transparent;
>svg{
        font-size: 3em;
        cursor: pointer;
    }
    >svg:hover{
        font-size:3.2em;
    }
`
export const RightArrow = styled.div`
background-color: transparent;
user-select: none;
margin: 0 2%;
>svg{
        font-size: 3em;
        cursor: pointer;
    }
    >svg:hover{
        font-size:3.2em;
    }
`
export const MaisProjetos = styled.div`
margin-top: 80px;
`

export const ButtonLink = styled.button`
        font-size: 0.8em;
        width: 130px;
        height: 60px;
        color: white;
        background-color: #64b5f6;
        border-bottom: 5px solid #0d47a1;
        border-top: none;
        border-left:none;
        border-right: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s ease;
        text-decoration: none;

        &:hover{
            transform: scale(1.02);
            background-color:#0d47a1 ;
        }
`

export const MobileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 1.5em;
` 