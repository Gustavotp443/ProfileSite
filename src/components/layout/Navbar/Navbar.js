import React, { useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.styles';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'


const Navbar = () => {

    const [click, setClick] = useState(false);        //False quer dizer, não clicado

    const handleClick = () => setClick(!click)           //!click, sempre o oposto ent se false>true se true>false



    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Nav>
                    <NavbarContainer >
                        <NavLogo to="/">
                            <h2>GTP</h2>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <h2>GTP</h2>
                            </NavItem>
                            <NavItem><NavLinks to='/'>Inicio</NavLinks></NavItem>
                            <NavItem><NavLinks to='/projects'>Projetos</NavLinks></NavItem>
                            <NavItem><NavLinks to='/blog'>Blog</NavLinks></NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;