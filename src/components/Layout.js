import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.png';
import './Layout.css'
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useParams, useLocation } from 'react-router-dom';

//Icons used on the page
import LanguageIcon from '@mui/icons-material/Language';
import DropdownMenu from "./DopdownMenu";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteIcon from '@mui/icons-material/Favorite';

//Component contains header and footer
const Layout = () => {

    return (
        <div className="layout">
            <nav className="header">
                <Link className="linkHeader" to="/airbnb">
                    <img className="headerLogo" src={logo} alt="Logo" />
                </Link>

                <div className="searchBar">
                    <p className="fixedText">Any where in NYC</p>
                    <p className="fixedText"> Any week</p>
                    <SearchBar />
                </div>

                <div className="headerRight">
                    <DropdownMenu />
                </div>
            </nav>

            <div className="responsiveHeader">
                <nav className="resHeader">
                    <Link className="linkHeader" to="/airbnb">
                        <ArrowBackIosIcon className="arrowLogo" />
                    </Link>

                    <div className="saveShare">
                        <IosShareIcon />
                        <FavoriteIcon />
                    </div>

                </nav>
            </div>

            {/* Whatever goes bellow Outlet is the unique content of the pages */}
            <Outlet />
            <div className="footer">
                <div className="footerLeft">
                    <p>© 2023 Bark Airbnb</p>
                    <p> · Terms · Sitemap · Privacy · Your Privacy Choices · Destinations</p>
                </div>

                <div className="footerRight">
                    <LanguageIcon />
                    <p> English (US) </p>
                    <p> $ USD </p>
                </div>
            </div>
        </div>
    )
}

export default Layout