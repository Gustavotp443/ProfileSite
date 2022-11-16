import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: 'Open Sans', sans-serif;
}

html,body{
    height: 100%;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
`

export default GlobalStyles;