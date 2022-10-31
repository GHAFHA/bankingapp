import React from "react";
import "./Header.css"

const Header = ({title, description,image}) =>{

    return(
        <div className="header-container">
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    );
}

export default Header;