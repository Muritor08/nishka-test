import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import CardGauge from "../CardGauge";
import { Link, useHistory } from "react-router-dom";
import { Card, CardGroup } from 'react-bootstrap';
import Gauge30 from '../../features/Gauge30';
import Gauge60 from '../../features/Gauge60';
import Gauge82 from '../../features/Gauge82';
import Divider from '@mui/material/Divider';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/coliff/bootstrap-rfs/bootstrap-rfs.css"></link>
// import "./CardGauge.css";

export default function FinancialPulse() {
  const history = useHistory();
  const isLoggedIn = true;
  // const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = () => {
    if (isLoggedIn) {
      return history.push("/ComprehensiveFinancialPulse");
    }
    setModalShow(true);
  };
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //   const PromptModal = () => {
  //     if(isLoggedIn)

  //       else {
  //       return <Redirect to="/DetailedScore" />}
  //         }



  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [count, setCount] = useState(0);
  const pulseLevel = ['Strong','Coping','Weak'];
  var i=0;
  // const delay = 5000;
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      if(i==pulseLevel.length){
        i=0;
      }
      if(i<pulseLevel.length){
        switch(pulseLevel[i]){
          case 'Strong':
                setShow1(true);
                setShow2(false);
                setShow3(false);
                break;
          case 'Coping':
                setShow1(false);
                setShow2(true);
                setShow3(false);
                break;
          case 'Weak':
                setShow1(false);
                setShow2(false);
                setShow3(true);
        }
      }
      if(i<pulseLevel.length){
        i++;
      }
      else{
        i=0;
      }
    }, 4000);
    return () => clearInterval(intervalId);
   
  }, []);

  function handleClick1() {
    setShow1(true);
    setShow2(false);
    setShow3(false);
  }

  function handleClick2() {
    setShow1(false);
    setShow2(true);
    setShow3(false);
  }

  function handleClick3() {
    setShow1(false);
    setShow2(false);
    setShow3(true);
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-5"
      >
        <Modal.Body className="m-auto">
          You need to Login to access Comprehensive Financial Pulse
        </Modal.Body>
        <Link to="/Login" className="mx-auto mb-3">
          <Button>Login</Button>
        </Link>
      </Modal>
    );
  }
  return (
    <div
      className="financialContainer"
      id="FinancialPulse"
      style={{ marginTop: "30px" }}
    >
      <Jumbotron style={{ backgroundColor: "white" }}>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* {PromptModal} */}
        <div className="h1 sectionHeading tw-mt-4 " style={{ fontSize: "72px", color: "#114034" }}>
          Know your Financial Pulse
        </div>
        <p style={{ color: "#114034" }} className=" h5 sectionParagraph tw--mt-5">
          Just answer few simple questions to get your financial score.
        </p>
        {/* <p>
          <Link to="/Score">
            <Button variant="primary" className="mr-2">
              Quick Financial Pulse
            </Button>
          </Link>
          <Button variant="primary" onClick={handleClick}>
            Comprehensive Financial Pulse
          </Button>
        </p> */}
        {/* <CardGauge /> */}



        {/* return ( */}
        <div className='shadow p-1 bg-body rounded tw-mb-8 tw--mt-4'>
          {/* <div className='shadow shadow-success shadow-intensity-xl p-1  ' style={{margin:20}}> */}
          <Card border='0' style={{ margin: 50 }} >

            <CardGroup className="tw-flex md:tw-flex-row tw-flex-col-reverse tw-items-center">

              <Card className="tw--mt-5" border='0' >

                <div className="tw-h-1/3 md:tw-my-4 tw-mt-2 tw-mb-4" onClick={handleClick1} style={{ cursor: "pointer" }}>
                  {/* <Card.Body> */}

                  {
                    show1 ?

                      <div className="tw-flex tw-flex-row tw-w-full tw-items-center tw-gap-7">
                        <div className="tw-w-1/6 tw-rounded-full">
                          <img src="fp1.png" className="tw-h-full tw-w-full" alt="strong"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p style={{ textUnderlineOffset: "10px" }} className="xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-lg tw-font-semibold tw-text-nishblue-400 tw-underline">Financially Strong</p>
                          <p className="xl:tw-text-xl lg:tw-text-lg md:tw-text-md tw-text-md tw-font-semibold tw-text-nishblue-400 xl:tw-w-3/4 tw-w-full">Your financial position is strong and you can make it even better</p>
                        </div>
                      </div>

                      :

                      <div className="tw-flex tw-flex-row tw-items-center tw-gap-7">
                        <div className=" tw-w-1/6 tw-rounded-full">
                          <img src="fp1.2.png" className="tw-h-full tw-w-full" alt="strong"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p className="xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-xl tw-font-semibold tw-text-navgreen-600 ">Financially Strong</p>

                        </div>
                      </div>
                  }


                  {/* </Card.Body> */}
                </div>


                <Divider style={{ color: 'green' }} />

                <div className=" tw-h-1/3 tw-my-4" onClick={handleClick2} style={{ cursor: "pointer" }}>

                  {/* <Card.Body> */}

                  {
                    show2 ?

                      <div className="tw-flex tw-flex-row tw-w-full tw-items-center tw-gap-7">
                        <div className="tw-w-1/6 tw-rounded-full">
                          <img src="fp2.png" className="tw-h-full tw-w-full" alt="coping"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p style={{ textUnderlineOffset: "10px" }} className="xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-xl tw-font-semibold tw-text-nishblue-400 tw--pr-4 tw-underline">Financially Coping</p>
                          <p className="xl:tw-text-xl lg:tw-text-lg md:tw-text-md tw-text-md tw-font-semibold tw-text-nishblue-400 xl:tw-w-3/4 tw-w-full">You are doing good but there is scope for improvement</p>
                        </div>
                      </div>

                      :

                      <div className="tw-flex tw-flex-row tw-items-center tw-gap-7">
                        <div className=" tw-w-1/6 tw-rounded-full">
                          <img src="fp2.2.png" className="tw-h-full tw-w-full" alt="coping"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p className="xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-xl tw-font-semibold tw-text-navgreen-600 ">Financially Coping</p>

                        </div>
                      </div>
                  }


                  {/* </Card.Body> */}
                </div>

                <Divider className="" style={{ color: 'green' }} />

                <div className="tw-h-1/3 tw-my-4" border='0' onClick={handleClick3} style={{ cursor: "pointer" }}>
                  {/* <Card.Body> */}
                  {
                    show3 ?

                      <div className="tw-flex tw-flex-row tw-w-full tw-items-center tw-gap-7">
                        <div className="tw-w-1/6 tw-rounded-full">
                          <img src="fp3.png" className="tw-h-full tw-w-full" alt="weak"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p style={{ textUnderlineOffset: "10px" }} className="xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-xl tw-font-semibold tw-text-nishblue-400 tw--pr-4 tw-underline">Financially Weak</p>
                          <p className="xl:tw-text-xl lg:tw-text-lg md:tw-text-md tw-text-md tw-font-semibold tw-text-nishblue-400 xl:tw-w-3/4 tw-w-full">Your financials need immediate attention and course correction</p>
                        </div>
                      </div>

                      :


                      <div className="tw-flex tw-flex-row tw-items-center tw-gap-7">
                        <div className=" tw-w-1/6 tw-rounded-full">
                          <img src="fp3.2.png" className="tw-h-full tw-w-full" alt="weak"/>
                        </div>
                        <div className="tw-w-5/6 tw-text-left ">
                          <p className=" xl:tw-text-4xl lg:tw-text-2xl md:tw-text-xl tw-text-xl tw-font-semibold tw-text-navgreen-600 ">Financially Weak</p>

                        </div>
                      </div>
                  }

                  {/* </Card.Body> */}
                </div>

              </Card>


              <Card border='0'>

                <Card border='0'>
                  <Card.Body>
                    {
                      show1 ? <Gauge82 /> : null
                    }

                    {
                      show2 ? <Gauge60 /> : null
                    }

                    {
                      show3 ? <Gauge30 /> : null
                    }

                    <p className="tw-flex lg:tw-flex-row tw-items-center tw-justify-center tw-flex-col tw-gap-2">
                      <Link to="/Score">
                        <Button className="mr-2 btn btn-success">
                          Quick Pulse
                        </Button>
                      </Link>


                      <Button variant="none" className="btn btn-outline-success" onClick={handleClick}>
                        Comprehensive Pulse
                      </Button>
                    </p>

                  </Card.Body>
                </Card>

                {/* <Card border='0'>
                        <Card.Body>
                        <Card.Title> Card Title</Card.Title>
                        </Card.Body>
                   </Card> */}

              </Card>


            </CardGroup>


          </Card>
        </div>
      </Jumbotron>
    </div>
  );
}
