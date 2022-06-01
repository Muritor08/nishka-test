import React from "react";
import { useField, Formik, Form, Field, ErrorMessage } from "formik";
import { RadioGroup } from "formik-material-ui";
import { AiFillStar } from "react-icons/ai";
// import { Tab } from "@headlessui/react";
// import classNames from "classnames";
import * as Yup from "yup";
import { FormControl, Radio, FormControlLabel, Slider } from "@mui/material";

import { useState } from "react";

//image
import step4 from "../../assets/step4.png";
import step4mob from "../../assets/step4mob.png";


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-4">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const Invest_home = () => {
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

  const [pAmount, setpAmount] = useState(20000);
  const interest = 5.9;
  const [duration, setDuration] = useState(12);
  const maxValue = 5000000;
  // const intMax = 20;
  const maxDuration = 36;

  const intr = interest / 1200;
  const emi = duration
    ? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;
  var totalAmt = duration * emi;
  var TotalAmountofCredit = Math.round(
    (emi / intr) * (1 - Math.pow(1 + intr, -duration))
  );
  var TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit) - 5;
  TotalAmountofInterest = to_indian_format(TotalAmountofInterest);
  totalAmt = to_indian_format(totalAmt);

  // pAmount = to_indian_format(pAmount) ;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  mm = (mm + duration - 3) % 12;
  var plus = Math.floor(duration / 12);
  yyyy += plus;

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month = monthNames[mm - 1];

  return (
    <>
      <div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step4} className="tw-mx-auto tw-w-full" />
      </div>
      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step4mob} className="tw-mx-auto tw-w-full" />
      </div>

      <Formik
        initialValues={{
          depositAmount: "",
          bankName: "", // added for our select
          payment: "netbanking",
          accountNumber: "",
          ifsc: "",
        }}
        validationSchema={Yup.object({
          depositAmount: Yup.number()
            .min(25000, "Please enter an amount more than ₹25,000")
            .max(50000000, "Please enter an amount less than ₹50,00,00,000")
            .required("Required"),
          bankName: Yup.string()
            .oneOf(["HDFC", "ICICI", "Axis", "More"], "Invalid Bank Name")
            .required("Required"),
          payment: Yup.string().required("Required"),
          accountNumber: Yup.string()
            .min(9, "Must be atleast 9 characters")
            .max(18, "Must be atmost 18 characters")
            .matches("[0-9]", "Account number only contains numbers")
            .required("Required"),
          ifsc: Yup.string()
            .min(11, "Must be 11 characters")
            .max(11, "Must be 11 characters")
            .matches("^[A-Z]{4}0[A-Z0-9]{6}$","Please enter a valid IFSC code")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="tw-text-left">
          <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
            <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
              <p className="tw-font-semibold tw-text-3xl md:tw-text-5xl tw-m-4 tw-ml-10">
                Investment Details
              </p>

              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full">
                <div className="lg:tw-w-1/2">
                  <div>
                    <div className="tw-m-4 tw-mt-8 tw-p-4">
                      <label htmlFor="mobileNumber" className="tw-w-full">
                        <div className="tw-flex tw-justify-between tw-mb-2">
                          <p className="tw-text-sm md:tw-text-lg tw-font-semibold">
                            DEPOSIT AMOUNT
                          </p>
                          <p className="tw-text-blue-500 tw-text-sm md:tw-text-md tw-font-medium">
                            View interest rates
                          </p>
                        </div>
                      </label>

                      <div className="tw-flex tw-gap-5 ">
                        <span className="tw-font-semibold tw-text-lg">₹</span>

                        <Slider
                          size="small"
                          value={pAmount}
                          onChange={(event, vAmt) => {
                            setpAmount(vAmt);
                          }}
                          defaultValue={pAmount}
                          aria-label="Small"
                          min={20000}
                          max={maxValue}
                          // color={color}
                          valueLabelDisplay="auto"
                        />
                      </div>

                      <p className="tw-text-gray-500 tw-text-sm tw-font-medium tw-m-2 tw-ml-0">
                        Min ₹25,000 & Max ₹5,00,00,000
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-ml-8">
                      TENOR (MONTHS){" "}
                    </p>
                    <div className="tw-ml-2 tw-m-4 tw-p-4 tw-flex tw-items-center">
                      <span className="tw-text-center"> 12 months</span>
                      <Slider
                        size="small"
                        value={duration}
                        onChange={(event, vDur) => {
                          setDuration(vDur);
                        }}
                        defaultValue={duration}
                        aria-label="Small"
                        min={12}
                        max={maxDuration}
                        // color={color}
                        valueLabelDisplay="auto"
                      />
                      <span className="tw-text-center"> 36 months</span>
                    </div>
                  </div>

                  {/* <div>
                    <p className="text-lg font-semibold text-gray-800 ml-8 mt-10">
                      INTEREST PAYOUT{" "}
                    </p>

                    <Tab.Group>
                      <Tab.List className="border-gray-700 ml-8 w-4/5 flex overflow-x-scroll -mt-2 gap-2 lg:gap-5">
                        <Tab
                          className={({ selected }) =>
                            classNames(
                              " border-gray-600 border-2 py-1.5 px-2 rounded-md text-sm md:text-md mt-8",
                              selected
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "text-gray-700 bg-white"
                            )
                          }
                        >
                          <span>
                            <AiFillStar className="text-orange-500 -mt-4" />{" "}
                          </span>
                          <button>On Maturity</button>
                        </Tab>

                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "border-gray-600 border-2 py-1.5 px-2 rounded-md text-sm md:text-md mt-8",
                              selected
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "text-gray-700 bg-white"
                            )
                          }
                        >
                          Monthly
                        </Tab>

                        <Tab
                          className={({ selected }) =>
                            classNames(
                              " border-gray-600 border-2 py-1.5 px-2 rounded-md text-sm md:text-md mt-8",
                              selected
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "text-gray-700 bg-white"
                            )
                          }
                        >
                          Quaterly
                        </Tab>

                        <Tab
                          className={({ selected }) =>
                            classNames(
                              " border-gray-600 border-2 py-1.5 px-2 rounded-md text-sm md:text-md mt-8",
                              selected
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "text-gray-700 bg-white"
                            )
                          }
                        >
                          Half Yearly
                        </Tab>

                        <Tab
                          className={({ selected }) =>
                            classNames(
                              "border-gray-600 border-2 py-1.5 px-2 rounded-md text-sm md:text-md mt-8",
                              selected
                                ? "bg-blue-500 border-blue-500 text-white"
                                : "text-gray-700 bg-white"
                            )
                          }
                        >
                          Annually
                        </Tab>
                      </Tab.List>
                    </Tab.Group>
                  </div> */}

                  <div className=" tw-flex tw-flex-col tw-gap-2 tw-bg-gray-200 tw-p-2 tw-ml-8 tw-m-4 tw-mt-8 tw-p-4 tw-rounded-sm tw-mb-10">
                    <div>
                    <span className="tw-text-yellow-500 tw-pr-2">
                      <AiFillStar />{" "}
                    </span>
                    <span className="tw-text-sm tw-font-medium">
                      Recommended for maximum savings
                    </span>
                    </div>

                    <div>
                    <span className="tw-text-sm">
                    <span className="tw-font-medium">Desposit Amount</span> - Rs. 25,000
                    </span>
                    </div>

                    <div>
                    <span className="tw-text-sm">
                      <span className="tw-font-medium">Tenor</span> - 12 Months
                    </span>
                    </div>

                  </div>
                </div>

                <div className="lg:tw-w-1/2 lg:tw-ml-8">
                  <div className=" tw-border-solid tw-border-gray-300 tw-p-6 tw-m-10">
                    <div className="tw-mb-5">
                      <p className="tw-font-semibold ">
                        YOUR DEPOSIT SUMMARY
                      </p>
                    </div>

                    <div className="tw-flex tw-justify-between tw-mb-1.5">
                      <p className="tw-font-medium ">
                        Interest rate per annum
                      </p>
                      <p className="tw-font-bold ">{interest}%</p>
                    </div>

                    <div className="tw-flex tw-justify-between tw-mb-1.5">
                      <p className="tw-font-medium ">Maturity month</p>
                      <p className="tw-font-bold ">
                        {month} {yyyy}
                      </p>
                    </div>

                    <div className="tw-flex tw-justify-between tw-mb-1.5">
                      <p className="tw-font-medium ">Total deposit amount</p>
                      <p className="tw-font-bold ">{pAmount}</p>
                    </div>

                    <div className="tw-flex tw-justify-between tw-mb-1.5">
                      <p className="tw-font-medium ">
                        Interest amount* <span>(On Maturity)</span>
                      </p>
                      <p className="tw-font-bold ">{TotalAmountofInterest}</p>
                    </div>

                    <div className="tw-flex tw-justify-between tw-mb-1.5">
                      <p className="tw-font-medium ">Total payout</p>
                      <p className="tw-font-bold">{totalAmt}</p>
                    </div>

                    <div className="tw-mt-2 tw-w-4/5 ">
                      <p className="tw-text-md tw-text-gray-600">
                        Disclaimer: Actual returns may very slightly if deposit
                        enters into a leap year
                      </p>
                    </div>
                  </div>

                  <div className="tw-p-4 tw-m-6">
                    <div>
                      <p className="tw-text-lg tw-font-semibold tw-text-gray-800 tw--mt-6 tw-mb-4">
                        BANKING DETAILS
                      </p>
                    </div>

                    <div>
                      <MySelect
                        className="tw-w-full tw-outline-none tw--ml-1 tw-border-b-2 tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-gray-700 tw-text-md tw-text-gray-600"
                        label={
                          <div className="tw-flex tw-flex-row md:tw-gap-64 tw-mb-2">
                            <p className=" tw-text-sm md:tw-text-md tw-font-semibold">
                              SELECT BANK NAME
                            </p>
                            <p className="tw-text-blue-500 tw-text-xs md:tw-text-sm tw-font-medium">
                              View available payment modes
                            </p>
                          </div>
                        }
                        name="bankName"
                      >
                        <option value="">Bank Name</option>
                        <option value="HDFC">HDFC</option>
                        <option value="ICICI">ICICI</option>
                        <option value="Axis">Axis</option>
                        <option value="More">More</option>
                      </MySelect>

                      <div>
                        <p className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mt-6 tw-mb-2">
                          CHOOSE PAYMENT MODE
                        </p>

                        <FormControl component="tw-fieldset">
                          <Field
                            row
                            name="payment"
                            label="payment"
                            component={RadioGroup}
                          >
                            <FormControlLabel
                              value="netbanking"
                              control={<Radio />}
                              label="Netbanking"
                            />

                            <FormControlLabel
                              value="upi"
                              control={<Radio />}
                              label="UPI"
                            />
                          </Field>

                          <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-8">
                            <ErrorMessage name="payment" />{" "}
                          </div>
                        </FormControl>
                      </div>

                      <label
                        htmlFor="accountNumber"
                        className="tw-font-semibold tw-text-gray-800  tw-text-lg"
                      >
                        ACCOUNT NUMBER{" "}
                        <span className="tw-text-sm tw-text-gray-600 tw-font-normal">
                          (Should be in the name of FD applicant)
                        </span>
                      </label>

                      <div>
                        <Field
                          name="accountNumber"
                          type="text"
                          className="tw-border-b-2 tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-outline-none tw-w-full tw-mt-3 "
                        />{" "}
                      </div>
                      <div className="tw-text-red-500 tw-text-sm tw-font-semibold  tw-mb-8">
                        <ErrorMessage name="accountNumber" />{" "}
                      </div>

                      <label
                        htmlFor="ifsc"
                        className="tw-font-semibold tw-text-gray-800 tw-text-lg"
                      >
                        IFSC
                      </label>

                      <div>
                        <Field
                          name="ifsc"
                          type="text"
                          className="tw-border-b-2 tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-outline-none tw-mt-3 "
                        />{" "}
                      </div>
                      <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-4">
                        <ErrorMessage name="ifsc" />{" "}
                      </div>

                      <p className="tw-text-justify tw-text-gray-700 tw-mb-8">
                        In case of any mismatch in bank account number/ account
                        holder name from where FD funds are received, refund
                        shall be processed in 7 working days without any
                        interest
                      </p>

                      <button
                        type="submit"
                        className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-2 tw-px-14 tw-text-xl tw-rounded-md tw-font-bold tw-mt-4 md:tw-ml-48"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Invest_home;
