import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCheckCircle, FaLock } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { Link } from "react-router-dom";

const Personal_details = () => {
  function myFunction() {
    window.location.href = "/form/investment";
  }

  //React hook for checkbox nominee address
  const [checkedNominee, setCheckedNominee] = useState(true);

  const handleChangeNominee = () => {
    setCheckedNominee(!checkedNominee);
  };

  //React hook for checkbox communication address
  const [checkedComm, setCheckedComm] = useState(true);

  const handleChangeComm = () => {
    setCheckedComm(!checkedComm);
  };

  //React hook for checkbox nominee details
  const [checkedNomDetails, setCheckedNomDetails] = useState(true);

  const handleChangeNomDetails = () => {
    setCheckedNomDetails(!checkedNomDetails);
  };

  return (
    <>
      <div className="tw-ml-8 lg:tw-ml-20 tw-p-4 tw-text-left tw-m-2 tw-w-full tw-flex tw-flex-col">
        <span className=" tw-flex tw-items-center tw-gap-2 tw-text-left tw-text-lg tw-text-gray-600 tw-font-semibold">
          <p>Personal Details</p>
          <FaCheckCircle className="tw-text-green-500" />
        </span>

        <Formik
          initialValues={{
            custId: "XXXXXXXXX",
            title: "",
            fullName: "",
            mobNumber: "",
            email: "",
            dob: "",
            pan: "",
            address: "",
            zipcode: "",
            // commDetails: true,
            comaddress: "",
            comzipcode: "",
            // nomineeDetails: true,
            nomtitle: "",
            nomfullName: "",
            nomdob: "",
            nomrel: "",
            // nomineeAddress: true,
            nomaddress: "",
            nomzipcode: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
              .required("Please select a title"),
            fullName: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Enter your full name."),
            mobNumber: Yup.string()
              .min(10, "Must be 10 characters")
              .max(10, "Must be 10 characters")
              .required("A Phone Number is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("An Email Address is required"),
            dob: Yup.date().required("A Date of Birth is required"),
            pan: Yup.string()
              .min(10, "Must be 10 characters")
              .max(10, "Must be 10 characters")
              .matches("[A-Z]{5}[0-9]{4}[A-Z]{1}")
              .required("A PAN number is required"),
            address: Yup.string().required("An Address is required"),
            zipcode: Yup.string()
              .min(6, "Must be 6 characters")
              .max(6, "Must be 6 characters")
              .required("A Pin Code is required"),
            // commDetails: Yup.boolean.oneOf([true, false]),
            comaddress:
              // Yup.string().when("commDetails", {
              //   is: (commDetails) => commDetails === false,
              //   then:
              Yup.string().required("An Address is required"),
            // })
            comzipcode:
              // Yup.string().when("commDetails", {
              //   is: (commDetails) => commDetails === false,
              //   then:
              Yup.string()
                .min(6, "Must be 6 characters")
                .max(6, "Must be 6 characters")
                .required("A Pin Code is required"),
            // })
            // nomineeDetails: Yup.boolean.oneOf([true, false]),
            nomtitle:
              // Yup.string().when("nomineeDetails", {
              //   is: (nomineeDetails) => nomineeDetails === true,
              //   then:
              Yup.string()
                .oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
                .required("Please select a title"),
            // })
            nomfullName:
              // Yup.string().when("nomineeDetails", {
              //   is: (nomineeDetails) => nomineeDetails === true,
              //   then:
              Yup.string()
                .max(30, "Must be 30 characters or less")
                .required("Enter your full name."),
            // })
            nomdob:
              // Yup.string().when("nomineeDetails", {
              //   is: (nomineeDetails) => nomineeDetails === true,
              //   then:
              Yup.date().required("A Date of Birth is required"),
            // })
            nomrel:
              //  Yup.string().when("nomineeDetails", {
              //   is: (nomineeDetails) => nomineeDetails === true,
              //   then:
              Yup.string()
                .oneOf(["Father", "Mother", "Relative"], "Please select a relationship")
                .required("Please select a relationship"),
            // })
            // nomineeAddress: Yup.boolean.oneOf([true, false]),
            nomaddress:
              // Yup.string().when("nomineeAddress", {
              //   is: (nomineeAddress) => nomineeAddress === false,
              //   then:
              Yup.string().required("An Address is required"),
            // })
            nomzipcode: Yup.string()
              // .when("nomineeAddress", {
              //   is: (nomineeAddress) => nomineeAddress === false,
              //   then: Yup.string()
              .min(6, "Must be 6 characters")
              .max(6, "Must be 6 characters")
              .required("A Pin Code is required"),
            // })
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              myFunction();
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="tw-w-full ">
            <label
              htmlFor="custId"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              CUSTOMER ID
            </label>
            <div>
              <Field
                disabled
                name="custId"
                type="text"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
              />{" "}
            </div>

            <label
              htmlFor="title"
              className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
            >
              TITLE
            </label>

            <div>
              <Field
                name="title"
                className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
                as="select"
              >
                <option value="">Select Title</option>
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                <option value="Mrs">Mrs.</option>
              </Field>{" "}
            </div>

            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="title" />{" "}
            </div>

            <label
              htmlFor="fullName"
              className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
            >
              FULL NAME
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="fullName"
                type="text"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <FaLock />{" "}
              </span>
              <span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="fullName" />{" "}
            </div>

            <label
              htmlFor="mobNumber"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              MOBILE NUMBER
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="mobNumber"
                type="number"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-black tw-pb-0.5 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <FaLock />{" "}
              </span><span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="mobNumber" />{" "}
            </div>

            <label
              htmlFor="email"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              EMAIL ADDRESS
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="email"
                type="email"
                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
              />{" "}
              <span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="email" />{" "}
            </div>

            <label
              htmlFor="dob"
              className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
            >
              DATE OF BIRTH
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="dob"
                type="date"
                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-4">
                {" "}
                <FaLock />{" "}
              </span>
              <span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-4">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="dob" />{" "}
            </div>

            <label
              htmlFor="pan"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              PAN
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="pan"
                type="text"
                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-black tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <FaLock />{" "}
              </span>
              <span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="pan" />{" "}
            </div>

            <label
              htmlFor="address"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              ADDRESS
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="address"
                type="text"
                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <FaLock />{" "}
              </span>
              <span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="address" />{" "}
            </div>

            <label
              htmlFor="zipcode"
              className="tw-font-bold tw-text-gray-800 tw-text-md"
            >
              PIN CODE
            </label>
            <div className="tw-flex tw-items-center tw-w-3/4">
              <Field
                name="zipcode"
                type="number"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-outline-none tw-w-full tw-mt-2 tw-mb-4"
              />{" "}
              <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <FaLock />{" "}
              </span>
              <span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
                {" "}
                <GoCheck />{" "}
              </span>
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="zipcode" />{" "}
            </div>

            <div>
              <div className="tw-flex tw-w-3/4 tw-mt-8 tw-gap-2 tw-items-center">
                <label htmlFor="commDetails">
                  <Field
                    type="checkbox"
                    id="commDetails"
                    checked={checkedComm}
                    onChange={handleChangeComm}
                    name="toggle"
                  />
                </label>
                <p className="tw-text-md tw-font-semibold tw-text-gray-600">
                  My communication address is same as permanent address
                </p>
              </div>

              {!checkedComm && (
                <>
                  <div className="tw-mt-6">
                    <label
                      htmlFor="comaddress"
                      className="tw-font-bold tw-text-gray-800 tw-text-md"
                    >
                      COMMUNICATION ADDRESS
                    </label>
                    <br />
                    <Field
                      name="comaddress"
                      type="text"
                      className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
                    />{" "}
                  </div>
                  <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                    <ErrorMessage name="comaddress" />{" "}
                  </div>

                  <div>
                    <label
                      htmlFor="comzipcode"
                      className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
                    >
                      COMMUNICATION PIN CODE
                    </label>
                    <br />
                    <Field
                      name="comzipcode"
                      type="text"
                      className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
                    />{" "}
                  </div>
                  <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                    <ErrorMessage name="comzipcode" />{" "}
                  </div>
                </>
              )}
            </div>

            <div className="tw-flex tw-w-full tw-text-justify tw-gap-2 tw-mt-8">
              <label htmlFor="detailsCopy">
                <Field type="checkbox" id="detailsCopy" name="toggle" />
              </label>
              <p className=" tw-w-3/4 tw-text-md tw-font-semibold tw-text-gray-600">
                You will receive a digital copy of Fixed Deposit Reciept (FDR)
                on your email ID and mobile number. However, if you wish to
                recieve a physical copy then select Yes
              </p>
            </div>

            <div>
              <div className="tw-flex tw-gap-2 tw-mt-8 tw-items-center">
                <label htmlFor="nomineeDetails">
                  <Field
                    type="checkbox"
                    id="nomineeDetails"
                    checked={checkedNomDetails}
                    onChange={handleChangeNomDetails}
                    name="toggle"
                  />
                </label>
                <p className="tw-text-md tw-font-semibold tw-text-gray-600">
                  Do you wish to add a nominee?
                </p>
              </div>

              {checkedNomDetails && (
                <>
                  <div className="tw-w-full tw-flex tw-flex-col tw-mt-8">
                    <p className="tw-mb-8 tw-font-semibold tw-text-4xl lg:tw--ml-12">
                      Nominee Details
                    </p>
                    <div className="tw-w-2/6">
                      <label
                        htmlFor="nomtitle"
                        className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
                      >
                        TITLE
                      </label>
                      <div>
                        <Field
                          name="nomtitle"
                          className="tw-my-select tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
                          as="select"
                        >
                          <option value="">Select Title</option>
                          <option value="Mr">Mr.</option>
                          <option value="Ms">Ms.</option>
                          <option value="Mrs">Mrs.</option>
                        </Field>{" "}
                      </div>
                      <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                        <ErrorMessage name="nomtitle" />{" "}
                      </div>
                    </div>

                    <div className="tw-flex tw-justify-between tw-w-3/4 tw-mt-4 tw-flex-row">
                      <div className="tw-w-2/5">
                        <label
                          htmlFor="nomfullName"
                          className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
                        >
                          NOMINEE FULL NAME
                        </label>
                        <div>
                          <Field
                            name="nomfullName"
                            type="text"
                            className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="nomfullName" />{" "}
                        </div>
                      </div>
                      <div className="tw-w-2/5">
                        <label
                          htmlFor="nomdob"
                          className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
                        >
                          NOMINEE DATE OF BIRTH
                        </label>
                        <div>
                          <Field
                            name="nomdob"
                            type="date"
                            className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
                          />{" "}
                        </div>
                        <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                          <ErrorMessage name="nomdob" />{" "}
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <label
                        htmlFor="nomrel"
                        className="tw-font-bold tw-text-gray-800 tw-mt-3 md:tw-text-md tw-text-sm"
                      >
                        RELATIONSHIP WITH NOMINEE
                      </label>
                      <div>
                        <Field
                          name="nomrel"
                          className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-b-2 tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
                          as="select"
                        >
                          <option value="">Select Relationship</option>
                          <option value="Father">Father</option>
                          <option value="Mother">Mother</option>
                          <option value="Relative">Relative</option>
                        </Field>{" "}
                      </div>
                      <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                        <ErrorMessage name="nomrel" />{" "}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <div className="tw-flex tw-w-3/4 tw-mt-8 tw-gap-2 tw-items-center">
                <label htmlFor="nomineeAddress">
                  <Field
                    type="checkbox"
                    id="nomineeAddress"
                    checked={checkedNominee}
                    onChange={handleChangeNominee}
                    name="toggle"
                  />
                </label>
                <p className="tw-text-md tw-font-semibold tw-text-gray-600">
                  Nominee address is same as Primary Applicant's address
                </p>
              </div>

              {!checkedNominee && (
                <>
                  <div className="tw-mt-6">
                    <label
                      htmlFor="nomaddress"
                      className="tw-font-bold tw-text-gray-800 tw-text-md"
                    >
                      NOMINEE ADDRESS
                    </label>
                    <br />
                    <Field
                      name="nomaddress"
                      type="text"
                      className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
                    />{" "}
                  </div>
                  <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                    <ErrorMessage name="nomaddress" />{" "}
                  </div>

                  <div>
                    <label
                      htmlFor="nomzipcode"
                      className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
                    >
                      NOMINEE PIN CODE
                    </label>
                    <br />
                    <Field
                      name="nomzipcode"
                      type="text"
                      className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
                    />{" "}
                  </div>
                  <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                    <ErrorMessage name="nomzipcode" />{" "}
                  </div>
                </>
              )}
            </div>

            <div className="tw-w-3/4 tw-mt-4 tw-text-center">
              <button
                type="submit"
                className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Personal_details;
