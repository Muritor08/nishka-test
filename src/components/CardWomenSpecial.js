import React from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CardWomenSpecial() {
    return (
        <CardGroup >
            <CardDeck>
                <Card className="p-1">
                    <Card.Img variant="bottom" src="women2.jpg" />
                    <Card.Body>
                        <Card.Title className="h1">Know your financial goals</Card.Title>
                        <Card.Text className="h6">
                            Your gateway to Comprehensive learning resources on various financial products.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-1">
                    <Card.Img variant="top" src="women1.jpg" />
                    <Card.Body>
                        <Card.Title>Invest with expert advice</Card.Title>
                        <Card.Text className="h6">
                            Use our best-in-class platform to buy financial products that perfectly suits your requirements.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-1">
                    <Card.Img variant="top" src="women4.jpg" />
                    <Card.Body>
                        <Card.Title>Achieve your financial freedom</Card.Title>
                        <Card.Text className="h6">
                            Use our experience and expertise to see your investment growing over the years.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </CardGroup>
    )
}

