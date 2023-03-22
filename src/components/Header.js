import React from "react";
import './Header.css';
import logo from '../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="header">
            {/* <img className="headerLogo"
            src='{logo}' alt="Logo"
            /> */}
            <img
                    className="headerLogo"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />

                <div className="searchCenter">
                    <input type="text" />
                    <SearchIcon />
                </div>

                <div className="headerRight">
                    <Avatar />
                </div>
        </div>
    )
}

export default Header 