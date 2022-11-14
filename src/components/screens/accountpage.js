/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Vaughan McInerney (vmm190002)

    This file is part of the user interface.  It generates the Account page in the CometWallet app.
*/


import React, { useState } from "react";

// import useful bootstrap components, and the header/navigation bar
import { Accordion, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Header from "../UI/header";

// import classes to use on the page
import BankAccount from "../classes/BankAccount";
import CreditCardAccount from "../classes/CreditCardAccount";

// main function that returns the HTML for the account page.
const AccountPage = () => {

    // create state variables to temporarily save data entered on the page 
    const [bankAccountList, setBankAccountList] = useState([]);
    const [creditCardAccountList, setCreditCardAccountList] = useState([]);

    // create state variables to remember the data entered in forms/modals
    const [addBankAccountFormData, setAddBankAccountFormData] = useState({})
    const [addCreditCardAccountFormData, setAddCreditCardAccountFormData] = useState({})

    // create state variables to remember whether each modal is visible or hidden
    const [showAddBankAccountModal, setShowAddBankAccountModal] = useState(false);
    const [showAddCreditCardAccountModal, setShowAddCreditCardAccountModal] = useState(false);
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

    const [addBankAccountModalSubmitButtonEnabled, setAddBankAccountModalSubmitButtonEnabled] = useState(false);
    const [addCreditCardAccountModalSubmitButtonEnabled, setAddCreditCardAccountModalSubmitButtonEnabled] = useState(false);


    // create a state variable to track which account is being deleted
    const [accountPendingDeletion, setAccountPendingDeletion] = useState(null);


    // create helper functions for opening and closing the "Add Account" modals
    const handleBankAccountModalShow = () => {
        setShowAddBankAccountModal(true);
        setAddBankAccountFormData({});
        setAddBankAccountModalSubmitButtonEnabled(false);
    }

    const handleBankAccountModalClose = () => {
        setShowAddBankAccountModal(false);
        setAddBankAccountFormData({});
        setAddBankAccountModalSubmitButtonEnabled(false);
    }
    
    const handleCreditCardAccountModalShow = () => {
        setShowAddCreditCardAccountModal(true);
        setAddCreditCardAccountFormData({});
        setAddCreditCardAccountModalSubmitButtonEnabled(false);
    }

    const handleCreditCardAccountModalClose = () => {
        setShowAddCreditCardAccountModal(false);
        setAddCreditCardAccountFormData({});
        setAddCreditCardAccountModalSubmitButtonEnabled(false);
    }

    const handleDeleteAccountModalShow = (accountToDelete) => {
        setAccountPendingDeletion(accountToDelete);
        setShowDeleteAccountModal(true);
    }

    const handleDeleteAccountModalClose = () => {
        setShowDeleteAccountModal(false);
        setAccountPendingDeletion(null);
    }


    // create helper functions for changing the state variables 
    // whenever a form field is updated in a modal
    const handleBankAccountInputChangeAccountNumber = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, accountNumber: e.target.value});
        setAddBankAccountModalSubmitButtonEnabled(
            BankAccount.isValidFormData({...addBankAccountFormData, accountNumber: e.target.value})
        );
    }
    const handleBankAccountInputChangeRoutingNumber = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, routingNumber: e.target.value});
        setAddBankAccountModalSubmitButtonEnabled(
            BankAccount.isValidFormData({...addBankAccountFormData, routingNumber: e.target.value})
        );
    }
    const handleBankAccountInputChangeAccountName = (e) => {
        setAddBankAccountFormData({...addBankAccountFormData, accountName: e.target.value});
        setAddBankAccountModalSubmitButtonEnabled(
            BankAccount.isValidFormData({...addBankAccountFormData, accountName: e.target.value})
        );
    }

    const handleCreditCardAccountInputChangeCardNumber = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, cardNumber: e.target.value});
        setAddCreditCardAccountModalSubmitButtonEnabled(
            CreditCardAccount.isValidFormData({...addCreditCardAccountFormData, cardNumber: e.target.value})
        )
    }
    const handleCreditCardAccountInputChangeExpirationDate = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, expirationDate: e.target.value});
        setAddCreditCardAccountModalSubmitButtonEnabled(
            CreditCardAccount.isValidFormData({...addCreditCardAccountFormData, expirationDate: e.target.value})
        )
    }
    const handleCreditCardAccountInputChangeCvvCode = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, cvv: e.target.value});
        setAddCreditCardAccountModalSubmitButtonEnabled(
            CreditCardAccount.isValidFormData({...addCreditCardAccountFormData, cvv: e.target.value})
        )
    }
    const handleCreditCardAccountInputChangeAccountName = (e) => {
        setAddCreditCardAccountFormData({...addCreditCardAccountFormData, accountName: e.target.value});
        setAddCreditCardAccountModalSubmitButtonEnabled(
            CreditCardAccount.isValidFormData({...addCreditCardAccountFormData, accountName: e.target.value})
        )
    }


    // create helper functions for adding BankAccount 
    // and CreditCardAccount objects to the account lists
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

    const deleteAccount = () => {
        handleDeleteAccountModalClose();
        if(CreditCardAccount.prototype.isPrototypeOf(accountPendingDeletion)) {
            setCreditCardAccountList(creditCardAccountList.filter(n => n !== accountPendingDeletion));
        }
        if(BankAccount.prototype.isPrototypeOf(accountPendingDeletion)) {
            setBankAccountList(bankAccountList.filter(n => n !== accountPendingDeletion));
        }
    }

    
    // create variables to hold the HTML elements displaying account information
    // the interface uses a bootstrap "Accordion" to expand and collapse account details.
    const bankAccordion = [];
    const creditCardAccordion = [];

    // build the visual list of bank accounts by pushing 
    // accordion items into the array
    for(let b of bankAccountList) {
        bankAccordion.push(
            <Accordion.Item key={b.accountId} eventKey={b.accountId}>
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
                                <Button variant="danger" onClick={() => {handleDeleteAccountModalShow(b)}}>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    // build the visual list of credit card accounts by pushing 
    // accordion items into the array
    for(let c of creditCardAccountList) {
        creditCardAccordion.push(
            <Accordion.Item key={c.accountId} eventKey={c.accountId}>
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
                                <Button variant="danger" onClick={() => {handleDeleteAccountModalShow(c)}}>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        )
    }


    let bankAccountModal = (
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
                <Button variant="primary" disabled={!addBankAccountModalSubmitButtonEnabled} type="submit" onClick={addBankAccount}>
                    Add Bank Account
                </Button>
            </Modal.Footer>
        </Modal>
    )

    let creditCardAccountModal = (
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
                        <Form.Label>Expiration Date (MM/YYYY)</Form.Label>
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
                <Button variant="primary" disabled={!addCreditCardAccountModalSubmitButtonEnabled} type="submit" onClick={addCreditCardAccount}>
                    Add Credit Card Account
                </Button>
            </Modal.Footer>
        </Modal>
    )

    let deleteAccountModal = (
        <Modal show={showDeleteAccountModal} onHide={handleDeleteAccountModalClose} backdrop="static">
            <Modal.Header>
                <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this account?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteAccountModalClose}>
                    Cancel
                </Button>
                <Button variant="danger" type="submit" onClick={deleteAccount}>
                    Delete Account
                </Button>
            </Modal.Footer>
        </Modal>
    )



    // This is the return statement for the AccountPage function.  
    // The return value is an entire HTML webpage which will be 
    // parsed and displayed to the user.
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

        {/* The modal objects, although hidden by default, must be returned as elements */}
        {bankAccountModal}
        {creditCardAccountModal}
        {deleteAccountModal}
        </>
    )
}

export default AccountPage;