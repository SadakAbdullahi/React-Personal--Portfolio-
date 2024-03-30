import React from "react";
// import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="Container">
           <div className="header">
           <div className="logo"> 
           <h1>Code With <span>Sadak</span></h1>
           </div>
            <nav className="nav" >
                <a href="#">Bio</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
            <a href="#">Contact</a>
            {/* <ul><li> <link to ="/">Bio</link> </li>
            <li> <link to="/Projects"></link> </li>
            <li> <link to="/About"></link> </li>
            <li> <link to="/Skills"></link> </li>
            <li> <link to="/Contact"></link> </li>
            </ul> */}
            </nav>
           </div>
            
        </div>
    );
}

export default Header;
