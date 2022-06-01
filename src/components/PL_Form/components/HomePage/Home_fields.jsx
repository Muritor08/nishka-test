import React, { useState } from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import moment from "moment";
import Axios from "axios";

// import { addData, data } from "../../../../store";

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

const Home_fields = () => {
	// function myFunction() {
	// 	window.location.href = "/PLForm/otp";
	// }
	const history = useHistory();

	return (
		<>
			<Formik
				initialValues={{
					title: "Mr",
					FirstName: "",
					MiddleName: "",
					LastName: "",
					Current_City: "",
					Mobile: "",
					acceptedTerms: true, // added for our checkbox
					authorize: true,
				}}
				validationSchema={Yup.object({
					title: Yup.string()
						.oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
						.required("Please select a title"),
					FirstName: Yup.string()
						.required("Please enter your First Name")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter valid First name"),
					MiddleName: Yup.string()
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter valid Middle name"),
					LastName: Yup.string()
						.required("Please enter your Last Name")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter valid Last name"),
					Current_City: Yup.string()
						.required("Please enter your city")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter valid city"),
					Mobile: Yup.string()
						.min(10, "Must be 10 characters")
						.max(10, "Must be 10 characters")
						.matches("[0-9]{10}", "Mobile number only contains numbers")
						.required("Please enter your mobile number"),
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf([true], "You must accept the terms and conditions."),
					authorize: Yup.boolean()
						.required("Required")
						.oneOf([true], "You must accept the terms and conditions."),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(async () => {
						const Name = `${values.FirstName} ${values.MiddleName} ${values.LastName}`;

						const spinner = document.getElementById("cover-spin");
						spinner.style.display = "block";

						const details = {
							...values,
							Name: Name,
						};
						localStorage.setItem("home", JSON.stringify(details));

						const data = await fetch(
							"https://dev.contechit.com:8000/sendmessage",
							{
								method: "POST",
								headers: {
									"content-type": "Application/json",
									Accept: "Application/json",
								},
								body: JSON.stringify({
									Mobile: values.Mobile,
								}),
							}
						);
						console.log(data);
						history.push("/PLForm/verify/otp", { Mobile: values.Mobile });

						setSubmitting(false);
						spinner.style.display = "none";
					}, 400);
				}}
			>
				<Form className="md:tw-ml-8 tw-p-4 md:tw-m-2 tw-text-left tw-w-full">
					<div id="cover-spin"></div>
					<div className="tw-flex tw-items-center tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="title"
							as="select"
							className="tw-border tw-border-solid tw-h-12 tw-text-gray-600 lg:tw-pl-3 xl:tw-pl-0 tw-border-gray-400 tw-outline-none tw-p-0"
						>
							<option value="Mr">Mr.</option>
							<option value="Ms">Ms.</option>
							<option value="Mrs">Mrs.</option>
						</Field>
						<Field
							name="FirstName"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-4/5 md:tw-w-3/4 lg:tw-w-2/3 xl:tw-w-3/4 tw-outline-none"
							//placeholder="First Name as per PAN"
						/>{" "}
						<label class="placeholder-text  tw-ml-10">
							<div class="text">First Name as per PAN</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="FirstName" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="MiddleName"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							//placeholder="Middle Name as per PAN"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Middle Name as per PAN</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="MiddleName" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="LastName"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							// placeholder="Last Name as per PAN"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Last Name as per PAN</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="LastName" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Current_City"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							// placeholder="City"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">City</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Current_City" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Mobile"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full md:tw-w-5/6 tw-outline-none"
							// placeholder="Enter your 10-digit Mobile Number"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">10-digit Mobile Number</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8  tw-mb-16 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Mobile" />{" "}
					</div>

					<div className="tw-mt-8 tw-w-full tw-text-justify tw-p-2">
						<MyCheckbox name="authorize">
							<span className="tw-pl-2">
								By entering your personal details, you hereby authorize Bajaj
								Finance Ltd and or its service provider(s) to contact you and
								you agree to the terms and conditions{" "}
							</span>
						</MyCheckbox>
					</div>

					<div className="tw-w-full tw-text-justify tw-p-2">
						<MyCheckbox name="acceptedTerms">
							<span className="tw-pl-2">
								By submitting this information/application I am accepting{" "}
								<span className="tw-text-nishyellow-400 tw-font-medium">
									Terms and conditions/ Disclaimer/ User Declaration{" "}
								</span>{" "}
								of company
							</span>
						</MyCheckbox>
					</div>

					<button
						type="submit"
						className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-rounded-lg tw-font-bold tw-mt-8"
					>
						Generate OTP
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default Home_fields;
