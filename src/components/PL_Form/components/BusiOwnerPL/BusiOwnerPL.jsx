import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

//image
import bo from "../../assets/BusiOwner_PL.png";
import bi from "../../assets/Busiinfo.png";
import step1 from "../../assets/step1st.png";
import step1mob from "../../assets/bo_step1mob.png";

//components
// import BusiOwnerPL_Fields from "./BusiOwnerPL_Fields";
// import BusiInfo_Fields from "./BusiInfo_Fields";

const BusiOwner_PL = () => {
  function myFunction() {
    window.location.href = "/PLForm/submitted";
  }

  return (
    <>
      <div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
        <img src={step1} className="tw-mx-auto tw-w-full" />
      </div>

      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step1mob} className="tw-mx-auto tw-w-full" />
      </div>

      <Formik
        initialValues={{
          type: "",
          sales: "",
          years: "",
          type1: "",
          PANNumber: "",
          fullName: "",
          Mobile: "",
          Current_PinCode: "",
          Current_Email_Id: "",
          Date_of_Birth: "",
        }}
        validationSchema={Yup.object({
          type: Yup.string()
            .oneOf(["Trading", "Manufacturing", "Service"], "Please select a valid type")
            .required("Please select a type"),
          sales: Yup.string()
            .oneOf(["Less than Rs.50 lakh", "Rs.50 lakh to Rs.99.99 lakh", "Rs.1 crore to Rs.2.99 crore","Rs.3 crore to Rs.4.99 crore","Rs.5 crore or higher"], "Please select valid sales")
            .required("Please select sales"),
          years: Yup.string()
            .oneOf(["abc", "def", "xyz"], "Please select valid years")
            .required("Please select years"),
          type1: Yup.string()
            .oneOf(["Salaried", "Self-Employed"], "Please select a valid type")
            .required("Please select a type"),
          PANNumber: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters")
            .matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", "Please enter a valid PAN")
            .required("Please enter your Pan Number"),
          fullName: Yup.string()
            .required("Please enter your Full Name")
            .max(25, "Must be 25 characters or less")
            .matches(/^[A-Za-z ]*$/, "Please enter a valid name"),
          Mobile: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters")
            .matches("[0-9]{10}", "Mobile number only contains numbers")
            .required("Please enter your mobile number"),
          Current_PinCode: Yup.string()
            .min(6, "Must be 6 characters")
            .max(6, "Must be 6 characters")
            .matches("[0-9]{6}", "Pincode only contains numbers")
            .required("Please enter residential pincode"),
          Current_Email_Id: Yup.string()
            .email("Invalid email format")
            .required("Please enter your email"),
          Date_of_Birth: Yup.string()
            .required("DOB is Required")
            .test("DOB", "Please choose a valid date of birth", (value) => {
              return moment().diff(moment(value), "years") >= 18;
            }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(typeof (values.PANNumber));
          console.log(typeof (values.Date_of_Birth));
          Axios.post("http://localhost:8000/bOwnerPL", {
            type: values.type,
            sales: values.sales,
            years: values.years,
            type1: values.type1,
            PANNumber: values.PANNumber,
            fullName: values.fullName,
            mobileNumber: values.mobileNumber,
            Current_PinCode: values.Current_PinCode,
            Current_Email_Id: values.Current_Email_Id,
            Date_of_Birth: values.Date_of_Birth,
          }).then(() => {
            console.log("success");
          });
          setTimeout(() => {
            console.log(values);
            myFunction();
            //Backend API connect

            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full">
            <div className="tw-flex tw-flex-col tw-w-full md:tw-w-4/5">
              <div className="tw-border-nishblue-100 tw-w-full tw-p-4 md:tw-p-8">
                <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
                  <h1 className="tw-font-semibold tw-text-3xl lg:tw-text-5xl tw-m-4 tw--mb-4 tw-text-left md:tw-ml-10">
                    Personal Information
                  </h1>

                  <div className="tw-flex tw-w-4/5">
                    <div className="xl:tw-w-3/5 lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
                      <div className="md:tw-ml-8 tw-p-4 tw-m-2 tw-text-left tw-w-full">
                        <label className="tw-ml-8 tw-mt-12 tw-font-semibold">
                          SELECT EMPLOYMENT TYPE
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="type1"
                            as="select"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                          >
                            {" "}
                            <option value="">Select</option>
                            <option value="Salaried">Salaried</option>
                            <option value="Self-Employed">Self-Employed</option>
                          </Field>
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="type1" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          BUSINESS PAN CARD
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="PANNumber"
                            type="text"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="ABCDE1234A"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="PANNumber" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          FULL NAME
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="fullName"
                            type="text"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="Enter your full name"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="fullName" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          MOBILE NUMBER
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="Mobile"
                            type="text"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="99XXXXXXXX"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="Mobile" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          RESIDENTIAL PIN CODE
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="Current_PinCode"
                            type="text"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="400001"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="Current_PinCode" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          EMAIL ADDRESS
                        </label>
                        <div className="tw-ml-8 tw-mt-2 ">
                          <Field
                            name="Current_Email_Id"
                            type="text"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="example@gmail.com"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="Current_Email_Id" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-8 tw-font-semibold">
                          DATE OF BIRTH
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="Date_of_Birth"
                            type="date"
                            className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                            placeholder="Date Of Birth"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-mb-14 tw-font-semibold">
                          <ErrorMessage name="Date_of_Birth" />{" "}
                        </div>
                      </div>
                    </div>

                    <div className="tw-hidden lg:tw-block tw-w-1/3 tw-mx-auto lg:tw-w-2/5">
                      <img
                        src={bo}
                        className="tw-w-full tw-hidden lg:tw-block tw-mt-32 tw-ml-14 tw-my-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tw-border-nishblue-100 tw-w-full tw-p-4 md:tw-p-8">
                <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
                  <h1 className="tw-font-semibold tw-text-3xl lg:tw-text-5xl tw-m-4 tw--mb-4 tw-text-left md:tw-ml-10">
                    Business Information
                  </h1>

                  <div className="tw-flex tw-w-4/5">
                    <div className="xl:tw-w-3/5 lg:tw-w-1/2 tw-w-full tw-pr-6 md:tw-pr-12 lg:tw-pr-0">
                      <div className="md:tw-ml-8 tw-p-4 tw-m-2 tw-text-left tw-w-full">
                        <label className="tw-ml-8 tw-mt-12 tw-font-semibold">
                          TYPE OF BUSINESS{" "}
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="type"
                            as="select"
                            className="tw-border tw-border-solid tw-h-12 tw-text-gray-500 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                          >
                            {" "}
                            <option value="">Select</option>
                            <option value="Trading">Trading</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Service">Service</option>
                          </Field>
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="type" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-12 tw-font-semibold">
                          SALES FOR LAST 12 MONTHS{" "}
                        </label>
                        <div className="tw-ml-8 tw-mt-2">
                          <Field
                            name="sales"
                            as="select"
                            className="tw-border tw-border-solid tw-h-12 tw-text-gray-500 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                          >
                            {" "}
                            <option value="">Select</option>
                            <option value="Less than Rs.50 lakh">Less than Rs.50 lakh</option>
                            <option value="Rs.50 lakh to Rs.99.99 lakh">Rs.50 lakh to Rs.99.99 lakh</option>
                            <option value="Rs.1 crore to Rs.2.99 crore">Rs.1 crore to Rs.2.99 crore</option>
                            <option value="Rs.3 crore to Rs.4.99 crore">Rs.3 crore to Rs.4.99 crore</option>
                            <option value="Rs.5 crore or higher">Rs.5 crore or higher</option>
                          </Field>
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="sales" />{" "}
                        </div>

                        <label className="tw-ml-8 tw-mt-12 tw-font-semibold">
                          YEARS IN CURRENT BUSINESS
                        </label>
                        <div className="tw-ml-8 tw-mt-2 tw-mb-6">
                          <Field
                            name="years"
                            as="select"
                            className="tw-border tw-border-solid tw-h-12 tw-text-gray-500 tw-pl-3 tw-border-gray-400 tw-w-full lg:tw-w-5/6 tw-outline-none"
                          >
                            {" "}
                            <option value="">Select</option>
                            <option value="abc">abc</option>
                            <option value="def">def</option>
                            <option value="xyz">xyz</option>
                          </Field>
                        </div>
                        <div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="years" />{" "}
                        </div>
                      </div>
                    </div>

                    <div className="tw-hidden lg:tw-block tw-w-1/3 lg:tw-w-2/5 tw-mx-auto tw-mt-20">
                      <img
                        src={bi}
                        className="tw-w-full tw-hidden lg:tw-block tw-ml-14 tw-my-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-flex tw-flex-col tw-w-full md:tw-w-1/3">
              {/* Features And Benefits */}
              <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-6 md:tw-pt-8 tw-w-full">
                <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
                  <h1 className="tw-text-sm md:tw-text-md lg:tw-text-xl tw-text-black tw-text-left tw-font-bold tw-py-3 tw-px-4">
                    Features And Benefits
                  </h1>
                  <div className="tw-text-left tw-text-xs md:tw-text-sm">
                    <ul className="tw-ml-2 tw-list-disc">
                      <li>Hassle-free loans up to Rs.45 lakh</li>
                      <li>No collateral or guarantor</li>
                      <li>Flexi loan facility</li>
                      <li>Minimal documentation</li>
                      <li>Online account access</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Eligibility and documents */}
              <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-6 md:tw-pt-8 tw-w-full tw--mt-5">
                <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
                  <h1 className="tw-text-sm md:tw-text-md lg:tw-text-xl tw-text-black tw-text-left tw-font-bold tw-py-3 tw-px-4">
                    Eligibility and Documents
                  </h1>
                  <div className="tw-text-left tw-text-xs md:tw-text-sm">
                    <ul className="tw-ml-2 tw-list-disc">
                      <li>
                        Age: Between 24 to 70 years* (*Age should be 70 years at
                        loan maturity.)
                      </li>
                      <li>Business experience: 3 years</li>
                    </ul>
                    <p className="tw-ml-3">Documents needed</p>
                    <ul className="tw-ml-2 tw-list-disc">
                      <li>Recent passport-size photograph</li>
                      <li>KYC documents</li>
                      <li>Proof of business existence</li>
                      <li>Relevant financial documents</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fees and Charges */}
              <div className="tw-border-nishblue-100 tw-p-4 md:tw-p-6 md:tw-pt-8 tw-w-full tw--mt-5">
                <div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
                  <h1 className="tw-text-sm md:tw-text-md lg:tw-text-xl tw-text-black tw-text-left tw-font-bold tw-py-3 tw-px-4">
                    Fees and Charges
                  </h1>
                  <div className="tw-text-left tw-text-xs md:tw-text-sm">
                    <ul className="tw-ml-2 tw-list-disc">
                      <li>Interest rate: 17% p.a. onwards</li>
                      <li>Processing fees: Up to 2% of loan amount</li>
                      <li>Penal interest: 2% per month + taxes</li>
                      <li>
                        EMI bounce charges: Up to Rs.3,000 (inclusive of taxes)
                      </li>
                      <li>
                        Loan statement charges: Rs.50 (only for physical copy)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* submit button and terms and conditions */}
          <button
            type="submit"
            className="tw-border-nishyellow-400 tw-px-10 tw-mb-8 tw-bg-nishyellow-400 tw-p-3 tw-rounded-lg tw-font-bold tw-justify-items-center tw-mt-6"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default BusiOwner_PL;