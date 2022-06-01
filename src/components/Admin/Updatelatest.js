
import axios from 'axios'
import React, { Component } from 'react'
import { Form ,Modal,Col,Button } from 'react-bootstrap'

export default class Updatelatest extends Component {
    constructor(props){
        super(props)
        
     
        this.state = {
            title: "",
            link: "",
            descp: "",
            err: false,
            message: "",
            show:true
            

        }
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.closePopup = this.closePopup.bind(this)
      
    }
    fetchsinglelatest = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_APIURL}/api/latest/${this.props.match.params.id}`)
            if (res.data) {
                console.log(res.data.data[0])
                this.setState(res.data.data[0])
            }


        } catch (error) {
            if (error.response) {
                console.log(error.response.data)
            }

        }
    }

    componentDidMount(){
        this.fetchsinglelatest()
    }
    
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })


    }
    handlesubmit = async (e) => {
        e.preventDefault()
       
        const { err, message, show, latestpost, ...rest } = this.state

        try {
            const res = await axios.patch(`${process.env.REACT_APP_APIURL}/api/latest/${this.props.match.params.id}/update`,
                rest,
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
                    }
                }
            )
            if (res) {
                console.log(res)
                this.setState({
                    err: false,
                    message:"updated sucessfully"

                })
            }

        } catch (error) {
            if (error.response) {
                this.setState({
                    err: true,
                    message: error.response.data.message
                })
            }

        }


    }
    closePopup = () => {
        this.setState({
            show: false,

        })
        this.props.history.replace("/latest")
        

    }
    render() {
        return (
            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.show}
            onHide={this.closePopup}
        >
            <Modal.Header closeButton>
                <h4>Update Latest</h4>
            </Modal.Header>
            <Modal.Body>
                <Form style={{ textAlign: "left" }} onSubmit={this.handlesubmit} >

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Enter title" onChange={this.handlechange} value={this.state.title} required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                placeholder="Enter Link"
                                type="text"
                                as="textarea"
                                name="link"
                                onChange={this.handlechange}
                                value={this.state.link}
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                placeholder="Enter description"
                                type="text"
                                as="textarea"
                                name="descp"
                                
                                onChange={this.handlechange}
                                value={this.state.descp}
                                required
                            />
                        </Form.Group>
                    </Form.Row>


                    <Form.Row className="ml-1" >

                        <Button
                            className="btn"
                            variant="primary"
                            type="submit"
                            style={{ background: "#3AD4AF", borderColor: "#3AD4AF" }}
                        >
                           Update
                        </Button>
                    </Form.Row>
                    <p variant={this.state.err ? "danger" : "success"} >{this.state.message}</p>
                </Form>



            </Modal.Body>
           
        </Modal>
        )
    }
}
