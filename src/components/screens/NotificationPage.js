import React from "react";
import Accordion from 'react-bootstrap/Accordion';
<<<<<<< Updated upstream
import Form from 'react-bootstrap/Form';
=======
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

>>>>>>> Stashed changes

const Settings = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
<<<<<<< Updated upstream
                    <Accordion.Header>Notifications While Login</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                label="By Email"
                                id="custom-switch"

                            />
                            <Form.Check
                                type="switch"
                                label="By Text"

                            />
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Notifications While Transactions</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                label="By Email"
                                id="custom-switch"

                            />
                            <Form.Check
                                type="switch"
                                label="By Text"

                            />
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Notifications While Low Balance Comet Cash</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                label="By Email"
                                id="custom-switch"

                            />
                            <Form.Check
                                type="switch"
                                label="By Text"

                            />
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
=======
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

>>>>>>> Stashed changes
        </div>
    )
}

export default Settings;