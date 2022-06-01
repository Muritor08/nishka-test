import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import moment from "moment";

const Business_owner = () => {

  return (
    <>
      <p className="tw-ml-12 tw-mt-8 tw-text-lg tw-font-semibold tw-text-justify tw-w-3/4 tw-m-6 ">
        Thank you for your interest in Bajaj Finserv. Please click on 'Proceed
        to be redirected to our easy online form for self-employed individuals
        and complete your application in minutes.
      </p>
      <Link to={"/PLForm/bOwnerPL"}>
        <button
          type="submit"
          className="tw-border-nishyellow-400 tw-px-10 tw-ml-20 tw-bg-nishyellow-400 tw-p-2 tw-rounded-lg tw-mb-6 tw-font-bold tw-mt-6"
        >
          Proceed
        </button>
      </Link>
    </>
  );
};

export default Business_owner;
