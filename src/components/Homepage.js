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
            <Header
                title="CometWallet"
                description="Banking made simple for students"
            />
            <Button variant="primary" size="lg">Login</Button>
            </Col>
            </Row>
        </div>
        </Container>
    )
}

export default HomePage;