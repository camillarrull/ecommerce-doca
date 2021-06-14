import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../NavBarComponent/logo.ico";
const CartWidget = () => {
    return (
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ width: "50%" }} />
        </Navbar.Brand>
    );
};

export default CartWidget;
