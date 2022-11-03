import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import "./Homepage.css"
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className ="main">
            <Container>
                <Row>
                    <div className="content-container">
                        <div className="text-container">
                            <h1 className="title">CometWallet</h1>
                            <p className="subtitle">Helping Students manage their finances</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to ="./login">
                                <Button size="lg" className="landingbutton">Login</Button>
                            </Link>
                            <Link to ="./registration">
                                <Button className="landingbutton" variant="outline-primary" size='lg'>Register</Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;