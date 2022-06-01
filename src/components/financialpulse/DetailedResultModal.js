import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GaugePropOverall, GaugePropCategory } from "./DetailedGaugeCard";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./FinancialPulse.css";

function SimpleAccordion(props) {
  console.log("props", props.scorePercent);
  return (
    <div>
      {[
        props.scorePercent.spendResult,
        props.scorePercent.saveResult,
        props.scorePercent.borrowResult,
        props.scorePercent.planResult,
        props.scorePercent.insuranceResult,
      ].map((element, index) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
              key={`${index}`}
            >
              <Typography>{element.category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <GaugePropCategory
                  percent={element.average !== undefined ? element.average : 0}
                  index={element.index !== undefined ? element.index : 0}
                  advices={element.advices}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

function CategoryResults(props) {
  return (
    <>
      <div className="category-wrap">
        {[
          props.scorePercent.spendResult,
          props.scorePercent.saveResult,
          props.scorePercent.borrowResult,
          props.scorePercent.planResult,
          props.scorePercent.insuranceResult,
        ].map((element, index) => {
          return (
            <div className="category-card">
              {/* <h4 className="fs-4 text-center my-2 fw-bold">{element.category}</h4> */}
              <GaugePropCategory
                percent={element.average !== undefined ? element.average : 0}
                index={element.index !== undefined ? element.index : 0}
                advices={element.advices}
                heading={element.category}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

function DetailedResultModal(props) {
  const getImage = (index) => {
    if (index === 0) {
      return "dfp_low.png";
    } else if (index === 1) {
      return "dfp_avg.png";
    } else if (index === 2) {
      return "dfp_good.png";
    }
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
      className="detailed-modalBackdrop"
    >
      <Modal.Header closeButton className="detailed-modal-header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="fs-2 fw-bold"
        >
          Your Comprehensive Financial Pulse Scorecard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "rgb(245, 245, 245)",
        }}
      >
        {/* <SimpleAccordion {...props} /> */}
        {/* <h4 className="fs-3 text-center my-4 fw-bold">Your Overall Financial Score</h4> */}
        <div className="overall-dfp-container">
          <div className="dfp-result-image-cont1">
            <img
              src={getImage(props.scorePercent.overallResult.index)}
              alt=""
              className="dfp-result-image1"
            />
          </div>
          <GaugePropOverall
            percent={
              props.scorePercent.overallResult.average !== undefined
                ? props.scorePercent.overallResult.average
                : 0
            }
            index={
              props.scorePercent.overallResult.index !== undefined
                ? props.scorePercent.overallResult.index
                : 0
            }
            heading={"Your Overall Financial Score"}
          />
          <div className="dfp-result-image-cont2">
            <img
              src="undraw_fast_loading_re_8oi3.svg"
              alt=""
              className="dfp-result-image2"
            />
          </div>
        </div>

        <CategoryResults {...props} />
        <div class="card p-2">
          <h4 className="fs-3 text-center my-4 fw-bold">Risk Profile</h4>
          {props.scorePercent.riskResult.advices.map((e) => (
            <p className="text-center py-0">{e}</p>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="detailed-modal-footer">
        <Link to="/">
          <Button>Go back</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailedResultModal;
