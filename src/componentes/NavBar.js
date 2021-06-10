import React from 'react';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import logo from '../logo.ico'



const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img src={logo} alt='logo' style={{ width: '50%' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                <NavDropdown title="Accesorios" id="collasible-nav-dropdown" className="justify-content-end">
                    <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Collares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pulceras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Holders</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default NavBar;