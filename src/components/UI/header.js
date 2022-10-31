import React from "react";
import "./Header.css"
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const Header = ({title, description,image}) =>{

    return(
        <div className="header-container">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>
    );
}

export default Header;