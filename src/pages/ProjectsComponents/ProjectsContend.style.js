import styled from "styled-components"

export const ProjectTopWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    margin-top: 80px;
    margin: 80px 2% 0 2%;
    animation:mymove 2.5s ease 0s 1;
    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
}
  100% {
    opacity:1;
}}
`

export const ProjectsText = styled.div`
width: 50%;
>h1{
    font-size: 2.6em;
    font-weight: 700;
}
@media screen and (max-width:980px){
    width: 100%;
    text-align: center;
}
`

export const ProjectsSlide = styled.div`
width: 50%;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 300px;
    width: 500px;
    box-shadow: 16px 16px 2px 1px rgba(100,181,246);
    @media screen and (max-width:520px){
    height: 225px;
    width: 325px; 
}
}
h2{
    color: white;
    font-size: 2.4em;
}

@media screen and (max-width:980px){
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
}


`


export const ProjectMain = styled.div`
   animation:mymove 2.5s ease 0s 1;
    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
}
  100% {
    opacity:1;
}
}
`

export const MainText = styled.div`
padding: 200px 0 40px 0;
margin: 0 2%;
@media screen and (max-width: 580px){
    text-align: center;
}
    >h1{
        color: #bdbdbd;
    font-weight: 400;
    font-size: 1.6em;
}
>h2{
    font-size: 1.7em;
}

`

export const Main = styled.div`
    text-align: center;
    margin:0 2%;
`
export const BoxContainer = styled.div`
    align-items: center;
    padding: 60px 2%;
    justify-content: center;
`

export const Box = styled.div`
    background-color:rgb(255, 214, 0);
    color: black;
    border: 1px solid rgba(0,0,0,0.1);
    width: 250px;
    height: 130px;
    padding: 40px 4%;
    border-radius: 20px;
    box-shadow: 16px 16px 2px 1px rgba(100,181,246);
    transition: all 0.5s ease;
   


&:hover{
    color: white;
    transform: translateY(-20%);
}

    h1{
        margin-top: -20px;
        margin-bottom: 20px;
    }
    p{
    font-size: 1.2em;
}
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 12%;
    }
    a{
        color: inherit;
        transition: transform 0.5s ease;
    }
    svg{
        font-size:1.4em;
        
    }
    a:hover{
        transform: scale(1.3);
    }
`

