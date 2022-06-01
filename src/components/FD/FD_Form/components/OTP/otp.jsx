import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Countdown from "react-countdown";

//image
import lock from "../../assets/lock.png";
import { Link } from "react-router-dom";

const renderer = ({ hours, minutes, seconds, completed }) => {
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

const Otp_code = () => {
  function myFunction() {
    window.location.href = "/form/kyc";
  }
  return (
    <>
      <div className="tw-w-full tw-flex tw-flex-col tw-items-center">
        <div className="tw-mt-10 tw-mb-5">
          <img src={lock} />
        </div>

        <h1 className="tw-font-semibold md:tw-text-2xl tw-text-xl tw-mb-3">
          Enter One Time Password(OTP)
        </h1>

        <p className="tw-text-lg tw-mb-3 tw-text-nishblue-400 tw-text-center md:tw-text-justify">
          Please enter the OTP received on mobile 93xxxxxxxx
        </p>

        <h1 className="tw-font-semibold md:tw-text-xl tw-text-lg tw-text-center">
          Entered a wrong Number?
          <span className="tw-text-nishyellow-400 tw-font-normal tw-ml-2">
            Change here
          </span>
        </h1>
      </div>

      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .min(5, "Must be 5 characters")
            .max(5, "Must be 5 characters")
            .matches("[0-9]{5}", "OTP contains only numbers")
            .required("Required"),
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
        <Form className="tw-p-4 tw-m-2 tw-w-full ">
          {/* <label htmlFor="otp" className="text-nishblue-400 font-semibold text-2xl "></label> */}
          <div>
            <Field
              name="otp"
              type="text"
              className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-black md:tw-w-3/4 tw-w-4/5 tw-ml-6 tw-pl-2 tw-mb-3 tw-mt-4 md:tw-mt-8 md:tw-ml-20 tw-outline-none"
            />{" "}
          </div>
          <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-text-center">
            <ErrorMessage name="otp" />{" "}
          </div>

          <div className="tw-w-full tw-flex tw-flex-col tw-items-center">
            <p className="tw-text-nishblue-400 tw-text-lg ">
              Resend OTP in:{" "}
              <span className="tw-text-nishyellow-400 tw-font-light">
                <Countdown date={Date.now() + 299000} renderer={renderer} />
              </span>
            </p>

            <p className="tw-mt-8 tw-font-semibold tw-text-center">
              By validating OTP I accept all the T&C
            </p>

            <button
              type="submit"
              className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-2 tw-px-14 tw-rounded-lg tw-font-bold tw-mt-6"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Otp_code;
