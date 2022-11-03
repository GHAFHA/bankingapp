/*
    This file created by Vaughan McInerney (vmm190002)
*/


import React, { useState } from "react";
import { Accordion, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Header from "./UI/Header";

class FinancialAccount {
    constructor(displayName) {
        this.accountId = Math.floor(Math.random() * 9000000) + 1000000;
        this.isValid = true;
        this.displayName = displayName;
    }

    validate() {
        return this.isValid;
    }

}

class BankAccount extends FinancialAccount {
    constructor(displayName, accountNumber, routingNumber) {
        super(displayName);
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
    }

    getMaskedAccountNumber() {
        let output = "";
        let routingNumberString = "" + this.routingNumber
        for(let i = 0; i < routingNumberString.length - 4; i++) {
            output += "*";
        }
        output += routingNumberString.substring(routingNumberString.length - 4);
        return output;
    }
}



const AccountPage = () => {

    const [bankAccountList, setBankAccountList] = useState([]);

    const [addBankAccountFormData, setAddBankAccountFormData] = useState({})

    const [showAddBankAccountModal, setShowAddBankAccountModal] = useState(false);
    const [showAddCreditCardAccountModal, setShowAddCreditCardAccountModal] = useState(false);

    const handleBankAccountModalShow = () => {
        setShowAddBankAccountModal(true);
        setAddBankAccountFormData({});
    }

    const handleBankAccountModalClose = () => {
        setShowAddBankAccountModal(false);
        setAddBankAccountFormData({});
    }

    const handleBankAccountInputChangeAccountNumber = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, accountNumber: e.target.value});
    }
    const handleBankAccountInputChangeRoutingNumber = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, routingNumber: e.target.value});
    }
    const handleBankAccountInputChangeAccountName = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, accountName: e.target.value});
    }

    const handleCreditCardAccountModalShow = () => {
        setShowAddCreditCardAccountModal(true);
    }

    const handleCreditCardAccountModalClose = () => {
        setShowAddCreditCardAccountModal(false);
    }

    const addBankAccount = () => {
        console.log("addBankAccount has been called with event");
        let newAccountData = {...addBankAccountFormData};
        handleBankAccountModalClose();
        setBankAccountList([...bankAccountList, 
            new BankAccount(newAccountData.accountName, newAccountData.accountNumber, newAccountData.routingNumber)
        ]);
    }

    const bankAccordion = []
    for(let b of bankAccountList) {
        bankAccordion.push(
            <Accordion.Item eventKey={b.accountId}>
                <Accordion.Header>{b.displayName}</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>Routing Number:</Col>
                            <Col>{b.routingNumber}</Col>
                        </Row>
                        <Row>
                            <Col>Account Number:</Col>
                            <Col>{b.getMaskedAccountNumber()}</Col>
                        </Row>
                        <Row>&nbsp;</Row>
                        <Row>
                            <Col>
                                <Button variant="danger">Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    return (
        <>
        <Container>
            <Row>&nbsp;</Row>
            <Row>
                <Col>
                    <Header title="Accounts" />
                </Col>
                <Col>&nbsp;</Col>
                <Col>
                    
                </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Bank Accounts</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>{bankAccordion}</Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div>&nbsp;</div>
                    <Button onClick={handleBankAccountModalShow}>Add Bank Account</Button>
                    <div>&nbsp;</div>
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Credit Card Accounts</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div>&nbsp;</div>
                    <Button onClick={handleCreditCardAccountModalShow}>Add Credit Card Account</Button>
                    <div>&nbsp;</div>
                </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
                
            </Row>
        </Container>
        <Modal show={showAddBankAccountModal} onHide={handleBankAccountModalClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>Add Bank Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="addBankAccount.accountName" 
                        onChange={handleBankAccountInputChangeAccountName}
                        value={addBankAccountFormData.accountName}
                    >
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                            type="string"
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="addBankAccount.routingNumber" 
                        onChange={handleBankAccountInputChangeRoutingNumber}
                        value={addBankAccountFormData.routingNumber}
                    >
                        <Form.Label>Routing Number</Form.Label>
                        <Form.Control 
                            type="integer"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="addBankAccount.accountNumber" 
                        onChange={handleBankAccountInputChangeAccountNumber}
                        value={addBankAccountFormData.accountNumber}
                    >
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control 
                            type="password"
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleBankAccountModalClose}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit" onClick={addBankAccount}>
                    Add Bank Account
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AccountPage;