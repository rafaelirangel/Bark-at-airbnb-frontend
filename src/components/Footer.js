import React from "react";
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    return (
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
    )
}

export default Footer 