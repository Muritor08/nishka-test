import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollToTop from "../ScrollToTop";
import './FinancialPulse.css'
import GaugeProp from "../../features/gauge/GaugeProp";
import { Link } from "react-router-dom";

export default function KnowYourFP() {
    const [modalShow, setModalShow] = React.useState(false);
    const [scorePercent,setScorePercent]=useState();
    const [index,setIndex]=useState();
  const questions = [
    {
      id: 1,
      question:
        "In the last 12 months how were your expenses compared to your income? Expense was:",
      options: [
        "Much less than income",
        "Little less than income",
        "Nearly equal to income",
        "Slightly more than income",
        "Much more than income",
      ],
    },
    {
      id: 2,
      question:
        "Considering your current monthly expenses how long will your emergency fund last?	",
      options: [
        "More than 6 months",
        "Around 6 Months",
        "Between 3 to 6 Months",
        "Between 1 to 3 Months",
        "Less than a month",
      ],
    },
    {
      id: 3,
      question: "How comfortable are you in managing your current debt?	",
      options: [
        "No Debt",
        "Comfortable",
        "Slightly comfortable",
        "Barely comfortable",
        "Too much Debt"
      ],
    },
    {
      id: 4,
      question:
        '"I have set clear and quantifiable financial goals and making investment accordingly". To what extent do you agree or disagree with this statement ',
      options: [
        "Strongly Agree ",
        "Somewhat Agree",
        "Neither Agree nor disagree",
        "Somewhat Disagree ",
        "Strongly Disagree ",
      ],
    },
    {
      id: 5,
      question: "Do you have adequate life and medical insurance cover?	",
      options: [
        "Yes, both are covered",
        "Adequate life insurance but low medical insurance",
        "Adequate medical insurance but low life insurance",
        "Don’t have adequate life and medical insurance",
        "No Insurance at all ",
      ],
    },
  ];
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Financial Pulse
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
            <GaugeProp percent={scorePercent} index={index}/>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button>Go Back</Button></Link>
        </Modal.Footer>
      </Modal>
    );
  }
  var answersArray = [
    //   {
    //       qId:"1",
    //       option:1
    //   }
  ];
  const handleOptionChange = (e, qIndex) => {
    if (answersArray.some((ans) => ans.qId === qIndex)) {
      answersArray = answersArray.filter((ans) => ans.qId !== qIndex);
    }
    answersArray.push({
      qId: qIndex,
      option: +e.target.value,
    });
    //  console.log("answers",answersArray)
  };
  const handleSubmit = (e) => {
    console.log(answersArray)
    var score = 0;
    e.preventDefault();
    answersArray.forEach((ans) => {
      ans.option === 0
        ? (score += 100)
        : ans.option === 1
        ? (score += 75)
        : ans.option === 2
        ? (score += 50)
        : ans.option === 3
        ? (score += 25)
        : (score += 0);
    });
    var total = score/500;
    // total <= 30 ? setScorePercent(0.3) : total <= 60 ? setScorePercent(0.6) : setScorePercent(0.9);
    if(total<=.4){
        setIndex(0);
    } else if(total>.4 && total<.8){
        setIndex(1);
    } else {
        setIndex(2);
    }
    setScorePercent(total);
    setModalShow(true);
  };
  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>
      <ScrollToTop />
      <Header />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Jumbotron className="container-fluid">
        <div
          style={{
            background: "white",
            width: "80%",
            margin: "auto",
            padding: "1%",
          }}
          className="score-container"
        >
          <h1 className="marginTop">Know Your Financial Pulse</h1>

          <form onSubmit={handleSubmit}>
            {questions.map((q, i) => (
              <div className="text-left pl-5 my-3" key={q.id}>
                <p style={{color:"#3AD4AF",fontWeight:"600"}}>{q.question}</p>
                {q.options.map((opt, index) => (
                  <div className="q-i-box" onChange={(e) => handleOptionChange(e, i)} key={index}>
                    <input
                      type="radio"
                      className="mr-2"
                      name={`${i}`}
                      required
                      value={`${index}`}
                    />
                    <label htmlFor={`${index}`}>{opt}</label>
                  </div>
                ))}
              </div>
            ))}
            <Button
              type="submit"
              variant="primary"
              style={{ width: "40%", margin: "0 0 5%" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </Jumbotron>
      <Footer />
      {/* <SocialFollow /> */}
    </div>
    </div>
  );
}
