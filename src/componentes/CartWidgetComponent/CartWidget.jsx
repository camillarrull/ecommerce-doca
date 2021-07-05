import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../NavBarComponent/logo.ico";
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <Navbar.Brand href="#home">
            <Link to={"/"}>
                <img src={logo} alt="logo" style={{ width: "50%" }} />
            </Link>
        </Navbar.Brand>
    );
};

export default CartWidget;
