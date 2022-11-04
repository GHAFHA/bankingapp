import React from "react";
import {Container, Row, Col, Button, Form, Card, ListGroup} from "react-bootstrap";
import "./Registration.css"

const Registration = () => {
    return (
        <div className="registration-main">
            <Container>
                <Row className="Row-Contianer">
                    <Col className="Col-Container">
                    <div className="form-container">
                    <div className="form-text">
                        <div className="form-header">
                            <h1 className="form-title"> Register </h1>
                        </div>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration;