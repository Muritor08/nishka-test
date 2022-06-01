import React from 'react';
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import CuratorWidget from './CuratorWidget';

export default function LatestPost() {
    return (
        <CardGroup style={{ backgroundColor: "30AB8A" }}>
            <CardDeck>
                <Card className="p-1 container">
                <Link to='/youtube'>
                    <Card.Img variant="bottom" src="youtube.png" />
                    </Link>
                </Card>
                <Card className="p-1 container">
                <Link to='/twitter'>
                    <Card.Img variant="bottom" src="twitter.png" />
                    </Link>
                </Card>
                <Card className="p-1 container">
                <Link to='/instagram'>
                    <Card.Img variant="bottom" src="instagram.png" />
                    </Link>
                </Card>
                <Card className="p-1 container">
                <Link to='/facebook'>
                    <Card.Img variant="bottom" src="facebook.png" />
                    </Link>
                </Card>
                
            </CardDeck>
        </CardGroup>
    )
}

