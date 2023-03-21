import React from "react";
import './Header.css';
import logo from '../img/airbnbLogo.jpg'

function Header() {
    return (
        <div className="header">
            <img className="headerLogo"
            scr='{logo}' alt="Logo"
            />
            <h1>Header Component</h1>


        </div>
    )
}

export default Header 