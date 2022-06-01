import React from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CardDeckAboutUs() {
    return (
        <CardGroup >
            <CardDeck>
                <Card className="p-3">
                    <Card.Img variant="bottom" src="LearnWeb.jpg" />
                    <Card.Body>
                        <Card.Title className="h1">LEARN</Card.Title>
                        <Card.Text>
                            Your gateway to Comprehensive learning resources on various financial products.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src="InvestWeb.jpg" />
                    <Card.Body>
                        <Card.Title>INVEST</Card.Title>
                        <Card.Text>
                            Use our best-in-class platform to buy financial products that perfectly suits your requirements.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <Card.Img variant="top" src="growWeb.jpg" />
                    <Card.Body>
                        <Card.Title>GROW</Card.Title>
                        <Card.Text>
                            Use our experience and expertise to see your investment growing over the years.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </CardGroup>
    )
}

