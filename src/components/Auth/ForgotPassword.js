import axios from 'axios'
import React, { Component } from 'react'
import { Button, Container, Form, FormGroup } from 'react-bootstrap'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            linksent:false,
            error:null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handlesubmit = (e) => {
        e.preventDefault()
        const { linksent,error, ...data } = this.state
        axios({
            url: `${process.env.REACT_APP_APIURL}/api/forgot`,
            data: data,
            method: "post"
        }).then(res => {
            this.setState({
                linksent: true
            })
        }).catch(error => this.setState({error:error.response.data.message}))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {
        return (
            <>
                {!this.state.linksent ? <div>

                    <Container>


                        <Form className="details-container mt-5" onSubmit={this.handlesubmit}>
                            <h4 >Forgot Password</h4>
                            <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email address" name="email" onChange={this.handleChange} required />

                            </FormGroup>
                            <Button type="submit">Get reset link</Button>
                            {this.state.error && <p style={{marginTop:"10px",color:"red"}}>{this.state.error}</p>}
                        </Form>

                    </Container>
                </div> : <div>
                    <h3 className="mt-5">
                        Password reset link sent to your email.
                    </h3>
                    <p>link will remain active for 10 minutes</p>
                    
                </div>}
            </>
        )
    }
}
