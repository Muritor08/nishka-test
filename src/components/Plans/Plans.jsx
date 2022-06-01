import React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { Jumbotron } from "react-bootstrap";
import Header from "../Layout/Header";
import ScrollToTop from "../ScrollToTop";

import "./plan.css";

const planDetails = {
  free: {
    amount: 0,
    benifits: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  monthly: {
    amount: 100,
    benifits: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  yearly: {
    amount: 1000,
    benifits: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
};

const FreePlanCard = ({ chosenPlan, setChosenPlan }) => {
  return (
    <div className="card free-plan-card">
      <div className="card-body">
        <h4 className="card-title">Free Plan</h4>
        <h6 className="plan-amount">Rs. {planDetails.free.amount}</h6>
        <ul className="plan-benifits">
          {planDetails.free.benifits.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <div class="d-grid gap-2">
          {chosenPlan === 1 ? (
            <button class="btn btn-success" type="button">
              Selected
            </button>
          ) : (
            <button
              onClick={() => setChosenPlan(1)}
              class="btn btn-primary"
              type="button"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const MonthlyPlanCard = ({ chosenPlan, setChosenPlan }) => {
  return (
    <div className="card monthly-plan-card">
      <div className="card-body">
        <h4 className="card-title">Monthly Plan</h4>
        <h6 className="plan-amount">Rs. {planDetails.monthly.amount}</h6>
        <ul className="plan-benifits">
          {planDetails.monthly.benifits.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <div class="d-grid gap-2">
          {chosenPlan === 2 ? (
            <button class="btn btn-success" type="button">
              Selected
            </button>
          ) : (
            <button
              onClick={() => setChosenPlan(2)}
              class="btn btn-primary"
              type="button"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const YearlyPlanCard = ({ chosenPlan, setChosenPlan }) => {
  return (
    <div className="card yearly-plan-card">
      <div className="card-body">
        <h4 className="card-title">Yearly Plan</h4>
        <h6 className="plan-amount">Rs. {planDetails.yearly.amount}</h6>
        <ul className="plan-benifits">
          {planDetails.yearly.benifits.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <div class="d-grid gap-2">
          {chosenPlan === 3 ? (
            <button class="btn btn-success" type="button">
              Selected
            </button>
          ) : (
            <button
              onClick={() => setChosenPlan(3)}
              class="btn btn-primary"
              type="button"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Plans() {
  const [open, setOpen] = React.useState(false);
  const [chosenPlan, setChosenPlan] = React.useState(1);
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Plans dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose an appropriate plan"}
        </DialogTitle>
        <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
        orci diam. Aliquam in congue dolor. Praesent maximus lorem ac risus
        bibendum efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </DialogContentText> */}
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1>Plans</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          orci diam. Aliquam in congue dolor. Praesent maximus lorem ac risus
          bibendum efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <FreePlanCard chosenPlan={chosenPlan} setChosenPlan={setChosenPlan} />
        <MonthlyPlanCard
          chosenPlan={chosenPlan}
          setChosenPlan={setChosenPlan}
        />
        <YearlyPlanCard chosenPlan={chosenPlan} setChosenPlan={setChosenPlan} />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="true"
            id="termsCheck"
            onClick={() => setAcceptTerms(!acceptTerms)}
            checked={acceptTerms}
          />
          <label class="form-check-label" for="termsCheck">
            Agree to our terms and conditions
          </label>
        </div>
        {/* </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} disabled={!acceptTerms}>
            Register
          </Button>
        </DialogActions>
      </Dialog> */}
      </Jumbotron>
    </div>
  );
}
