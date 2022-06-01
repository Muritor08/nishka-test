import React, { useState } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
// import SocialFollow from "../social/SocialFollow";
// import ScrollToTop from "../ScrollToTop";
import GaugeProp from "../../features/gauge/GaugeProp";
import { Link } from "react-router-dom";
import { Clear, Edit } from "@material-ui/icons";
import './Details.css'

export default function FinancialScore() {
    const [modalShow, setModalShow] = React.useState(false);
    const [scorePercent,setScorePercent]=useState();
    const [index,setIndex]=useState();
    const [edit,setEdit] = useState(false)

  const questions = [
    {
      id: 1,
      question:
        "What is your age in years?	",
      options: [
        "20-30",
        "30-40",
        "40-50",
        "50-100",
      ],
      scores:[0,0,0,0],
      selectedOption:0
    },
    {
        id: 2,
        question:
          "What is your life cycle stage?	",
        options: [
          "Single",
          "Married couple without children",
          "Married couple with children",
          "Family with growing children",
          "Reaching retirmement",
          "Retired"
        ],
        scores:[0,0,0,0,0,0],
      selectedOption:1

      },
      {
        id: 3,
        question:
          "Whats is your current annual income?	",
        options: [
          "200000 - 500000",
          "500000 - 1000000",
          "1000000 - 1500000",
          "1500000 - 2500000",
          "2500000 - 5000000",
          "Above 5000000"
        ],
        scores:[0,0,0,0,0,0],
      selectedOption:3

      },
      {
        id: 4,
        question:
          "How was your household's total spending compared to your income in last 12 months? 	",
        options: [
          "Spending was much less than income",
          "Spending was a little less than income",
          "Spending was about equal to income",
          "Spending was a little more than income",
          "Spending was much more than income"
        ],
        scores:[100,75,50,25,0],
      selectedOption:2
      },
      {
        id: 5,
        question:
          "How good you were in paying your household monthly expense/bills in the last 12 months?	",
        options: [
          "I paid all my expense/bills on time",
          "I paid nearly all my expense/bills on time",
          "I paid most of my expense/bills on time",
          "I paid some of my expense/bills on time",
          "I paid a very few my expense/bills on time"
        ],
        scores:[100,60,40,20,0],
      selectedOption:1
      },
      {
        id: 6,
        question:
          "How long you can afford to meet your monthly expenses from money readily available, without taking money from your investment pool or borrowing?	",
        options: [
          "More than 6 months",
          "6 months",
          "3-6 months",
          "1-3 months",
          "Less than 1 month"
        ],
        scores:[100,75,50,25,0],
      selectedOption:4
      },
      {
        id: 7,
        question:
          "How confident are you that your household is currently doing what is needed to meet your longer-term goals?	",
        options: [
          "Very Confident",
          "Moderately Confident",
          "Somewhat confident",
          "Slightly confident",
          "Not at all confident"
        ],
        scores:[100,75,50,25,0],
      selectedOption:2
      },
      {
        id: 8,
        question:
          "As of today, which of the following statements describes how manageable your household debt is?	",
        options: [
          "Do not have any debt",
          "Have a manageable amount of debt",
          "Have a bit more debt than is manageable",
          "Have far more debt than is manageable"
        ],
        scores:[100,85,40,0],
      selectedOption:2
      },
      {
        id: 9,
        question:
          "How would you rate your credit score?	",
        options: [
          "Excellent",
          "Very Good",
          "Good",
          "Fair",
          "Poor",
          "I do't know"
        ],
        scores:[100,80,60,40,0,0],
      selectedOption:0
      },
      {
        id: 10,
        question:
          "My investment horizon for major portion of my investment is	",
        options: [
          "More than 10 years",
          "5-10 years",
          "3-5 years",
          "1-3 years",
          "Less than a year"
        ],
        scores:[100,75,50,25,10],
      selectedOption:4
      },
      {
        id: 11,
        question:
          "To what extent do you agree or disagree with the following statement:	",
        options: [
          "Agree Strongly",
          "Agree Somewhat",
          "Neighter Agree nor disagree",
          "Disagree somewhat",
          "Disagree Strongly"
        ],
        scores:[100,65,35,15,0],
      selectedOption:3
      },
      {
        id: 12,
        question:
          "How much is your life insurance coverage?	",
        options: [
          "10 times of my annual income",
          "8 times of my annual income",
          "5 times of my annual income",
          "3 times of my annual income",
          "No insurance"
        ],
        scores:[100,75,50,30,0],
      selectedOption:3
      },
      {
        id: 13,
        question:
          "Retrieving data. Wait a few seconds and try to cut or copy again.",
        options: [
          "15 lacs / full reimbursement by employer",
          "10 lacs",
          "8 lacs",
          "5 lacs",
          "2 lacs",
          "No insurance"
        ],
        scores:[100,80,60,40,20,0],
      selectedOption:4
      },
      {
        id: 14,
        question:
          "Which of the following describe your attitude towards returns form your investments?	",
        options: [
          "Prefer investments with no risk and ensuring capital protection",
          "Prefer mix of investments with small part having high risk ",
          "Balanced portfolio of investments",
          "Portfolio with inclination towards high risk investments",
          "Only high return investments"
        ],
        scores:[0,0,0,0,0],
      selectedOption:3
      },
      {
        id: 15,
        question:
          "How you adapt to sudden and unfavorable financial changes in your life?	",
        options: [
          "Easily",
          "Somewhat easily",
          "Somewhat uneasily",
          "Very uneasily"
        ],
        scores:[0,0,0,0],
      selectedOption:2
      },
      {
        id: 16,
        question:
          "How good is your knowledge about various investment products?	",
        options: [
          "Execellent knowledge",
          "Good knowledge",
          "Reasonable knowledge",
          "Low knowledge",
          "No knowledge"
        ],
        scores:[0,0,0,0,0],
      selectedOption:4
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
    //       option:1,
    //      score:0
    //   }
  ];
  const handleOptionChange = (e, qIndex) => {
    if (answersArray.some((ans) => ans.qId === qIndex)) {
      answersArray = answersArray.filter((ans) => ans.qId !== qIndex);
    }
    answersArray.push({
      qId: qIndex,
      option: +e.target.value,
      score:questions[qIndex].scores[+e.target.value]
    });
    questions[qIndex].selectedOption = +e.target.value
     console.log("answers",answersArray)
  };
  const handleSubmit = (e) => {
      var finalScore = 0;
    e.preventDefault();
    answersArray.forEach((ans) => {
      finalScore += ans.score
    });
    var total = finalScore/1000;
    // console.log("total",total)
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
        <div className="fp-main">
            <div className="fp-edit" onClick={()=>setEdit(!edit)}>
                {!edit ? <Edit /> : <Clear />}
            </div>
                  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
                      checked={q.selectedOption === index}
                      disabled={!edit}
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
    )
}
