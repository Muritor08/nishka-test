import React from "react";
import { Card, CardDeck, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from 'bootstrap';
import { Link } from "react-router-dom";

export default function CardDeckOneStopSol() {
  return (
    <CardGroup>
      <CardDeck>
        <Card className="p-3">
          <Card.Img variant="bottom" src="LearnWeb.jpg" />
          <Card.Body>
            <Card.Title className="h1">
              <Link to="/Learn">
                <Button>LEARN</Button>
              </Link>
            </Card.Title>
            <Card.Text className="h6">
              Your gateway to comprehensive learning resources on various
              financial products.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <Card.Img variant="top" src="InvestWeb.jpg" />
          <Card.Body>
            <Card.Title className="h1">
              {/* <Link to="/Invest">
                <Button>INVEST</Button>
              </Link> */}
              INVEST
            </Card.Title>
            <Card.Text className="h6">
              Use our best-in-class platform to buy financial products that
              perfectly suits your requirements.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <Card.Img variant="top" src="growWeb.jpg" />
          <Card.Body>
            <Card.Title className="h1">
              {/* <Link to="/Grow">
                <Button>GROW</Button>
              </Link> */}
              GROW
            </Card.Title>
            <Card.Text className="h6">
              Use our experience and expertise to see your investment growing
              over the years.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardGroup>
  );
}
