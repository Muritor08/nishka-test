import React, { useContext, useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollToTop from "../ScrollToTop";
import "./FinancialPulse.css";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import QuestionsMap from "./QuestionsMap";
import { questions } from "./DetailedData";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tooltip } from "@material-ui/core";
import { useHistory } from "react-router";
import {
  resultOverall,
  resultPerCategory,
  resultRisk,
} from "./ResultGenerator";

import DetailedResultModal from "./DetailedResultModal";
import CircularLoader from "./CircularProgress";

export default function DetailedFP() {
  const [modalShow, setModalShow] = React.useState(false);
  const history= useHistory()
  const [scorePercent, setScorePercent] = useState({
    spendResult: {
      category: "",
      average: 0,
      advices: [],
      index: 1,
    },
    saveResult: {
      category: "",
      average: 0,
      advices: [],
      index: 1,
    },
    borrowResult: {
      category: "",
      average: 0,
      advices: [],
      index: 1,
    },
    planResult: {
      category: "",
      average: 0,
      advices: [],
      index: 1,
    },
    insuranceResult: {
      category: "",
      average: 0,
      advices: [],
      index: 1,
    },
    overallResult: {
      category: "",
      average: 0,
      index: 1,
    },
    riskResult: {
      category: "",
      average: 0,
      index: 0,
      advices: [],
    },
  });
  // const [index, setIndex] = useState();
  // const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);
  const [isError, setiserror] = useState(false);
  // const [temppulse, setTemppulse] = useState([]);
  const [currentSection, setCurrentSection] = useState(1);
  const [disableFormSubmit, setDisableFormSubmit] = useState(true);
  const { token, user,dispatch } = useContext(AppContext);
  // const [answersArray, setanswersArray] = useState([]);
  const [update, setUpdate] = useState(false);
  // const [pulse, setPulse] = useState({});

  const [showCircularLoader, setShowCircularLoader] = useState(false);
  const [answers, setAnswers] = useState({
    // 1: {
    //   choice: 2,
    //   score: 0,
    //   category: "Personal Details",
    // },
    // 2: {
    //   choice: 3,
    //   score: 0,
    //   category: "Personal Details",
    // },
    // 3: {
    //   choice: 0,
    //   score: 0,
    //   category: "Personal Details",
    // },
    // 4: {
    //   choice: 3,
    //   score: 25,
    //   category: "Spend",
    // },
    // 5: {
    //   choice: 0,
    //   score: 100,
    //   category: "Spend",
    // },
    // 6: {
    //   choice: 4,
    //   score: 0,
    //   category: "Save",
    // },
    // 7: {
    //   choice: 1,
    //   score: 75,
    //   category: "Save",
    // },
    // 8: {
    //   choice: 1,
    //   score: 85,
    //   category: "Borrow",
    // },
    // 9: {
    //   choice: 1,
    //   score: 70,
    //   category: "Borrow",
    // },
    // 10: {
    //   choice: 2,
    //   score: 50,
    //   category: "Plan",
    // },
    // 11: {
    //   choice: 0,
    //   score: 100,
    //   category: "Plan",
    // },
    // 12: {
    //   choice: 2,
    //   score: 50,
    //   category: "Insurance",
    // },
    // 13: {
    //   choice: 1,
    //   score: 80,
    //   category: "Insurance",
    // },
    // 14: {
    //   choice: 1,
    //   score: 0,
    //   category: "Risk profile",
    // },
    // 15: {
    //   choice: 1,
    //   score: 0,
    //   category: "Risk profile",
    // },
    // 16: {
    //   choice: 1,
    //   score: 0,
    //   category: "Risk profile",
    // },
  });
  let categoryNames = [
    "Personal Details",
    "Spend",
    "Save",
    "Borrow",
    "Plan",
    "Insurance",
    "Risk profile",
  ];

  const fetchpulse = async () => {
   
    setShowCircularLoader(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/detailpulse`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res.data);
      const { id, user_id, ...rest } = res.data.results;


      const data = res.data.results;
  
      let tempAns = {};

      for (let i in data) {
        tempAns[data[i].question] = {
          choice: data[i].choice,
          score: data[i].score,
          category: data[i].category,
          question: data[i].question,
          id: data[i].id,
        };
      }


      setAnswers(tempAns);

   
      setUpdate(true);
     
      setShowCircularLoader(false);
    } catch (error) {
      setShowCircularLoader(false);
    }
  };

  const createpulse = async () => {
    setShowCircularLoader(true);
    console.log(answers);
    for (let i in answers) {
      console.log(answers[i]);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_APIURL}/api/detailpulse`,
          {
            question: answers[i].question,
            category: answers[i].category,
            score: answers[i].score,
            choice: answers[i].choice,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
     
      } catch (error) {}
    }
    setShowCircularLoader(false);
    setModalShow(true);
  };

  const updatepulse = async () => {
    setShowCircularLoader(true);
    try {
     
      for (let i in answers) {
   
        try {
          const res = await axios.patch(
            `${process.env.REACT_APP_APIURL}/api/detailpulse/${answers[i].id}/update`,
            {
              question: answers[i].question,
              category: answers[i].category,
              score: answers[i].score,
              choice: answers[i].choice,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
         
        } catch (error) {}
      }
      setModalShow(true);
    } catch (error) {
      setiserror(true);
      setError(error.response.message);
    }
    setShowCircularLoader(false);
  };

  const handleOptionChange = async (qid, ansId, e) => {
    let tempAns = { ...answers };
    let questionDetails = questions.find((element) => element.id === qid);
    tempAns[qid] = {
      question: qid,
      choice: ansId,
      score: questionDetails.scores[ansId],
      category: questionDetails.category,
      id: answers[qid] && answers[qid].id,
    };

   
    setAnswers(tempAns);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const spendResult = resultPerCategory(questions, answers, "Spend");
    const saveResult = resultPerCategory(questions, answers, "Save");
    const borrowResult = resultPerCategory(questions, answers, "Borrow");
    const planResult = resultPerCategory(questions, answers, "Plan");
    const insuranceResult = resultPerCategory(questions, answers, "Insurance");
    const overallResult = resultOverall({
      spendResult,
      saveResult,
      borrowResult,
      planResult,
      insuranceResult,
    });
    const riskResult = resultRisk(questions, answers);

    setScorePercent({
      spendResult,
      saveResult,
      borrowResult,
      planResult,
      insuranceResult,
      riskResult,
      overallResult,
    });

    // console.log(
    //   spendResult,
    //   saveResult,
    //   borrowResult,
    //   planResult,
    //   insuranceResult,
    //   overallResult,
    //   answers,
    //   answersArray
    // );

    if (update) {
      updatepulse();
    } else {
      createpulse();
    }
  };

  const handleTabChange = (event, newValue) => {
    setCurrentSection(newValue);
  };

  const scrollToFormTop = () => {
    document
      .querySelector("#detailed-fp-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  const checkSectionCompletion = (sec) => {
    const secElements = questions.filter((element) => element.category === sec);
    const secIds = secElements.map((element) => element.id);
    return secIds.every((element) => answers[element]);
  };
  const checktoken=async()=>{
  console.log(token)

    try{
      const res = await axios.get(`${process.env.REACT_APP_APIURL}/api/token`,{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })

    }catch(error){
      if(error.response){
        if(error.response.status === 401){
     
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          dispatch({type:"LOGOUT"})
          history.push("/Login")
        }
        

      }

    }
  }

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      setDisableFormSubmit(false);
    }
  }, [answers]);

  useEffect(() => {
    checktoken()
    fetchpulse();

  }, []);

  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>
      <ScrollToTop />
      <Header />
      <DetailedResultModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        scorePercent={scorePercent}
      />
      <Jumbotron className="container-fluid">
        <CircularLoader showCircularLoader={showCircularLoader} />
        <div
          style={{
            background: "white",
            width: "90%",
            margin: "auto",
            padding: "1%",
          }}
          className="score-container"
        >
          <h1 className="my-4 fs-1">Know Your Comprehensive Financial Pulse</h1>
          <p className="fs-6 mb-3 text-danger">
            Please answer all the questions.
          </p>
          <form onSubmit={handleSubmit} id="detailed-fp-form">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={currentSection}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleTabChange}
                    aria-label="lab API tabs example"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                  >
                    <Tab
                      label={`Personal Details ${
                        checkSectionCompletion("Personal Details") ? "✅" : ""
                      }`}
                      value={1}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Spend ${
                        checkSectionCompletion("Spend") ? "✅" : ""
                      }`}
                      value={2}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Save ${
                        checkSectionCompletion("Save") ? "✅" : ""
                      }`}
                      value={3}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Borrow ${
                        checkSectionCompletion("Borrow") ? "✅" : ""
                      }`}
                      value={4}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Plan ${
                        checkSectionCompletion("Plan") ? "✅" : ""
                      }`}
                      value={5}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Insurance ${
                        checkSectionCompletion("Insurance") ? "✅" : ""
                      }`}
                      value={6}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                    <Tab
                      label={`Risk profile ${
                        checkSectionCompletion("Risk profile") ? "✅" : ""
                      }`}
                      value={7}
                      className="px-3 fs-6 fw-bolder"
                      style={{ minWidth: 0 }}
                    />
                  </TabList>
                </Box>
                <TabPanel value={1}>
                  {/* <h3 className="fs-4">Personal Details</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Personal Details"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={2}>
                  {/* <h3 className="fs-4">Spend</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Spend"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={3}>
                  {/* <h3 className="fs-4">Save</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Save"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={4}>
                  {/* <h3 className="fs-4">Borrow</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Borrow"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={5}>
                  {/* <h3 className="fs-4">Plan</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Plan"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={6}>
                  {/* <h3 className="fs-4">Insurance</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Insurance"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
                <TabPanel value={7}>
                  {/* <h3 className="fs-4">Risk profile</h3> */}
                  <QuestionsMap
                    questions={questions.filter(
                      (element) => element.category === "Risk profile"
                    )}
                    handleOptionChange={handleOptionChange}
                    answers={answers}
                  />
                </TabPanel>
              </TabContext>
            </Box>
            {/* <LinearWithValueLabel
              progress={(Object.keys(answers).length / questions.length) * 100}
            /> */}
            <button
              className="btn btn-secondary"
              type="button"
              style={{
                margin: "0.5rem",
              }}
              onClick={() => {
                setCurrentSection(
                  currentSection - 1 === 0 ? 1 : currentSection - 1
                );
                scrollToFormTop();
              }}
              disabled={currentSection === 1}
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
                setCurrentSection(
                  currentSection + 1 === 8 ? 7 : currentSection + 1
                );
                scrollToFormTop();
              }}
              disabled={currentSection === 7}
            >
              Next
            </button>

            <Tooltip
              title={disableFormSubmit ? "Answer all questions to submit" : ""}
              placement="bottom"
              arrow
            >
              <span>
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{
                    margin: "0.5rem",
                  }}
                  disabled={disableFormSubmit}
                >
                  {disableFormSubmit
                    ? `${Math.round(
                        (Object.keys(answers).length / questions.length) * 100
                      )}%`
                    : "Submit"}
                </button>
              </span>
            </Tooltip>
          </form>
        </div>
      </Jumbotron>
      <Footer />
    </div>
    </div>
  );
}
