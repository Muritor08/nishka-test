import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useState } from 'react';
import "./OneStopSolution.css";


export default function OneStopSolution() {


    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);




    //   function handleClick(){

    //   }


    function handleClick1() {
        setShow1(true);

    }
    function handleClick11() {
        setShow1(false);

    }

    function handleClick2() {
        setShow2(true);
    }
    function handleClick22() {
        setShow2(false);
    }

    function handleClick3() {
        setShow3(true);
    }
    function handleClick33() {
        setShow3(false);
    }


    return (
        <div >
            <Jumbotron className="container-fluid " style={{ marginTop: '0', backgroundColor: 'white', paddingBottom:"5px" }}>
                <h1 className="sectionHeading" style={{ marginTop: '50px', fontSize: '72px', color: '#114034' }}>One Stop Solution</h1> <h4 className="sectionParagraph" style={{ fontSize: '34px', color: '#1D6A58' }}> Learn, Invest and Grow</h4>

                <div className="row" >
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >

                        < a href="/Learn">
                            <div className="col2 p-0  m-3" onMouseEnter={handleClick1} onMouseLeave={handleClick11} >
                                {show1 ?
                                    <img src="/text learn.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-in" }}></img>
                                    :
                                    <img src="/learn.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-out" }}></img>
                                }

                            </div>
                        </a>
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                        {/* < a href="/Invest"> */}
                        <div className="col2 p-0  m-3" onMouseEnter={handleClick2} onMouseLeave={handleClick22}>
                            {show2 ?
                                <img src="/text invest.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-in" }}></img>
                                :
                                <img src="/invest.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-out" }}></img>
                            }

                        </div>
                        {/* </a> */}
                    </div>


                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                        {/* < a href="/Grow"> */}
                        <div className="col2 p-0  m-3" onMouseEnter={handleClick3} onMouseLeave={handleClick33}>
                            {show3 ?
                                <img src="/text grow.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-in" }}></img>
                                :
                                <img src="/grow.png" style={{ maxWidth: "100%", height: "auto", transition: "opacity 1s ease-out" }}></img>
                            }

                        </div>
                        {/* </a>   */}
                    </div>

                </div>





            </Jumbotron>
        </div>
    )
}