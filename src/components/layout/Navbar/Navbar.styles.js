import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
display: flex;
padding: 20px 2%;
justify-content: center;
align-items: center;
background-color: black;
color: white;
position: fixed;
top: 0;
width: 100%;
border-bottom: 1px solid rgba(0, 0, 0, 0.4);
z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Container}
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s;
    z-index: 999;
    >h2{
        color: white;
        font-size: 2.25em;
        font-weight: bold;
        transition: 1s;
    }
    >h2:hover{
        color: rgb(255, 214, 0);
        
    }
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width:768px){
        display:block ;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
        z-index: 999;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    color: white;
    z-index: 998;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '100%' : '-1000%')};
        left: 0;
        transition: all 1s;
        background-color: black;
    }
`;

export const NavItem = styled.li`
    height:80px;
    border-bottom: 2px solid transparent;
    transition: 1s;
    font-size: 1.2em;


    &:hover{
        border-bottom: 2px solid  rgb(255, 214, 0);
    }

    >h2{
        display: none;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        width: 100%;

        &:hover{
            border: none;
        }
        >h2{
            display: block;
        }
    }
`

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;


    @media screen and (max-width: 768px){
        text-align:center;
        padding:2rem;
        width: 100%;
        display: table;
        
        &:hover{
            color: rgb(255, 214, 0);
            transition: all 0.3s ease;
        }
    }
`

