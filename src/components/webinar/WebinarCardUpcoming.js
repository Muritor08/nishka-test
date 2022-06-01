import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { Col, Form, Modal } from "react-bootstrap";

function SpeakerModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Speaker details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.speaker.name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.speaker.desig !== "NA" && props.speaker.desig}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.speaker.org !== "NA" && props.speaker.org}
        </h6>
        <br />
        {props.speaker.descp === "NA" ? (
          <p>Speaker's description not available.</p>
        ) : (
          <>
            <p>Description:</p>
            <p>{props.e.spkr_descp}</p>
          </>
        )}
        {props.speaker.url !== "NA" && (
          <a href={props.e.spkr_url} target="_blank" rel="noreferrer">
            Connect
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ResultModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h2>Thankyou for registering for the webinar.</h2>
        <p>
          We will send the link and reminder to join the webinar through email.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DetailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Webinar details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     
        <h6 className="card-subtitle mb-2 text-muted">
          By - {props.e.speaker}
        </h6>
 
        <img src="/detail2.jpg" style={{width:"100%"}} alt ="webinar detail"/>
        {/* <p style={{ whiteSpace: "pre-wrap" }}>{props.e.detail}</p>
        <br /> */}
        <h6 className="card-subtitle mt-2 mb-2 text-muted">{props.e.date}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.e.time}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default class WebinarCardUpcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      speakerModalShow: false,
      detailModalShow: false,
      resultModalShow: false,
      webId: props.e.webId,
      //speakers: props.speakers,
      speaker:{},
      name: "",
      email: "",
      phoneno: "",
      org: "",
      desg: "",
      url: "",
      age: "",
      gender: "",
      excep: "",
      // token:props.token,
      error: null,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  
  };
  

  handleSubmit = async (e) => {
    e.preventDefault();

    const {
      error,
      token,
      open,
      speakerModalShow,
      resultModalShow,
      detailModalShow,
      ...rest
    } = this.state;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/webinar/register`,
        rest
      );
      console.log(res);
      this.setState({ resultModalShow: true });
      this.handleClose();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        this.setState({
          error: error.response.data.message,
        });
      }
    }
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <Col lg={4} md={6} sm={12}>
          <div
            className="card-body"
            style={{ border: "1px solid rgb(61, 61, 61)" }}
          >
            <h5 className="card-title">{this.props.e.name}</h5>

            {this.props.speakers.map((s,i) =>
            // <h3>{s.name}</h3>

            {
              return (
                <h6
                  onClick={() =>
                    this.setState({ speakerModalShow: true, speaker: s })
                  }
                  key={s.spkr_id}
                  className="cursor-pointer card-subtitle mb-2 text-muted"
                >
                  {s.name}
                </h6>
              );
            }
            )}

            <p className="card-text">{this.props.e.descp}</p>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.e.date}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.e.time}
            </h6>
            <div className="card-buttons">
              <button
                onClick={() => this.setState({ detailModalShow: true })}
                className="btn btn-primary"
              >
                Details
              </button>
              <button
                onClick={this.handleClickOpen}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
          </div>

          <div>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Registration form
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill this form to register yourself for the webinar.
                </DialogContentText>
                <Form id="webinar-register-from" onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      onChange={this.handlechange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.handlechange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phoneno"
                      placeholder="Enter phone number"
                      onChange={this.handlechange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicOrganization"
                  >
                    <Form.Label>Organization</Form.Label>
                    <Form.Control
                      type="text"
                      name="org"
                      placeholder="Enter organization"
                      onChange={this.handlechange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDesignation">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      name="desg"
                      onChange={this.handlechange}
                      placeholder="Enter designation"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicWebsite">
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control
                      type="url"
                      name="url"
                      onChange={this.handlechange}
                      placeholder="https://www.example.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="text"
                      name="age"
                      onChange={this.handlechange}
                      placeholder="Enter age"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="gender"
                      onChange={this.handlechange}
                    >
                      <option>Select gender</option>
                      <option key="0" value="Male">
                        Male
                      </option>
                      <option key="1" value="Female">
                        Female
                      </option>
                      <option key="2" value="Other">
                        Other
                      </option>
                    </select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicExpectations"
                  >
                    <Form.Label>Your expectations</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="excep"
                      onChange={this.handlechange}
                      maxlength="1000"
                      placeholder="Write your expectations from the webinar in not more than 1000 characters"
                      style={{ height: "150px" }}
                    />
                  </Form.Group>
                  {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                  )}
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="webinar-register-from"
                  color="primary"
                >
                  Register
                </Button>
              </DialogActions>
            </Dialog>
            <SpeakerModal
              show={this.state.speakerModalShow}
              onHide={() => this.setState({ speakerModalShow: false })}
              e={this.props.e}
             
              speaker={this.state.speaker}
            />
            <DetailModal
              show={this.state.detailModalShow}
              e={this.props.e}
              onHide={() => this.setState({ detailModalShow: false })}
            />
            <ResultModal
              show={this.state.resultModalShow}
              e={this.props.e}
              onHide={() => this.setState({ resultModalShow: false })}
            />
          </div>
        </Col>
      </>
    );
  }
}
