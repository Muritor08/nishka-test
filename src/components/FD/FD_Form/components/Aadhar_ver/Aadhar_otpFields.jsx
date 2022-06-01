import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Aadhar_otpFields = () => {
  function myFunction() {
    window.location.href = "/form/adhaarrecord";
  }

  return (
    <>
      <div className=" tw-h-auto tw-m-4 lg:tw-ml-14 tw-mt-16 tw-mb-20 tw-p-6 tw-rounded-lg tw-shadow-lg">
        <h1 className="tw-mb-6 tw-text-left tw-font-bold tw-text-2xl">
          Aadhaar offline verification
        </h1>

        <hr className="tw-mb-4 tw-border-5 tw-border-gray-300" />

        <Formik
          initialValues={{
            otp: "",
            shareCode: "",
          }}
          validationSchema={Yup.object({
            otp: Yup.string()
              .min(6, "Must be 6 characters")
              .max(6, "Must be 6 characters")
              .matches("[0-9]{6}", "OTP contains only numbers")
              .required("Required"),
            shareCode: Yup.string()
              .min(4, "Must be 4 characters")
              .max(4, "Must be 4 characters")
              .matches("[0-9]{4}", "Share Code contains only numbers")
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
          <Form className="tw-w-full tw-text-left">
            <label
              htmlFor="otp"
              className="tw-font-medium tw-text-left tw-text-gray-800 tw-text-xl"
            >
              Enter OTP
            </label>
            <div>
              <Field
                name="otp"
                type="text"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-4 tw-outline-none"
              />{" "}
            </div>
            <div className="tw-text-red-500 tw-text-left tw-text-sm tw-font-semibold tw-mb-8">
              <ErrorMessage name="otp" />{" "}
            </div>

            <label
              htmlFor="shareCode"
              className="tw-font-medium tw-text-left tw-text-gray-800 tw-text-xl"
            >
              Share Code
            </label>

            <h1 className=" tw-text-gray-800 tw-text-justify tw-mt-6 tw-text-sm">
              Create a Share Code of 4 Characters to secure your Paperless
              Offliine eKYC. It is important for Aadhaar Number holder to
              remember this Share Code as it will be required to unlock the ZIP
              file.
            </h1>

            <div>
              <Field
                name="shareCode"
                type="text"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-4 tw-outline-none"
              />{" "}
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
              <ErrorMessage name="shareCode" />{" "}
            </div>

            <button
              type="submit"
              className="tw-border-blue-500 tw-bg-blue-500 tw-text-white lg:tw-ml-48 tw-text-lg tw-p-2 tw-px-16 tw-mt-10 tw-mb-6 tw-rounded-md tw-font-semibold"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Aadhar_otpFields;
