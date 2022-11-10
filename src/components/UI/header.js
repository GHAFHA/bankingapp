/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Noel Johnson (nxj190008)

    This file is part of the user interface.  It generates a header component with large, visible text.
*/

import React from "react";
import "./header.css"

const Header = ({ title, description, image, longdescription }) => {

    return (
        <div className="header-container">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{longdescription}</p>
        </div>
    );
}

export default Header;