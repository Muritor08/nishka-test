import React, { Component } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import ScrollToTop from "../ScrollToTop";
import Header from "../Layout/Header";
import { AppContext } from "../../context/AppContext";
import Footer from "../Layout/Footer";

dotenv.config();
export default class Login extends Component {
  static contextType = AppContext
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async () => {
    let { error, ...rest } = this.state;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/login`,
        rest
      );
     
      if (res.data) {
        
        this.setState({
          email: "",
          password: "",
          error: "",
        });
       
        this.context.dispatch({
          type:"LOGIN_SUCESS",
          payload:{
            user:{userID:res.data.user,name:res.data.name},
            token:res.data.token
          }

        })
        
  
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user",JSON.stringify({userID:res.data.user,name:res.data.name}))
        this.props.history.push("/")
       
      }
    } catch (error) {
      if (error.response) {
        let errmsg = error.response.data.message;
        console.log(errmsg);
        this.setState({
          error: errmsg,
        });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.login();
  };
  render() {
    return (
      <div>
        <ScrollToTop />
        <Header />
        <Jumbotron className="container-fluid">
          <Container style={{ display: "flex", width:"100%" }} className="contact-container">
            <Row style={{ width: "50%" }} className="first-contact">
              <Form.Row className="contact-details">
                <div className="register-img">
                  <img src="/Auth.svg" alt="Join us" width="400" className="tw-w-64 md:tw-w-full tw--mt-2 md:tw--mt-0"/>
                </div>
              </Form.Row>
              <Form.Row
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "-3%",
                }}
              >
                <div className="">
                  <img src="NishkaEra_Logo.png" alt="Nishkaera" width="200" className="tw-w-28 md:tw-w-2/3"/>
                  <p style={{ width: "75%", margin: "auto" }}>
                  Nishkaera is a financial services company providing one stop solution to all your financial needs.
                  </p>
                </div>
              </Form.Row>
            </Row>
            <Row style={{ width: "50%" }} className="second-contact">
              <Form className="details-container tw-ml-12 tw-mt-4" onSubmit={this.handleSubmit}>
                <Form.Row style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Login</h3>
                  <p>
                    New to this website? <Link to="/Register">Signup</Link>
                  </p>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Password"
                      type="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                </Form.Row>
                {this.state.error && (
                  <p style={{ textAlign: "left", color: "red" }}>
                    {this.state.error}
                  </p>
                )}
                
                <Link to="/forgotpassword">Forgot password?</Link>

                
                <Form.Row className="contact-btn">
                  <Button className="btn" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Row>
              </Form>
            </Row>
          </Container>
        </Jumbotron>
        <Footer/>
      </div>
    );
  }
}
