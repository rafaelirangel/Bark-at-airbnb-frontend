import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.png';
import './Layout.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';

const Layout = () => {
    return (
        <div className="layout">
            <nav className="header">
                <Link className="linkHeader" to="/">
                    <img className="headerLogo" src={logo} alt="Logo" />
                </Link>

                <div className="searchCenter">
                    {/* <p className="fixedText">Any where in NYC </p>  */}
                    {/* <p className="verticalLine"> | </p>
                <p className="fixedText">Any week</p>
                <p className="verticalLine"> | </p> */}
                    <input type="text" placeholder="Where" />
                    <SearchIcon className="searchIcon" />
                </div>

                <div className="headerRight">
                    <Avatar />
                </div>
            </nav>

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