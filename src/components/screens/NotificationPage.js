import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Settings = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Notify Me While Login</Accordion.Header>
                    <Accordion.Body>
                        <Stack direction="horizontal" gap={5}>
                            < span style={{ fontweight: '' }} > By Email </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            < span style={{ fontweight: 'bond' }} >  By Text </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
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
                            < span style={{ fontweight: 'bond' }} > By Email </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            < span style={{ fontweight: 'bond' }} >  By Text </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
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
                            < span style={{ fontweight: 'bond' }} > By Email </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
                            </Form>
                        </Stack>

                        <Stack direction="horizontal" gap={5}>
                            < span style={{ fontweight: 'bond' }} >  By Text </ span>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
                            </Form>
                        </Stack>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    )
}

export default Settings;