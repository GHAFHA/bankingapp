/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file created by Noel Johnson (nxj190008)

    This file is part of the user interface.  It generates the Login page in the CometWallet app.
*/

import React from "react";
import { Container, Form, Button, Row, Col, Grid } from "react-bootstrap";
import "./loginpage.css";
import { Link } from "react-router-dom";

//state management using useState and useReducer

import LoginController from "../classes/LoginController";

const Login = () => {
  return (
    <div>
          <Row>
        <div id="loginpage-main">
            <div id="form-holder">
              <h1 id="login-text">Login</h1>
                <table id="form-container">
                        <input id="input-id" type="text" placeholder ="Enter Netid"></input>
                        <input id="input-id" type="password" placeholder="Enter Password"></input>
                          <Link to = "./account" >
                            <button id="form-button"> Login </button>
                            <button id="form-button"> Forgot Password ?</button>
                          </Link>
              </table>
              <div id="image-holder">
                <image id="image"></image>
              </div>
          </div>
        </div>
        </Row>
    </div>
  );
};

export default Login;
