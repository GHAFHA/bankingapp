/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Noel Johnson (nxj190008)

    This file is part of the user interface.  It generates the navigation bar seen 
    at the top of every page when the user is logged into the CometWallet app.
*/

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/login/account">CometWallet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login/account">Accounts</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/notificationsettings">Notification Settings</NavDropdown.Item>
              <NavDropdown.Item href="/userinfo">User Information</NavDropdown.Item>
              <NavDropdown.Item href="/securitysettings">Security Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;