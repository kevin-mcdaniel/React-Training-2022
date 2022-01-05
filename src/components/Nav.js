import React from "react";
import {NavLink} from "react-router-dom";
import './css/nav.css';

const Nav = () =>{
    return(
        <nav className="rootNav">
            <NavLink to="/" activeClassName="selected">Home</NavLink>
            <NavLink to = "/scoreboard" activeClassName="selected">Scoreboard</NavLink>  
            <NavLink to="/calculator" activeClassName="selected">Calculator</NavLink>      
        </nav>
    )
}

export default Nav;