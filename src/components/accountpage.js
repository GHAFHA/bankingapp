/*
    This file created by Vaughan McInerney (vmm190002)
*/


import React, { useState } from "react";
import { Accordion, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Header from "./UI/Header";

import BankAccount from "./classes/BankAccount";
import CreditCardAccount from "./classes/CreditCardAccount";


const AccountPage = () => {

    const [bankAccountList, setBankAccountList] = useState([]);
    const [creditCardAccountList, setCreditCardAccountList] = useState([]);

    const [addBankAccountFormData, setAddBankAccountFormData] = useState({})
    const [addCreditCardAccountFormData, setAddCreditCardAccountFormData] = useState({})

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
        setAddCreditCardAccountFormData({});
    }

    const handleCreditCardAccountModalClose = () => {
        setShowAddCreditCardAccountModal(false);
        setAddCreditCardAccountFormData({});
    }

    const addBankAccount = () => {
        let newAccountData = {...addBankAccountFormData};
        handleBankAccountModalClose();
        setBankAccountList([...bankAccountList, 
            new BankAccount(newAccountData.accountName, newAccountData.accountNumber, newAccountData.routingNumber)
        ]);
    }

    const addCreditCardAccount = () => {
        let newAccountData = {...addCreditCardAccountFormData};
        handleCreditCardAccountModalClose();
        setCreditCardAccountList([...creditCardAccountList, 
            new CreditCardAccount(newAccountData.accountName, newAccountData.cardNumber, newAccountData.cvv, newAccountData.expirationDate)
        ]);
    }

    const handleCreditCardAccountInputChangeCardNumber = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, cardNumber: e.target.value});
    }
    const handleCreditCardAccountInputChangeExpirationDate = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, expirationDate: e.target.value});
    }
    const handleCreditCardAccountInputChangeCvvCode = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, cvv: e.target.value});
    }
    const handleCreditCardAccountInputChangeAccountName = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, accountName: e.target.value});
    }

    

    const bankAccordion = [];
    const creditCardAccordion = [];

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

    for(let c of creditCardAccountList) {
        creditCardAccordion.push(
            <Accordion.Item eventKey={c.accountId}>
                <Accordion.Header>{c.displayName}</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>Card Number:</Col>
                            <Col>{c.getMaskedCreditCardNumber()}</Col>
                        </Row>
                        <Row>
                            <Col>Expiration Date:</Col>
                            <Col>{c.expirationDate}</Col>
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
                                <Accordion>{creditCardAccordion}</Accordion>
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
        <Modal show={showAddCreditCardAccountModal} onHide={handleCreditCardAccountModalClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>Add Credit Card Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="addCreditCardAccount.accountName" 
                        onChange={handleCreditCardAccountInputChangeAccountName}
                        value={addCreditCardAccountFormData.accountName}
                    >
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                            type="string"
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="addCreditCardAccount.cardNumber" 
                        onChange={handleCreditCardAccountInputChangeCardNumber}
                        value={addCreditCardAccountFormData.cardNumber}
                    >
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control 
                            type="integer"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="addCreditCardAccount.cvv" 
                        onChange={handleCreditCardAccountInputChangeCvvCode}
                        value={addCreditCardAccountFormData.cvv}
                    >
                        <Form.Label>CVV Code</Form.Label>
                        <Form.Control 
                            type="password"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="addCreditCardAccount.expirationDate" 
                        onChange={handleCreditCardAccountInputChangeExpirationDate}
                        value={addCreditCardAccountFormData.expirationDate}
                    >
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control 
                            type="string"
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCreditCardAccountModalClose}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit" onClick={addCreditCardAccount}>
                    Add Credit Card Account
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AccountPage;