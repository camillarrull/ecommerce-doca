import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidgetComponent/CartWidget";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <CartWidget />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
            >
                <NavDropdown
                    title="Accesorios"
                    id="collasible-nav-dropdown"
                    className="justify-content-end"
                >
                    <NavDropdown.Item href="#action/3.1">Aros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Collares
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Pulceras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Holders
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
