// Not being used anymore

import React, { useContext, useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Carousel } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SocialFollow from "../social/SocialFollow";
import ScrollToTop from "../ScrollToTop";
import "./FinancialPulse.css";
import GaugeProp from "../../features/gauge/GaugeProp";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { SystemUpdateTwoTone, Update } from "@material-ui/icons";
import QuestionsMap from "./QuestionsMap";
import { questions } from "./DetailedData";

export default function DetailedFP() {
  const [modalShow, setModalShow] = React.useState(false);
  const [scorePercent, setScorePercent] = useState();
  const [index, setIndex] = useState();
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);
  const [isError, setiserror] = useState(false);
  const [temppulse, setTemppulse] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [disableFormSubmit, setDisableFormSubmit] = useState(true);
  const { token, user } = useContext(AppContext);
  const [answersArray, setanswersArray] = useState([]);
  const [update, setUpdate] = useState(false);
  const [pulse, setPulse] = useState({});
  // [
  //   {
  //     qId: 0,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 1,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 2,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 3,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 4,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 5,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 6,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 7,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 8,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 9,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 10,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 11,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 12,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 13,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 14,
  //     option: false,
  //     score: 0,
  //   },
  //   {
  //     qId: 15,
  //     option: false,
  //     score: 0,
  //   },
  // ]
  const fetchpulse = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/detailpulse`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { id, user, timestamp, userId, ...rest } = res.data.results[0];
      setPulse(res.data.results[0]);
      let temparr = [];
      let ans = [];
      let value;
      for (let key in rest) {
        value = rest[key];
        temparr.push(value);
      }
      for (var i = 0; i < temparr.length; i++) {
        ans.push({
          qId: i,
          option: parseInt(temparr[i]),
          score: questions[i].scores[parseInt(temparr[i]) - 1],
        });
      }

      setanswersArray([...ans]);

      setUpdate(true);
    } catch (error) {}
  };

  useEffect(() => {
    fetchpulse();
  }, []);

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
          <GaugeProp percent={scorePercent} index={index} />
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  // var answersArray = [
  //   //   {
  //   //       qId:"1",
  //   //       option:1,
  //   //      score:0
  //   //   }
  // ];

  const createpulse = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/detailpulse`,
        {
          a1: answersArray[0].option,
          a2: answersArray[1].option,
          a3: answersArray[2].option,
          a4: answersArray[3].option,
          a5: answersArray[4].option,
          a6: answersArray[5].option,
          a7: answersArray[6].option,
          a8: answersArray[7].option,
          a9: answersArray[8].option,
          a10: answersArray[9].option,
          a11: answersArray[10].option,
          a12: answersArray[11].option,
          a13: answersArray[12].option,
          a14: answersArray[13].option,
          a15: answersArray[14].option,
          a16: answersArray[15].option,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdate(true);
    } catch (error) {}
  };
  const updatepulse = async () => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_APIURL}/api/detailpulse/${pulse.id}/update`,
        {
          user: user,
          a1: answersArray[0].option,
          a2: answersArray[1].option,
          a3: answersArray[2].option,
          a4: answersArray[3].option,
          a5: answersArray[4].option,
          a6: answersArray[5].option,
          a7: answersArray[6].option,
          a8: answersArray[7].option,
          a9: answersArray[8].option,
          a10: answersArray[9].option,
          a11: answersArray[10].option,
          a12: answersArray[11].option,
          a13: answersArray[12].option,
          a14: answersArray[13].option,
          a15: answersArray[14].option,
          a16: answersArray[15].option,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      setiserror(true);
      setError(error.response.message);
    }
  };
  const handleOptionChange = (e, qIndex) => {
    console.log(answersArray);
    let tempans = [...answersArray];
    if (answersArray.some((ans) => ans.qId === qIndex)) {
      tempans = answersArray.filter((ans) => ans.qId !== qIndex);
    }

    tempans.push({
      qId: qIndex,
      option: +e.target.value + 1,
      score: questions[qIndex].scores[+e.target.value],
    });

    tempans = tempans.sort((a, b) => a.qId - b.qId);
    setanswersArray([...tempans]);

    setDisableFormSubmit(
      !document.getElementById("detailed-fp-form").checkValidity()
    );

    // console.log(answersArray);
  };
  const handleSubmit = (e) => {
    var finalScore = 0;
    e.preventDefault();
    answersArray.forEach((ans) => {
      finalScore += ans.score;
    });
    var total = finalScore / 1000;
    // console.log("total",total)
    // total <= 30 ? setScorePercent(0.3) : total <= 60 ? setScorePercent(0.6) : setScorePercent(0.9);
    if (total <= 0.4) {
      setIndex(0);
    } else if (total > 0.4 && total < 0.8) {
      setIndex(1);
    } else {
      setIndex(2);
    }

    setScorePercent(total);
    if (update) {
      updatepulse();
    } else {
      createpulse();
    }
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
          <h1 className="marginTop">Know Your Comprehensive Financial Pulse</h1>
          <div>{temppulse[0]}</div>
          <form onSubmit={handleSubmit} id="detailed-fp-form">
            <div
              style={{
                overflow: "hidden",
                height: currentSection !== 0 && 0,
              }}
            >
              <QuestionsMap
                questions={questions.slice(0, 4)}
                handleOptionChange={handleOptionChange}
                answersArray={answersArray}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                height: currentSection !== 1 && 0,
              }}
            >
              <QuestionsMap
                questions={questions.slice(4, 8)}
                handleOptionChange={handleOptionChange}
                answersArray={answersArray}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                height: currentSection !== 2 && 0,
              }}
            >
              <QuestionsMap
                questions={questions.slice(8, 12)}
                handleOptionChange={handleOptionChange}
                answersArray={answersArray}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                height: currentSection !== 3 && 0,
              }}
            >
              <QuestionsMap
                questions={questions.slice(12, 16)}
                handleOptionChange={handleOptionChange}
                answersArray={answersArray}
              />
            </div>
            <div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                {[1, 2, 3, 4].map((e, i) => {
                  return (
                    <li
                      style={{
                        padding: 5,
                        margin: 5,
                        cursor: "pointer",
                        color: i === currentSection ? "black" : "lightgray",
                      }}
                      onClick={() => {
                        setCurrentSection(i);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {i + 1}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="btn btn-secondary"
              type="button"
              style={{
                margin: "0.5rem",
              }}
              onClick={() => {
                setCurrentSection(currentSection - 1);
                window.scrollTo(0, 0);
              }}
              disabled={currentSection === 0}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              type="button"
              style={{
                margin: "0.5rem",
              }}
              onClick={() => {
                setCurrentSection(currentSection + 1);
                window.scrollTo(0, 0);
              }}
              disabled={currentSection === 3}
            >
              Next
            </button>
            <button
              className="btn btn-success"
              type="submit"
              style={{
                margin: "0.5rem",
              }}
              disabled={disableFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </Jumbotron>
      <Footer />
    </div>
    </div>
  );
}
