import React, {useState} from "react";
import { useField, Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { RadioGroup } from "formik-material-ui";
import { AiFillStar, AiFillGift } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import * as Yup from "yup";
import { FormControl, Radio, FormControlLabel, Slider } from "@mui/material";

const PL_calc = () => {

  function to_indian_format(y) {
    var x = y;
    x = x.toString();
    var afterPoint = "";
    if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      lastThree +
      afterPoint;

    return res;
  }

  const [pAmount, setpAmount] = useState(50000);
  const interest = 13;
  const [duration, setDuration] = useState(24);
  const maxValue = 2500000;
  const maxDuration = 60;

  const intr = parseFloat(
    (interest / 1200)
  );

  var value = parseFloat(
    Math.pow((intr+1),duration)
  );

  var emi = Math.round(
    (pAmount*intr*value)/(value-1)
  );

  emi = to_indian_format(emi);
  function myFunction() {
    window.location.href = "/PLForm/salariedPL";
  }
  return (
    <>
      <div className="tw-m-4 md:tw-m-8 tw--mb-0.5 tw-border-black tw-shadow-3xl tw-rounded-2xl">
        <div className="tw-border-nishblue-100 md:tw-p-2">
          <div className="tw-h-auto tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-3 tw-items-center tw-pt-6 tw-justify-between tw-px-10">
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-1.5 lg:tw-gap-3 tw-items-center tw-py-auto">
              <span className="tw-text-green-400 lg:tw-w-10 lg:tw-h-10 tw-w-8 tw-pb-3"><AiFillGift className="tw-h-full tw-w-full"/></span>
                <p className="lg:tw-text-lg tw-font-semibold">
                  EXCLUSIVE OFFER:{" "}
                  <span className="tw-font-normal lg:tw-pl-2 tw-text-sm lg:tw-text-md">
                    Wallets Protect benefits worth Rs. 999 for 1 years{" "}
                  </span>
                </p>
              </div>
              <div className="tw-text-lg tw-font-semibold tw-text-nishyellow-400">
                <p>VIEW DETAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-text-left">
        <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
          <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
            <p className="tw-font-semibold tw-text-3xl md:tw-text-5xl tw-m-4 tw-ml-10">
              Hi There,
            </p>
            <p className="tw-m-4 tw-ml-10 tw-mb-14">
              A pre-approved personal of Rs. 20,00,000 is ready for you
            </p>

            <div className="tw-flex tw-flex-col lg:tw-flex-row tw-ml-20">
              <div className="tw-w-full lg:tw-w-1/2 tw-h-48 tw-border-r-0 lg:tw-border-r-2 tw-border-2 tw-border-l-0 tw-border-t-0 tw-border-b-0 tw-border-nishblue-400 tw-border-solid">
                <div className="tw-w-full">
                  <p className="tw-text-lg tw-text-gray-800 tw--ml-10 tw-mr-3 md:tw-mr-0 md:tw-ml-6">
                    How much amount would you like to borrow?{" "}
                  </p>
                  <div className="tw-w-full md:tw--ml-6 tw-m-4 md:tw-p-4 tw-pt-4 md:tw-pt-0 tw--ml-10 tw-mr-3 tw-flex tw-items-center">
                    <span className="tw-text-center tw-mr-3 md:tw-mr-5"> ₹50000</span>
                    <Slider
                      size="small"
                      value={pAmount}
                          onChange={(event, vAmt) => {
                            setpAmount(vAmt);
                          }}
                          defaultValue={pAmount}
                      aria-label="Small"
                      min={50000}
                      max={maxValue}
                      step={1000}
                      valueLabelDisplay="auto"
                    />
                    <span className="tw-text-center tw-ml-2 md:tw-ml-5"> ₹25,00,000</span>
                  </div>
                </div>
              </div>
              <div className="tw-w-full lg:tw-w-1/2 tw-h-48">
                <p className="tw-text-lg tw-font-semibold tw-text-gray-800 tw--ml-10 md:tw-ml-8">
                  Select Tenor
                </p>
                <div className="tw-w-full md:tw-w-4/5 md:tw-ml-10 tw-m-4 md:tw-p-4 tw-pt-4 md:tw-pt-0 tw--ml-10 tw-mr-3 tw-flex tw-items-center">
                    <span className="tw-text-center tw-mr-2 md:tw-mr-5"> 24 months</span>
                    <Slider
                      size="small"
                      value={duration}
                      onChange={(event, vDur) => {
                        setDuration(vDur);
                      }}
                      defaultValue={duration}
                      aria-label="Small"
                      min={24}
                      max={maxDuration}
                      step={12}
                      valueLabelDisplay="auto"
                    />
                    <span className="tw-text-center tw-ml-2 md:tw-ml-5"> 60 months</span>
                  </div>
              </div>
            </div>

            <div className=" tw-mx-6 md:tw-mx-12 tw-flex tw-flex-col md:tw-flex-row md:tw-mt-10 tw-h-max tw-p-3 tw-m-4 tw-text-lg tw-py-5 tw-items-center tw-border-gray-200 tw-bg-gray-200 tw-rounded-md">
              <div className="md:tw-w-1/2 tw-text-gray-600 tw-text-center">
                <p className="">Your EMI is</p>
                <p className="tw--mt-3">
                  Rs.{" "}
                  <span className="tw-font-bold tw-text-2xl tw-text-gray-700">
                    {emi}
                  </span>{" "}
                  per month.
                </p>
                <p className="tw--mt-3">ROI - 13 %</p>
              </div>
              <div className="md:tw-w-1/2 tw-p-3 tw-text-gray-600">
                <div>
                  <p>Fees and Charges Applicable</p>
                </div>
                <div className="tw-flex-col">
                <div className="tw-flex tw-justify-between tw-text-sm">
                  <div className="tw-text-left ">
                    <p>Stamp Duty</p>
                  </div>
                  <div className="tw-font-semibold tw-text-right tw-text-gray-800">
                    <p>As applicable</p>
                  </div>
                </div>
                <div className="tw-flex tw-justify-between tw-text-sm">
                  <div className="tw-text-left ">
                    <p className="tw--mt-3">Processing Fees</p>
                  </div>
                  <div className="tw-font-semibold tw-text-right tw-text-gray-800">
                    <p className="tw--mt-3">Up to 3.99% of the loan amount</p>
                  </div>
                </div>
                <div className="tw-flex tw-justify-between tw-text-sm">
                  <div className="tw-text-left ">
                    <p className="tw--mt-3">Flexi Fee</p>
                  </div>
                  <div className="tw-font-semibold tw-text-right tw-text-gray-800">
                    <p className="tw--mt-3">Applicable for the Flexi Loans</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="tw-text-center tw-mb-16 tw-mt-6">
            <Link to={"/PLForm/empType"}>
              <button
                className=" tw-border-nishyellow-400 tw-text-nishyellow-400 tw-bg-white tw-mr-8 tw-py-1 tw-px-8 tw-rounded-sm tw-font-medium tw-mt-6"
              >
                Back
              </button>
              </Link>

              <button
                type="submit"
                onClick={myFunction}
                className="tw-border-nishyellow-400 tw-text-white tw-bg-nishyellow-400 tw-py-1 tw-px-5 tw-rounded-sm tw-font-medium tw-mt-6"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PL_calc;
