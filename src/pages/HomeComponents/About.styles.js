import styled from "styled-components";

export const AboutContainer = styled.div`
    margin-top: 30px;
    padding:50px 3%;
    background-color:#f5f5f5;
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

export const AboutHeader = styled.div`
>h1{
    color: #bdbdbd;
    font-weight: 400;
    font-size: 1.6em;
}
>h2{
    font-size: 1.7em;
}
@media screen and (max-width:400px){
    text-align: center;
}
`

export const AboutText = styled.div`
margin-top: 30px;
line-height: 36px;
text-align: justify;
text-justify: distribute;
text-align-last: left;
text-indent:3em;
@media screen and (max-width:400px){
    text-indent:0;
    text-align: center;
    text-align-last: center;
}
`

export const TextTop = styled.div`
font-size: 1.2em;
color: #9e9e9e ;

`

export const TextBot = styled.div`
margin-top: 40px;
font-size: 1.2em;
color: #9e9e9e ;
`

export const AboutIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 60px;
    svg{
        font-size: 2em;
        color: #9e9e9e
    }
`