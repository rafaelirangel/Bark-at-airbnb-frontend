import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.png';
import './Layout.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DropdownMenu from "./DopdownMenu";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
                    <input className="inputText" type="text" placeholder="Borough" />
                    <SearchIcon className="searchIcon" />
                </div>

                <div className="headerRight">
                    <DropdownMenu />
                </div>

            <div className="responsiveHeader">
                    <Link className="linkHeader" to="/">
                        <ArrowBackIosIcon />
                    </Link>
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