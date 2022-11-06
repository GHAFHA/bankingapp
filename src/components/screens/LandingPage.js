/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    
    Professor Srimathi Srinivasan
    
    This file created by Noel Johnson (nxj190008)
    
    This CSS file provides styling for the Homepage component.
*/

import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import "./LandingPage.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div className ="landingpage-main">
            <Container>
                <Row className="Row-Container">
                    <Col className="Col-Container">
                    <div className="content-container">
                        <div className="text-container">
                            <h1 className="title">CometWallet</h1>
                            <p className="subtitle">Helping UTD students manage their finaces, one card at a time</p>
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

export default LandingPage;

/*
                    <div className="content-container">
                        <div className="text-container">
                            <h1 className="title">CometWallet</h1>
                            <p className="subtitle">Helping Students manage their finances</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to ="./login">
                                <Button size="lg" className="landingbutton" >Login</Button>
                            </Link>
                            <Link to ="./registration">
                                <Button className="landingbutton" variant="outline-primary" size='lg'>Register</Button>
                            </Link>
                        </div>
                    </div>
*/
