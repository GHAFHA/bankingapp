import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import TransactionController from "../classes/TransactionController";

const TransactionsListPage = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight: 'bold'}}>Dunkin' Donuts</span></Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        <span style={{fontWeight: 'bold'}}>Date:</span>
                        September 19, 2022
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={4}>
                        <span style={{fontWeight: 'bold'}}>Amount:</span>
                        $12.49
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="danger">Dispute Transaction</Button>{' '}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight: 'bold'}}>7-Eleven</span></Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        <span style={{fontWeight: 'bold'}}>Date:</span>
                        September 12, 2022
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={4}>
                        <span style={{fontWeight: 'bold'}}>Amount:</span>
                        $2.58
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="danger">Dispute Transaction</Button>{' '}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight: 'bold'}}>RaceTrac</span></Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        <span style={{fontWeight: 'bold'}}>Date:</span>
                        September 09, 2022
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={4}>
                        <span style={{fontWeight: 'bold'}}>Amount:</span>
                        $52.12
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="danger">Dispute Transaction</Button>{' '}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight: 'bold'}}>UTD Bookstore</span></Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        <span style={{fontWeight: 'bold'}}>Date:</span>
                        September 08, 2022
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={4}>
                        <span style={{fontWeight: 'bold'}}>Amount:</span>
                        $39.99
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="danger">Dispute Transaction</Button>{' '}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header><span style={{fontWeight: 'bold'}}>Walmart Supercenter</span></Accordion.Header>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={5}>
                        <span style={{fontWeight: 'bold'}}>Date:</span>
                        September 03, 2022
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Stack direction="horizontal" gap={4}>
                        <span style={{fontWeight: 'bold'}}>Amount:</span>
                        $157.42
                    </Stack>
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="danger">Dispute Transaction</Button>{' '}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default TransactionsListPage;