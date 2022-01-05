import React from "react";
import Nav from "./Nav";
import logo from "./img/logo192.png";
import './css/header.css';

const Header = () => {
    return(
        <header className="rootHeader">
            <div className="logo"><img src={logo} alt="logo" /><div>REACT PLAYGROUND</div></div>
            <Nav />
        </header>
    )
}

export default Header;