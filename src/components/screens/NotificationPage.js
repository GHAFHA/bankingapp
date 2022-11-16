/*
    CS 3354.005 Fall 2022
    Group 5: Dean Greenberg, Noel Johnson, Oscar Mata-Galvan, Vaughan McInerney, Ruchi Patel, Naod Tesfay
    Professor Srimathi Srinivasan

    This file edited by Naod Tesfay (ndt210000) and Vaughan McInerney (vmm190002)

    This file is part of the user interface.  It generates the Account page in the CometWallet app.
*/


import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

import Navbar from '../UI/Navbar'


const Settings = () => {
    return (
        <><Navbar></Navbar><div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Notify Me While Login</Accordion.Header>
                    <Accordion.Body>
                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: '' }}> By Email </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: 'bond' }}>  By Text </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Notify Me While Transaction</Accordion.Header>
                    <Accordion.Body>
                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: 'bond' }}> By Email </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: 'bond' }}>  By Text </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Notify Me While Low Balance Comet Cash</Accordion.Header>
                    <Accordion.Body>
                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: 'bond' }}> By Email </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            <span style={{ fontweight: 'bond' }}>  By Text </span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off" />
                            </Form>
                        </Stack>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div></>
    )
}

export default Settings;