

import { Delete, Edit } from '@material-ui/icons'
import axios from 'axios'

import React from 'react'

import { Form, Button,  Col, Container, Table } from 'react-bootstrap'
import "./css/Latest.css"


import { Link } from 'react-router-dom'


class Latestpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                title: "",
                link: "",
                descp: "",
                err: false,
                message: "",
                latestpost: [],
                show: false
        


        }
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.fetchlatest = this.fetchlatest.bind(this)
        this.handledelete = this.handledelete.bind(this)
        this.closePopup = this.closePopup.bind(this)
        
    }

    fetchlatest = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_APIURL}/api/latest`)
            if (res.data) {
                this.setState({
                    latestpost: res.data.data
                })
            }


        } catch (error) {
            if (error.response) {
                console.log(error.response.data)
            }

        }
    }


  
    componentDidMount() {
        this.fetchlatest()
    }



    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })


    }
    handlesubmit = async (e) => {
        e.preventDefault()
        console.log(process.env.REACT_APP_USERID)
        const { err, message, show, latestpost, ...rest } = this.state
        console.log(rest)

        try {
            const res = await axios.post(`${process.env.REACT_APP_APIURL}/api/latest`,
                rest,
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
                    }
                }
            )
            if (res) {
                this.setState({
                    err: false,

                })
            }
            this.fetchlatest()
            this.setState({
                title: "",
                link: "",
                descp: "",
                err: false,
                message: "",
                latestpost: []
            })

        } catch (error) {
            if (error.response) {
                this.setState({
                    err: true,
                    message: error.response.data.message
                })
            }

        }


    }
    handledelete = async (latest_id) => {


        try {
            const res = await axios.delete(`${process.env.REACT_APP_APIURL}/api/latest/${latest_id}`,

                {
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
                    }
                },




            )
            if (res) {
                this.fetchlatest()
            }

        } catch (error) {



        }


    }
    closePopup = () => {
        this.setState({
            show: false,

        })

    }
    render() {

        return (
            <>
                <Container>
                    <div style={{  marginTop: "30px" }}>

                        <h3>Latest</h3>


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
                                    Submit
                                </Button>
                            </Form.Row>
                            <p variant={this.state.err ? "danger" : "success"} >{this.state.message}</p>
                        </Form>
                    </div>
                    <h5 >
                        All latest
                    </h5>
                    <Table   bordered  responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.latestpost &&  this.state.latestpost.map(post =>
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>
                                          <div style={{ display:'flex'}}>
                                          <div onClick={() => this.handledelete(post.id)} >
                                                <Delete style={{ color: "red", cursor: 'pointer' }} /></div>
                                            
                                              <Link style={{ cursor:"pointer", marginLeft:"10px"}} to={`/latest/${post.id}`}><Edit /></Link>  
                                          </div>
                                            
                                            


                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </Table>
                </Container>
               
            </>
            






        )

    }

}

export default Latestpage
