/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file edited by Ruchi Patel (rvp190001)

    This file is part of the user interface.  It generates the user information page 
    in the CometWallet app under the settings tab. 
*/
import Table from 'react-bootstrap/Table';
import React from "react";

const UserInfo = () => {
    return (
         
        
        <Table striped>
         
           
          <thead>
            <tr>
              
              <th> User Profile</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td colSpan={2}>Name:</td>
              <td></td>
              <td> Micheal Thomas </td>
              <td></td>
              
            </tr>
           
            <tr>
              
              <td colSpan={2}>Email:</td>
              <td></td>
              <td>xyz1234@gmail.com</td>
            </tr>
            <tr>
             
             <td colspan={2}>Phone:</td>
             <td></td>
             <td>342-543-5624</td>
             <td></td>
           
           </tr>
          
           
           
            <tr>
            <th> Alerts and messages</th>
              
            </tr>
       
             
             
            
            <tr>
              
                <td colspan={2}>Alert historty</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan={2}>Manage historty</td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td colspan={2}>Secure Message Center</td>
                <td></td>
                <td></td>
                <td></td>
                

            </tr>
            <th>Help & Support</th>
            <tr>
                <td colspan={2}>Contact US</td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            <tr>
                <td colspan={2}>FAQs</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </Table>
      );
}

export default UserInfo;