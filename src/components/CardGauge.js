import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Gauge30 from '../features/Gauge30';
import Gauge60 from '../features/Gauge60';
import Gauge82 from '../features/Gauge82';

export default function CardGauge(props) {
    return (
        <CardDeck className="removePadd card-cont">
            <Card>
                <Card.Body>
                    <Card.Title>Weak (0-40)</Card.Title>
                        <Gauge30 />
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Coping (41-80)</Card.Title>
                        <Gauge60 />
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Strong (81-100)</Card.Title>
                        <Gauge82 />
                </Card.Body>
            </Card>
        </CardDeck >
    )
}

