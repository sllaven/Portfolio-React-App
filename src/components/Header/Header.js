import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";



const Header = () => {
    return (
        <div className="navbar">
            <Nav className="navbarContainer">
            <Link to="/" className="navbarLogo"><BsBraces/></Link>
            <div className="hamburgerManu">
             <Link to="/sidebar" className="hamburgerManu"><FaBars/></Link>
            </div>
            <ul className="navbarContent">
                <NavLink to="/" exact  activeClassName={"activelink"} className="navLink">Home</NavLink>
                <NavLink to="/about"  activeClassName={"activelink"} className="navLink">About</NavLink>
                <li className="dropdown"><NavLink to="/accounts" activeClassName={"activelink"} className="navLink">Accounts <i className
                ="arrow down"></i></NavLink>
                <div className="dropdown-content">
                    <NavLink to="/add" activeClassName={"activelink"} className="navContent navLink">AddAccount</NavLink>
                    <NavLink to="/edit" activeClassName={"activelink"} className="navContent navLink">Edit/Delete</NavLink>
                </div></li>
                <button className="btnSingIn"><NavLink to="/add" activeClassName={"activelink"}>Sing In</NavLink></button>
            </ul>
        </Nav>
        </div>
        
    );
};

export default Header;
