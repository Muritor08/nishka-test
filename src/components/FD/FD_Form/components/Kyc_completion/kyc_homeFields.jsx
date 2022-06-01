import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RadioGroup } from "formik-material-ui";
import * as Yup from "yup";
import { FormControl, Radio, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import Tool_tip from "../tooltip/Tooltip";

const Kyc_code = () => {
  function myFunction() {
    window.location.href = "/form/aadharverification";
  }

  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div className="tw-text-left">
      <div className="tw-bg-pink-100 tw-p-3 md:tw-w-3/4 tw-w-5/6 tw-text-sm tw-mt-8 tw-mb-8">
        Your CKYC process was unsuccessful. You can proceed further by choosing
        any of the below option.
      </div>

      <p className="tw-font-semibold tw-text-md tw-mb-6">
        HOW DO YOU LIKE TO PROCEED FURTHER?
      </p>

      <Formik
        initialValues={{
          kyc: "aadhaar",
        }}
        validationSchema={Yup.object().shape({
          kyc: Yup.string().required("Required"),
        })}
      >
        <FormControl component="fieldset">
          <Field name="kyc" label="kyc" component={RadioGroup}>
            <FormControlLabel
              value="aadhaar"
              control={<Radio />}
              label={
                <div className="tw-flex md:tw-gap-48 tw-gap-5 tw-mb-2">
                  <div className="tw-flex md:tw-gap-2 ">
                    <p className="">Aadhaar verification process</p>
                    <p className="tw-bg-green-300 tw-p-1 tw-h-6 tw-text-xs tw-font-medium">
                      Fastest
                    </p>
                  </div>
                  <div className="tw-border-2 tw-border-gray-400 tw-h-6">
                    <h1 className="tw-text-xs tw-text-gray-500 tw-p-1 tw-h-full">
                      Docs
                    </h1>
                  </div>
                </div>
              }
            />

            <FormControlLabel
              value="kyc_doc"
              control={<Radio />}
              label={
                <div className="tw-flex md:tw-gap-60 tw-gap-20 tw-mt-2">
                  <div className="tw-flex tw-gap-2">
                    <p>By uploading KYC documents</p>
                  </div>
                  <div className="tw-border-2 tw-border-gray-400 tw-h-6">
                    <h1 className="tw-text-xs tw-text-gray-500 tw-p-1 tw-h-full">
                      Docs
                    </h1>
                  </div>
                </div>
              }
            />
          </Field>

          <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-8">
            <ErrorMessage name="kyc" />{" "}
          </div>
        </FormControl>
      </Formik>

      <button
        type="submit"
        className="tw-border-blue-500 tw-bg-blue-600 tw-text-white tw-text-lg tw-p-4 lg:tw-px-56 md:tw-px-60 tw-px-28 tw-mt-8 tw-rounded-sm tw-font-semibold"
      >
        PROCEED
      </button>
    </div>
  );

  function Hide() {
    var el = document.getElementById("hideme");
    el.style.display = "none";
  }

  return (
    <>
      <div className="md:tw-ml-12 tw-p-4 tw-m-2 tw-w-full tw-flex tw-flex-col tw-items-center">
        <h1 className="tw-font-medium md:tw-text-2xl tw-text-left tw-text-lg tw-mb-10 md:tw-mt-4 tw-text-gray-600">
          The below details will help us check your KIN/CKYCr no. available with
          CERSAI
        </h1>

        <Formik
          validateOnMount
          initialValues={{
            fullName: "",
            pan: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string()
              .max(50, "Must be 50 characters or less")
              .matches(/^[A-Za-z ]*$/, "Please enter valid name")
              .required("Please enter full name"),
            pan: Yup.string()
              .min(10, "Must be 10 characters")
              .max(10, "Must be 10 characters")
              .matches("[A-Z]{5}[0-9]{4}[A-Z]{1}","Please enter a valid PAN")
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
          {({ isValid }) => (
            <Form className="tw-w-full tw-text-left">
              <label
                htmlFor="fullName"
                className="tw-font-bold tw-text-gray-900 tw-text-lg"
              >
                FULL NAME
              </label>
              <div>
                <Field
                  name="fullName"
                  type="text"
                  className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black lg:tw-w-3/4 md:tw-w-5/6 tw-w-72 tw-mt-4 tw-outline-none"
                />{" "}
              </div>
              <div className="tw-text-red-500 tw-text-sm tw-font-semibold tw-mb-8">
                <ErrorMessage name="fullName" />{" "}
              </div>

              <label
                htmlFor="pan"
                className="tw-font-bold tw-text-gray-900 tw-text-lg tw-flex tw-items-center tw-justify-between lg:tw-w-3/4 md:tw-w-5/6 tw-w-72"
              >
                <div>PAN</div> <Tool_tip />
              </label>
              <div>
                <Field
                  name="pan"
                  type="text"
                  className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-black lg:tw-w-3/4 md:tw-w-5/6 tw-w-72 tw-mt-4 tw-outline-none"
                />{" "}
              </div>
              <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
                <ErrorMessage name="pan" />{" "}
              </div>

              {readMore && extraContent}

              <div
                className="tw-text-left tw-inline-block"
                disabled={!isValid}
                onClick={Hide}
              >
                <button
                  type="button"
                  disabled={!isValid}
                  id="hideme"
                  className="tw-border-blue-500 tw-bg-blue-600 tw-text-white tw-text-lg tw-p-4 lg:tw-px-56 md:tw-px-60 tw-px-28 tw-mt-8 tw-rounded-sm tw-font-semibold disabled:tw-opacity-60"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  PROCEED
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Kyc_code;
