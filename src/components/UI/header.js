import React from "react";
import "./Header.css"
import Button from 'react-bootstrap/Button';

const Header = ({title, description,image}) =>{

    return(
        <div className="header-container">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <Button variant="warning">Warning</Button>
        </div>
    );
}

export default Header;