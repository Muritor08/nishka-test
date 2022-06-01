import React, { Component } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv"
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
dotenv.config()

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      password: "",
      confirmPassword: "",
      error: null,
      redirect: false,
      showregister: true,
      token: "",
      charNumberValid: false,
      specialCharValid: false,
      uppercaseValid: false,
      numberValid: false,
      passwordmatch: false
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.register = this.register.bind(this)
    // this.handleRegister=this.handleRegister.bind(this)
  }
  register = async (e) => {

    e.preventDefault()


    if (this.state.password !== this.state.confirmPassword) {
      alert("Your Passwords dont match,try again");
      this.setState({
        password: "",
        confirmPassword: ""
      })
    } else {

      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      if (!strongRegex.test(this.state.password)) {
        this.setState({
          error: "password must satisfy above password policy"
        })
      } else {
        try {

          const { confirmPassword, passwordmatch, error, redirect, showregister, token, charNumberValid,
            specialCharValid,
            uppercaseValid,
            numberValid, ...rest } = this.state


          const res = await axios.post(`${process.env.REACT_APP_APIURL}/api/register`,
            rest
          )
          console.log(res)
          if (res.data) {
            this.setState(
              {
                redirect: true

              }
            )
            this.setState({
              name: "",
              lastname: "",
              email: "",
              phoneno: "",
              password: "",
              confirmPassword: "",
            });
          }
        } catch (error) {

          if (error.response) {

            console.log(error.response.data)
            let errmsg = error.response.data.error
            console.log(errmsg)
            this.setState({
              error: errmsg
            })
          }

        }

      }

    }

  }
  handleChange = (e) => {
    if (e.target.name !== "password") {

      this.setState({
        [e.target.name]: e.target.value
      })
      if (e.target.name === "confirmPassword") {
        if (this.state.password !== e.target.value) {
          this.setState({
            passwordmatch: true
          })
        } else {
          this.setState({
            passwordmatch: false
          })
        }
      }

    } else {
      this.setState({
        password: e.target.value
      })
      this.checkPasswordLength(e.target.value);
      this.checkSpecialCharacters(e.target.value);
      this.checkUppercase(e.target.value);
      this.checkNumber(e.target.value);

    }

  }

  // handleRegister = async(e) => {
  //   e.preventDefault();

  //     try{
  //       const res=await axios.post(`${process.env.REACT_APP_APIURL}/api/checkuser`,{
  //         email:this.state.email
  //        })
  //        console.log(res.data)
  //        try{
  //         const res=await axios.post(`${process.env.REACT_APP_APIURL}/api/verify-email`,{
  //           email:this.state.email
  //          })
  //          this.setState({
  //           showregister: false
  //         })
  //        }catch(error){

  //        }


  //     }catch(error){
  //       if (error.response) {


  //         let errmsg = error.response.data.message
  //         console.log(errmsg)
  //         this.setState({
  //           error: errmsg
  //         })
  //       }

  //     }



  //   }
  // }
  // handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   try{
  //   const res=await axios.post(`${process.env.REACT_APP_APIURL}/api/verify-token`,{
  //    token:this.state.token
  //   })
  //   console.log(res.data)
  //    if (res.data){
  //      this.register()
  //    }
  //   }catch(error){


  //   }



  // }
  // Check the length of the input
  checkPasswordLength = (password) => {
    if (password.length >= 8) {
      this.setState({
        charNumberValid: true
      })
    } else {
      this.setState({
        charNumberValid: false
      })
    }
  }

  // Check for special characters
  checkSpecialCharacters = (password) => {
    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if (pattern.test(password)) {
      this.setState({
        specialCharValid: true
      })
    } else {
      this.setState({
        specialCharValid: false
      })
    }
  }

  // Check for an uppercase character
  checkUppercase = (password) => {
    const pattern = /[A-Z]/;
    if (pattern.test(password)) {
      this.setState({
        uppercaseValid: true
      })
    } else {
      this.setState({
        uppercaseValid: false
      })
    }
  }

  // Check for a number
  checkNumber = (password) => {
    const pattern = /[0-9]/;
    if (pattern.test(password)) {
      this.setState({
        numberValid: true
      })
    } else {
      this.setState({
        numberValid: false
      })
    }
  }
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/EmailSent" />
      )
    }
    return (
      <div>
        <Header />
        <Jumbotron className="container-fluid">
          <Container style={{ display: "flex", width:"100%" }} className="contact-container">

            <Row
              style={{ width: "50%" }}
              className="first-contact register-first"
            >
              <Form.Row
                className="contact-details"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="register-img">
                  <img src="/Auth2.svg" alt="Join us" width="300" />
                </div>
              </Form.Row>
              <Form.Row
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src="NishkaEra_Logo.png" alt="Nishkaera" width="200" />
                  <p style={{ width: "75%", margin: "auto" }}>
                    Nishkaera is a financial services company providing one stop solution to all your financial needs.
                  </p>
                </div>
              </Form.Row>
            </Row>
            <Row style={{ width: "50%" }} className="second-contact">
              <Form className="details-container" onSubmit={this.register}>
                <Form.Row style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Register</h3>
                  <p>
                    Already Registered? <Link to="/Login">Login</Link>
                  </p>
                </Form.Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formGridFirst">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="Enter Your Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formGridFirst">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Enter Your Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange} required />
                    </Form.Group>
                  </Col>
                </Row>


                <Form.Row>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="Enter 10 digit phone no" name="phoneno" value={this.state.phone} onChange={this.handleChange} pattern="^([0-9]){10,}$" required />
                   

                  </Form.Group>
                 
                </Form.Row>
              
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Password"
                      type="password"
                      name="password" value={this.state.password} onChange={this.handleChange} required
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMessage2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Password"
                      type="password"
                      name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required
                    />
                  </Form.Group>

                </Form.Row>
                {this.state.passwordmatch ? <span className="error">password does not match</span> : ""}
                <div className="validator">
                  <i className={this.state.charNumberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">8-20 characters</p>
                </div>
                <div className="validator">
                  <i className={this.state.specialCharValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 special character</p>
                </div>
                <div className="validator">
                  <i className={this.state.uppercaseValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 uppercase letter</p>
                </div>
                <div className="validator">
                  <i className={this.state.numberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                  <p className="validation-item">1 number</p>
                </div>
                {this.state.error && <p style={{ textAlign: "left", color: "red" }}>{this.state.error}</p>}
                <Form.Row className="contact-btn">

                  <Button
                    className="btn"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form.Row>
              </Form>
            </Row>



          </Container>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}
