/*This file and project was set-up by Noel Johnson nxj190008 */
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const TopNav = () =>{
    return(
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CometWallet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/account">Accounts</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/userinfo">User Information</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notification Settings</NavDropdown.Item>
              <NavDropdown.Item href="/securitysettings">Security Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default TopNav;