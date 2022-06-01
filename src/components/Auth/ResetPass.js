import axios from 'axios'
import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Auth.css"
export default class ResetPass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            confirmPassword: "",
            error: null,
            token: props.match.params.token,
            success: false,
            charNumberValid: false,
            specialCharValid: false,
            uppercaseValid: false,
            numberValid: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }
    handleChange = (e) => {
        if (e.target.name !== "password") {
            this.setState({
                [e.target.name]: e.target.value
            })

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
    handlesubmit = (e) => {
        e.preventDefault()
        const { error, confirmPassword,charNumberValid,
            specialCharValid,
            uppercaseValid,
            numberValid, ...data } = this.state
        if (this.state.password === this.state.confirmPassword) {
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (!strongRegex.test(this.state.password)) {
              this.setState({
              error:"password must satisfy above password policy"
              })
            }else{
                axios({
                    url: `${process.env.REACT_APP_APIURL}/api/reset`,
                    data: data,
                    method: "put"
                }).then(res => {
                    this.setState({
                        success: true
                    })
                }).catch(error => this.setState({error:"Token for reset password has been expired. try again for forgot password."}))
            }  
            
        } else {
            this.setState({
                error: "confirm password should match with password"
            })

        }

    }
    render() {
        return (
            <>
                {this.state.success ? <div className="mt-5">
                    <h3>  Password has been reset sucessfully .</h3>
                    <Link className="btn btn-primary" to="/login">login</Link>
                    <h6 className="fs-6 mt-4">
                        For issues/queries, email us at{" "}
                        <a href="mailto:contact@nishkaera.com">contact@nishkaera.com</a>.
                    </h6>
                </div> : <Container className="details-container mt-5">
                    <h4>RESET PASSWORD</h4>
                    <Form onSubmit={this.handlesubmit}>

                        <Form.Group  >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Enter new Password"
                                type="password"
                                name="password" value={this.state.password} onChange={this.handleChange} required
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                placeholder="confirm new Password"
                                type="password"
                                name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required
                            />
                        </Form.Group>
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
                        {this.state.error && <p style={{ color: 'red',marginTop:"20px" }}>{this.state.error}</p>}
                        <Button type="submit"> reset </Button>
                        
                    </Form>
                </Container>}
            </>


        )
    }
}
