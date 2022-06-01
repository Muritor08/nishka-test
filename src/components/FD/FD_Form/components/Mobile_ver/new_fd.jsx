import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import moment from "moment";
import Tool_tip from "../tooltip/Tooltip";

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const New_FD = () => {
  function myFunction() {
    window.location.href = "/form/otpverification";
  }

  return (
    <>
      <Formik
        initialValues={{
          mobileNumber: "",
          dob: "",
          pincode: "",
          acceptedTerms: true, // added for our checkbox
          authorize: true,
        }}
        validationSchema={Yup.object({
          mobileNumber: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters")
            .matches("[0-9]{10}", "Mobile number only contains numbers")
            .required("Required"),
          dob: Yup.string()
            .required("DOB is Required")
            .test("DOB", "Please choose a valid date of birth", (value) => {
              return moment().diff(moment(value), "years") >= 18;
            }),
          pincode: Yup.string()
            .min(6, "Must be 6 characters")
            .max(6, "Must be 6 characters")
            .matches("[0-9]{6}", "Pincode only contains numbers")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          authorize: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
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

        <Form className="md:tw-ml-8 tw-p-4 tw-m-2 tw-text-left tw-w-full">
          <label
            htmlFor="mobileNumber"
            className="tw-text-nishblue-400 tw-font-semibold tw-text-2xl"
          >
            Mobile Number
          </label>
          <div className="tw-flex tw-items-center">
            <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-font-semibold">
              +91
            </span>
            <Field
              name="mobileNumber"
              type="text"
              className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-pl-2 tw-outline-none"
            />{" "}
            <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid  tw-border-black tw-font-semibold tw-mb-4">
              {" "}
              <Tool_tip />{" "}
            </span>
          </div>
          <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
            <ErrorMessage name="mobileNumber" />{" "}
          </div>

          <p className="tw-text-nishyellow-400 tw-text-sm tw-font-medium tw-m-2 tw-ml-0 tw-mb-6">
            An OTP will be sent to this number for verification
          </p>

          <label
            htmlFor="dob"
            className="tw-text-nishblue-400 tw-font-semibold tw-text-2xl "
          >
            Date Of Birth
          </label>
          <div className="tw-flex">
            <Field
              name="dob"
              type="date"
              className=" tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-outline-none"
            />{" "}
            <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-font-semibold">
              {" "}
              <Tool_tip />{" "}
            </span>
          </div>
          <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
            <ErrorMessage name="dob" />{" "}
          </div>

          <p className="tw-text-nishyellow-400 tw-text-sm tw-font-medium tw-m-2 tw-ml-0 tw-mb-6">
            Enter Date of Birth as per PAN card
          </p>

          <label
            htmlFor="pincode"
            className="tw-text-nishblue-400 tw-font-semibold tw-text-2xl"
          >
            Pincode
          </label>
          <div className="tw-flex">
            <Field
              name="pincode"
              type="text"
              className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-outline-none"
            />{" "}
            <span className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid   tw-border-black tw-font-semibold">
              {" "}
              <Tool_tip />{" "}
            </span>
          </div>
          <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
            <ErrorMessage name="pincode" />{" "}
          </div>

          <p className="tw-text-nishyellow-400 tw-text-sm tw-font-medium tw-m-2 tw-ml-0">
            Enter pin code as per your current address
          </p>

          <div className="tw-mt-6 tw-w-full tw-text-justify tw-p-2">
            <MyCheckbox name="authorize">
              <span className="tw-pl-2">I authorise Nishkera to fetch my CKYC/offline Aadhaar KYC
                details available with CERSAI/UIDAI. I have gone through the
                financials and other statements / particulars / representations
                furnished / made by the company and after careful consideration
                I am making the deposit with the company at my own risk and
                volition. I also authorise Nsihkera representative to call/SMS
                towards this application. This consent overrides my registration
                for DNC.</span>
            </MyCheckbox>
          </div>

          <div className="tw-w-full tw-text-justify tw-p-2">
            <MyCheckbox name="acceptedTerms">
              <span className="tw-pl-2">By submitting this information/application I am accepting{" "}
                <span className="tw-text-nishyellow-400 tw-font-medium">
                  Terms and conditions/ Disclaimer/ User Declaration{" "}
                </span>{" "}
                of company
              </span>
            </MyCheckbox>
          </div>

          <button
            type="submit"
            className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-rounded-lg tw-font-bold tw-mt-6"
          >
            Generate OTP
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default New_FD;
