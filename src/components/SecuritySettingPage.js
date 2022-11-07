
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import App from "../App";
import React, { useState } from 'react';


const SecuritySetting = () => {
    
  

    

  

    return (

        <div>
          
          
        
            
            <h1><center>Security Settings</center></h1>
            <h2><font size = "4">This system is using Single sign-on(SSO)</font></h2>
            
            <div>&nbsp;</div>

            <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th colSpan={2}>User Id</th>
          <th colSpan={2}>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2}>Oscar Mata</td>
          <td colSpan={2}>Contact UTD to change</td>
        </tr>
      </tbody>

    </Table>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    
    <Table striped bordered hover size="lg">
      <tbody>  
        <tr>
          <td colSpan={2}>Two-Factor Authentication</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="options" defaultValue={2}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} >
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
        <tr>
          <td colSpan={2}>Email</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="email" defaultValue={4}>
        <ToggleButton id="tbg-radio-3" value={3}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-4" value={4}>
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
        <tr>
          <td colSpan={2}>Authenticator App</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="app" defaultValue={6}>
        <ToggleButton id="tbg-radio-5" value={5}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-6" value={6}>
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
      </tbody>

      <div>&nbsp;</div>
    <div>&nbsp;</div>
    </Table>
    <Table striped bordered hover size="lg">
      <tbody>  
        <tr>
          
          <td colSpan={2}>Login Notification</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="notif" defaultValue={8}>
        <ToggleButton id="tbg-radio-7" value={7}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-8" value={8}>
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
        <tr>
          <td colSpan={2}>Email</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="no" defaultValue={10}>
        <ToggleButton id="tbg-radio-9" value={9}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-10" value={10}>
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
        <tr>
          <td colSpan={2}>SMS</td>
          <td colSpan={2}><ToggleButtonGroup type="radio" name="sms" defaultValue={12}>
        <ToggleButton id="tbg-radio-11" value={11}>
          Active
        </ToggleButton>
        <ToggleButton id="tbg-radio-12" value={12}>
          Deactive
        </ToggleButton>
      </ToggleButtonGroup></td>
        </tr>
      </tbody>

    </Table>
    
   

    
        </div>
        



        
    )
}

export default SecuritySetting;