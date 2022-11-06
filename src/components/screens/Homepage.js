/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Noel Johnson (nxj190008)

    This file is part of the user interface.  It generates the landing page 
    in the CometWallet app, which is displayed before the user is logged in.
*/

// import necessary UI components
import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";

// import stylesheets
import "./Homepage.css"

// import application structuring tools
import { Link } from "react-router-dom";

// main function that returns the HTML for the homepage
const HomePage = () => {
    return(
        <div className ="landingpage-main">
            <Container>
                <Row className="Row-Container">
                    <Col className="Col-Container">
                    <div className="content-container">
                        <div className="text-container">
                            <h1 className="title">CometWallet</h1>
                            <p className="subtitle">Helping UTD students manage their finances, one card at a time</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to ="./login">
                                <Button className="loginbutton" variant="dark">Login</Button>
                            </Link>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;
