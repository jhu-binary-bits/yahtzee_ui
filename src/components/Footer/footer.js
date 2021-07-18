import React from 'react';
import './footer.css';
import logo from '../../images/TeamLogo.png';

const Footer = () => {

    return (
        <div className="Footer">
            <img src={logo} className="logo" alt="logo" />

               
            <div id="text">  
                <p id="authors">Website made by The Binary Bits</p>
                <p id="MS_Teams">Find us individually on Microsoft Teams</p>    
            </div>
        </div>
    )
}

export default Footer;