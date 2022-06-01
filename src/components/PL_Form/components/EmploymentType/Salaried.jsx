import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import { GoCheck } from "react-icons/go";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

const Salaried = () => {
	function myFunction() {
		window.location.href = "/PLForm/calc";
	}

	return (
		<>
			<Formik
				initialValues={{
					Office_City: "",
					Date_of_Birth: "",
					salary: "",
					Employer: "",
					PANNumber: "",
					Current_PinCode: "",
					Current_Residence_Address1: "",
					Current_Residence_Address2: "",
					Current_Residence_Address3: "",
					emi: "",
					Current_Email_Id: "",
				}}
				validationSchema={Yup.object({
					Office_City: Yup.string()
						.required("Please enter your city")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter valid city"),
					Date_of_Birth: Yup.string()
						.required("DOB is Required")

						.test("DOB", "Please choose a valid date of birth", (value) => {
							return moment().diff(moment(value), "years") >= 18;
						}),

					salary: Yup.string()
						.matches("[0-9]", "Salary only contains numbers")
						.required("Please Enter your Salary amount"),
					Employer: Yup.string()
						.required("Please enter your Full Name")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter a valid name"),
					PANNumber: Yup.string()
						.min(10, "Must be 10 characters")
						.max(10, "Must be 10 characters")
						.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}", "Please enter a valid PAN")
						.required("Please enter your PAN"),
					Current_PinCode: Yup.string()
						.min(6, "Must be 6 characters")
						.max(6, "Must be 6 characters")
						.matches("[0-9]{6}", "Pincode only contains numbers")
						.required("Please enter your pincode"),
					Current_Residence_Address1: Yup.string().required(
						"Please enter your address"
					),
					Current_Residence_Address2: Yup.string().required(
						"Please enter your address"
					),
					Current_Residence_Address3: Yup.string().required(
						"Please enter your address"
					),
					emi: Yup.string()
						.required("Please Enter the EMI")
						.matches("[0-9]", "EMI only contains numbers"),
					Current_Email_Id: Yup.string()
						.email("Invalid email format")
						.required("Please enter your personal email"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log(values);
						localStorage.setItem("empType", JSON.stringify(values));
						myFunction();
						//Backend API connect
						// Axios.post("http://localhost:8000/Employment_Salaried", {
						// 	Office_City: values.Office_City,
						// 	Date_of_Birth: values.Date_of_Birth,
						// 	salary: values.salary,
						// 	Employer: values.Employer,
						// 	PANNumber: values.PANNumber,
						// 	Current_PinCode: values.Current_PinCode,
						// 	Current_Residence_Address1: values.Current_Residence_Address1,
						// 	Current_Residence_Address2: values.Current_Residence_Address2,
						// 	Current_Residence_Address3: values.Current_Residence_Address3,
						// 	emi: values.emi,
						// 	Current_Email_Id: values.Current_Email_Id,
						// }).then(() => {
						// 	console.log("success");
						// });
						// alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form className="md:tw-ml-8 tw-p-4 md:tw-m-2 tw-text-left tw-w-full">
					<div className=" tw-flex tw-ml-8 tw-mt-8 tw-w-full items-center input-contain">
						<Field
							name="Office_City"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-w-4/5 md:tw-w-3/4 lg:tw-w-2/3 xl:tw-w-3/4 tw-border-gray-400 tw-border-r-0 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">City</div>
						</label>
						<span className="tw-border tw-border-solid tw-h-12 tw-pl-2 md:tw-pl-0 lg:tw-pl-6 xl:tw-pl-3 tw-border-gray-400 items-center tw-text-green-600 tw-pr-1.5 tw-pt-1.5 tw-border-l-0 tw-outline-none">
							{" "}
							<GoCheck />{" "}
						</span>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Office_City" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain" id="date-container">
						<Field
							name="Date_of_Birth"
							type="date"
							id="date"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							max="2004-12-31"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Date Of Birth</div>
						</label>
					</div>

					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Date_of_Birth" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="salary"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Monthly Take Home Salary</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="salary" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Employer"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Employer Name</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Employer" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="PANNumber"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							placeholder=""
						/>{" "}
						<label class="placeholder-text">
							<div class="text">PAN</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="PANNumber" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Current_PinCode"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Residence PIN Code</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Current_PinCode" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain ">
						<Field
							name="Current_Residence_Address1"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Current Residence Address 1</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Current_Residence_Address1" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Current_Residence_Address2"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Current Residence Address 2</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Current_Residence_Address2" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Current_Residence_Address3"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Current Residence Address 3</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Current_Residence_Address3" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="emi"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Existing Monthly EMI's</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="emi" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Current_Email_Id"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Personal Email ID</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold tw-mb-14">
						<ErrorMessage name="Current_Email_Id" />{" "}
					</div>

					<button
						type="submit"
						className="tw-border-nishyellow-400 tw-px-10 tw-ml-8 tw-bg-nishyellow-400 tw-p-3 tw-rounded-lg tw-font-bold tw-mt-6"
					>
						Get Offer
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default Salaried;
