import React from "react";
import Header from "./UI/Header";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";

const HomePage = () => {
    return(
        <Container>
        <div className="container-text-center">
            <Row>
            <Col>
            <div className="header-container ">
            <Header
                title="CometWallet"
                description="Banking made simple for students"
                longdescription="The goal for CometWallet is to making banking easier for students"
            />
            </Col>
            </Row>
        </div>
        </Container>
    )
}

export default HomePage;