import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, Tab, Tabs } from "react-bootstrap";

export default function TabComponent({ activeTab, details }) {
  return (
    <Tabs
      defaultActiveKey={`${activeTab}`}
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="all" title="All">
        <Row xs={1} md={2} lg={3} className="g-4">
          {details.map((c, i) => (
            <Col key={i}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Img variant="bottom" src={c.img} />
                  <Card.Title className="mt-3">{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                  <Card.Link href={`${c.link}`}>
                    Read More
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="learn" title="Learn">
        <Row xs={1} md={2} lg={3} className="g-4">
          {details.map((c,i) => (
            <Col key={i}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Img variant="bottom" src={c.img} />
                  <Card.Title className="mt-3">{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                  <Card.Link href={`${c.link}`}>
                    Read More
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
      {/* <Tab eventKey="invest" title="Invest">
        third
      </Tab>
      <Tab eventKey="grow" title="Grow">
        third
      </Tab> */}
    </Tabs>
  );
}
