import React from "react";
import { Col } from "react-bootstrap";

export default class WebinarCardRecent extends React.Component {
  render() {
    return (
      <>
        <Col lg={3} md={6} sm={12}>
          <div class="card-body" style={{border: "1px solid rgb(61, 61, 61)"}}>
            <h5 class="card-title">Webinar title</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <a class="link-dark" href="https://www.linkedin.com/in/nimishjn">
                Mr. Speaker
              </a>
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h6 class="card-subtitle mb-2 text-muted">Date & Time</h6>
            <button class="btn btn-secondary">Recording</button>
          </div>
        </Col>
      </>
    );
  }
}
