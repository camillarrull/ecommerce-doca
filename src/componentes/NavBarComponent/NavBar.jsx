import React from "react";
import { Navbar } from "react-bootstrap";
import CartWidget from "../CartWidgetComponent/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ cart }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <CartWidget />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
            >
                <Link to="/aros">
                    <li
                        className="nav-item"
                        style={{ listStyle: "none", margin: "10px" }}
                    >
                        Aros
                    </li>
                </Link>
                <li
                    className="nav-item"
                    style={{ listStyle: "none", margin: "10px" }}
                >
                    Collares
                </li>
                <li
                    className="nav-item"
                    style={{ listStyle: "none", margin: "10px" }}
                >
                    Pulceras
                </li>
                <li className="nav-item">Carrito : {cart}</li>
                {/* <NavDropdown
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
                </NavDropdown> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
