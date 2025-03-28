import React from "react";
import './navbar.css'; // Import the CSS file
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><b>GRAB HUB</b></div>
            <ul className="nav-links">
                <li><Link to='/'>HOME</Link></li>
                <li>
                    <a href="/categories">Categories</a>
                    <ul className="dropdown">
                        <li>Meals</li>
                        <li>Fruits</li>
                        <li>Drinks</li>
                    </ul>
                </li>
                <li><Link to='/aboutus'>About Us</Link></li>
                <li><Link to='/addproducts'>Add Products</Link></li>
            </ul>
          
            <div className="user-account">
                <Link to='/signup' className="btn btn-warning mx-2">SIGN UP</Link>
                <Link to='/signin' className="btn btn-success mx-2">SIGN IN</Link>
            </div>
        </nav>
    );
};

export default Navbar;