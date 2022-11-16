import styled from "styled-components";

export const Component404 = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;


>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3.6em;
    font-weight: bold;
    animation:mymove 2.5s ease 0s 1;
    color: #9e9e9e;
    text-align: center;
}


@keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-100%);
}
  100% {
    opacity:1;
}
}
`

export const Text404 = styled.div`
font-size: 2em;
`