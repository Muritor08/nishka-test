import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Gauge from './Gauge';

export default function FinancialGauge(marginInPercent) {
    return (
        <CardDeck className="container-fluid" >
            <Card>
                <Card.Body>
                    <Card.Title>Vulnerable</Card.Title>
                    <Card.Text>
                        <Gauge />
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Coping</Card.Title>
                    <Card.Text>
                        <Gauge />
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Strong</Card.Title>
                    <Card.Text>
                        <Gauge />
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

