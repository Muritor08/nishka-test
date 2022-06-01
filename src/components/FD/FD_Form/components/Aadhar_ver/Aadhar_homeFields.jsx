import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//image
import refresh from "../../assets/refresh.png";
import captcha from "../../assets/captcha.png";
import { Link } from "react-router-dom";

const Aadhar_code = () => {
  function myFunction() {
    window.location.href = "/form/otpadhaar";
  }
  return (
    <>
      <div className=" tw-h-auto tw-m-4 md:tw-ml-14 md:tw-mt-16 tw-mb-20 tw-p-6 tw-rounded-lg tw-shadow-lg">
        <Formik
          initialValues={{
            aadharNumber: "",
            security: "",
          }}
          validationSchema={Yup.object({
            aadharNumber: Yup.string()
              .min(12, "Must be 12 characters")
              .max(12, "Must be 12 characters")
              .matches("[0-9]{12}", "Aadhaar number only contains numbers")
              .required("Required"),
            security: Yup.string()
              .min(6, "Must be 6 characters")
              .max(6, "Must be 6 characters")
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
          <Form className="w-full tw-text-left">
            <label
              htmlFor="aadharNumber"
              className="tw-font-medium tw-text-gray-800 tw-text-2xl"
            >
              Enter Aadhaar Number
            </label>
            <div>
              <Field
                name="aadharNumber"
                type="text"
                className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-3/4 tw-mt-4 tw-outline-none"
                placeholder="Enter Aadhaar Number"
              />{" "}
            </div>
            <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-8">
              <ErrorMessage name="aadharNumber" />{" "}
            </div>

            <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between">
              <div>
                <label
                  htmlFor="security"
                  className="tw-font-medium tw-text-gray-800 tw-text-2xl"
                >
                  Enter Security Code
                </label>
                <div>
                  <Field
                    name="security"
                    type="text"
                    className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-4 tw-outline-none"
                    placeholder="Enter Security Code"
                  />{" "}
                </div>
                <span className="tw-text-sm  tw-text-nishblue-600">Please enter the captcha code</span>
                <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                  <ErrorMessage name="security" />{" "}
                </div>
              </div>

              <div className="tw-flex tw-mr-8">
                <div className="tw-w-40">
                  <img src={captcha} className="tw-w-full" />
                </div>

                <div className="tw-w-14">
                  <img src={refresh} className="tw-w-full" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="tw-border-blue-500 tw-bg-blue-500 tw-text-white md:tw-ml-48 md:tw-text-lg tw-p-2 tw-px-16 tw-mt-14 tw-rounded-md tw-font-semibold tw-mt-6"
            >
              Send OTP
            </button>

            <p className=" tw-text-gray-900 tw-text-justify tw-mt-8">
              Disclaimer: Aadhaar Number at any stage will not get stored into
              BFL systems or other records. You'll be asked to input OTP shared
              by UIDAI to generate xml file
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Aadhar_code;
