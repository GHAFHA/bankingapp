/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file edited by Ruchi Patel (rvp190001)

    This file is part of the user interface.  It generates the user information page 
    in the CometWallet app under the settings tab. 
*/
import {Table, Container} from 'react-bootstrap';
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
/*import useState from 'react';
import UserSettings from "../classes/UserSettings";*/


const UserInfo = () => 
{
    return (
          <Container>
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
              <td> Michael Thomas </td>
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
              <th> Alerts and messages:</th>
              </tr>
       
              <tr>
              <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Alert history</Accordion.Header>
              <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        Security & other alerts<br></br>
                        CREDIT CARD (....3452) alerts
      
                    </Stack>
              
              <td></td>
              <td></td>
              <td></td>
              
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </tr>
              
              <tr>
              <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Manage alerts</Accordion.Header>
              <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        Security & other alerts<br></br>
                        CREDIT CARD (....3452) alerts
                    </Stack>
              
              <td></td>
              <td></td>
              <td></td>
              
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </tr>
              
             
            
              <th>Help & Support:</th>
              <tr>
              <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Contact Us</Accordion.Header>
              <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        Online and Mobile technical support<br></br>
                        Get More Contacts
                       
                    </Stack>
              
              <td></td>
              <td></td>
              <td></td>
              
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </tr>
            
              <tr>
              <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>FAQs</Accordion.Header>
              <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        Security <br></br>
                        Bill pay<br></br>
                        eBills<br></br>
                        Refer-a-Friend
                    </Stack>
              
              <td></td>
              <td></td>
              <td></td>
              
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
             </tr>
             <thead>
              <tr>
              <th> Contact via Social</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td colSpan={2}>twitter</td>
              <td></td>
             </tr>
             
              <tr>
              <td colSpan={2}>Facebook</td>
              <td></td>
              
              </tr>

              <tr></tr>

             
          
          </tbody>
          </tbody>
          </Table>
          </Container>
            );
}

export default UserInfo;

