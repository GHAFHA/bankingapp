/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file is part of the user interface.  It generates the settings page.
*/

import React from "react";
import Dropdown from "react-bootstrap/Dropdown"

const Settings = () => {
    return (
        <div>
            <h1>Welcome to the Settings Page</h1>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">User information</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Notification Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Security Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Deactivate account</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Useful links</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    )
}

export default Settings;