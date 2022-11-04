/*This file and project was set-up by Noel Johnson nxj190008 */
import React from "react";
import "./Header.css"

const Header = ({title, description,image, longdescription}) =>{

    return(
        <div className="header-container">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{longdescription}</p>
        </div>
    );
}

export default Header;