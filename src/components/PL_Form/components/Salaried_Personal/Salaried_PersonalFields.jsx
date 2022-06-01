import React, { useState, useEffect } from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

import "../index.css";
const Salaried_PersonalFields = () => {
	// function myFunction() {
	// 	window.location.href = "/PLForm/submitted";
	// }

	useEffect(() => {});

	const history = useHistory();

	return (
		<>
			<Formik
				initialValues={{
					email: "",
					DesignationOTP: "",
					Qualification: "",
					institution: "",
					Current_experiance_in_Month: "",
					Current_experiance_in_Years: "",
					Total_Work_Experience_Yrs: "",
					Total_Work_Experience_Months: "",
					Office_Pin_Code: "",
					Office_Landline_Number1: "",
					Office_Address_1st_Line: "",
					Office_Address_2nd_Line: "",
					location: "",
					Bank_Name: "",
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email format")
						.required("Please enter your office email"),
					DesignationOTP: Yup.string()
						// .oneOf(["abc", "def", "xyz"], "Please select a valid designation")
						.required("Please select a designation"),
					Qualification: Yup.string()
						// .oneOf(["abc", "def", "xyz"], "Please select a valid qualification")
						.required("Please select a qualification"),
					institution: Yup.string()
						// .oneOf(["abc", "def", "xyz"], "Please select a valid institute")
						.required("Please enter an institute"),
					Current_experiance_in_Month: Yup.string()
						.min(1, "Must be 1 characters")
						.matches("[0-9]", "Please enter only numbers")
						.required("Please enter your experience in months"),
					Current_experiance_in_Years: Yup.string()
						.min(1, "Must be 1 characters")
						.matches("[0-9]", "Please enter only numbers")
						.required("Please enter your experience in years"),
					Total_Work_Experience_Yrs: Yup.string()
						.min(6, "Must be 6 characters")
						.min(1, "Must be 1 characters")
						.matches("[0-9]", "Please enter only numbers")
						.required("Please enter your experience in years"),
					Total_Work_Experience_Months: Yup.string()
						.min(6, "Must be 6 characters")
						.min(1, "Must be 1 characters")
						.matches("[0-9]", "Please enter only numbers")
						.required("Please enter your experience in months"),
					Office_Pin_Code: Yup.string()
						.min(6, "Must be 6 characters")
						.max(6, "Must be 6 characters")
						.matches("[0-9]{6}", "Pincode only contains numbers")
						.required("Please enter your pincode"),
					Office_Landline_Number1: Yup.string()
						.min(10, "Must be 10 characters")
						.max(10, "Must be 10 characters")
						.matches("[0-9]{10}", "Phone number only contains numbers")
						.required("Please enter your work phone number"),
					Office_Address_1st_Line: Yup.string().required(
						"Please enter your office address"
					),
					Office_Address_2nd_Line: Yup.string().required(
						"Please enter your office address"
					),
					location: Yup.string()
						.required("Please enter your Locality")
						.max(25, "Must be 25 characters or less")
						.matches(/^[A-Za-z ]*$/, "Please enter a valid location"),
					Bank_Name: Yup.string()
						// .oneOf(["abc", "def", "xyz"], "Please select a valid bank")
						.required("Please select a bank"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(async () => {
						const home = JSON.parse(localStorage.getItem("home"));
						const empType = JSON.parse(localStorage.getItem("empType"));
						const userAllDetails = {
							...values,
							...home,
							...empType,
						};
						console.log(userAllDetails);
						const spinner = document.getElementById("cover-spin");
						spinner.style.display = "block";

						const userDetails = {
							email: userAllDetails.email,
							DesignationOTP: userAllDetails.DesignationOTP,
							Qualification: userAllDetails.Qualification,
							institution: userAllDetails.institution,
							Current_experiance_in_Month:
								userAllDetails.Current_experiance_in_Month,
							Current_experiance_in_Years:
								userAllDetails.Current_experiance_in_Years,
							Total_Work_Experience_Yrs:
								userAllDetails.Total_Work_Experience_Yrs,
							Total_Work_Experience_Months:
								userAllDetails.Total_Work_Experience_Months,
							Office_Pin_Code: userAllDetails.Office_Pin_Code,
							Office_Landline_Number1: userAllDetails.Office_Landline_Number1,
							Office_Address_1st_Line: userAllDetails.Office_Address_1st_Line,
							Office_Address_2nd_Line: userAllDetails.Office_Address_2nd_Line,
							location: userAllDetails.location,
							Bank_Name: userAllDetails.Bank_Name,
							title: userAllDetails.title,
							FirstName: userAllDetails.FirstName,
							LastName: userAllDetails.LastName,
							MiddleName: userAllDetails.MiddleName,
							Name: userAllDetails.Name,
							Current_City: userAllDetails.Current_City,
							Mobile: userAllDetails.Mobile,
							acceptedTerms: userAllDetails.acceptedTerms,
							authorize: userAllDetails.authorize,
							Office_City: userAllDetails.Office_City,
							Date_of_Birth: userAllDetails.Date_of_Birth,
							salary: userAllDetails.salary,
							Employer: userAllDetails.Employer,
							PANNumber: userAllDetails.PANNumber,
							Current_PinCode: userAllDetails.Current_PinCode,
							Current_Residence_Address1:
								userAllDetails.Current_Residence_Address1,
							Current_Residence_Address2:
								userAllDetails.Current_Residence_Address2,
							Current_Residence_Address3:
								userAllDetails.Current_Residence_Address3,
							emi: userAllDetails.emi,
							Current_Email_Id: userAllDetails.Current_Email_Id,
						};

						const abcd = {
							Bank_Name: "Axis Bank",
							Current_City: "elkgbnlkrkw",
							Current_Email_Id: "mangalapentavinaykumarreddy30@gmail.com",
							Current_PinCode: "517417",
							Current_Residence_Address1: "PASAMVARIPALLI",
							Current_Residence_Address2: "PENCHUPADU",
							Current_Residence_Address3: "renigunta",
							Current_experiance_in_Month: "3",
							Current_experiance_in_Years: "4",
							Date_of_Birth: "1992-06-20",
							DesignationOTP: "INCHARGE",
							Employer: "vinay",
							FirstName: "sanlgrgrgknlwk",
							LastName: "rlgnlrwedfewekg",
							MiddleName: "egnlkwr",
							Mobile: "8688969330",
							Name: "sanlgknlwk egnlkwr rlgnlrwkg",
							Office_Address_1st_Line: "PASAMVARIPALLI",
							Office_Address_2nd_Line: "PENCHUPADU",
							Office_City: "MADANAPALLE",
							Office_Landline_Number1: "8688969330",
							Office_Pin_Code: "517417",
							PANNumber: "DRTYY1232V",
							Qualification: "Post Graduate",
							Total_Work_Experience_Months: "3",
							Total_Work_Experience_Yrs: "3",
							acceptedTerms: true,
							authorize: true,
							email: "mangalapentavinaykumarreddy30@gmail.com",
							emi: "11",
							institution: "def",
							location: "Rayachoty",
							salary: "12",
							title: "Mr",
						};
						const response = await fetch(
							"https://dev.contechit.com:8000/createLoanApplication",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Accept: "application/json",
								},
								body: JSON.stringify(userDetails),
							}
						);

						const data = await response.json();

						console.log(data);

						// setLoading(false);
						spinner.style.display = "none";
						history.push("/PLForm/submittedSL", {
							applicationNumber: data["Loan Application Number"],
						});

						// })
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form className="md:tw-ml-8 tw-p-4 md:tw-m-2 tw-text-left tw-w-full">
					<div id="cover-spin"></div>
					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="email"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>
						<label class="placeholder-text">
							<div class="text">Office Email Id</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="email" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="DesignationOTP"
							as="select"
							style={{ color: "black" }}
							className="tw-border tw-text-gray-500 tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						>
							{" "}
							<option value="">Select </option>
							<option value="Asst. Teacher/Teacher">
								Asst. Teacher/Teacher
							</option>
							<option value="Asst Manager">Asst Manager</option>
							<option value="Clerk">Clerk</option>
							<option value="Director">Director</option>
							<option value="Executive">Executive</option>
							<option value="Manager">Manager</option>
							<option value="Vice President">Vice President</option>
							<option value="Senior Manager">Senior Manager</option>
							<option value="Software Engineer">Software Engineer</option>
							<option value="Lead">Lead</option>
							<option value="Consultant">Consultant</option>
							<option value="Analyst">Analyst</option>
							<option value="ASSOCIATE">Officer</option>
							<option value="Specialist">Specialist</option>
							<option value="Head of Department">Head of Department</option>
							<option value="CXO/President">CXO/President</option>
							<option value="Architect">Architect</option>
							<option value="INCHARGE">INCHARGE</option>
							<option value="HR/Admin-Manager">HR/Admin-Manager</option>
							<option value="HR/Admin-Sr.Manager">HR/Admin-Sr.Manager</option>
							<option value="HR/Admin-AVP/VP">HR/Admin-AVP/VP</option>
							<option value="HR/Admin-CXO">HR/Admin-CXO</option>
							<option value="HR/Admin-Others">HR/Admin-Others</option>
						</Field>
						<label class="placeholder-text">
							<div class="text">Designation Work</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="DesignationOTP" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Qualification"
							as="select"
							style={{ color: "black" }}
							className="tw-border tw-border-solid tw-text-gray-500 tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						>
							{" "}
							<option value="">Select </option>
							<option value="Graduate">Graduate</option>
							<option value="Post Graduate">Post Graduate</option>
							<option value="Others">Others</option>
							<option value="Professionally Qualified">
								Professionally Qualified
							</option>
						</Field>{" "}
						<label class="placeholder-text">
							<div class="text">Highest Qualification</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Qualification" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="institution"
							// as="select"
							type="text"
							style={{ color: "black" }}
							className="tw-border tw-border-solid tw-text-gray-500 tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>{" "}
						{/* <option value="">Select</option>
							<option value="abc">abc</option>
							<option value="def">def</option>
							<option value="xyz">xyz</option> */}
						{/* </Field>{" "} */}
						<label class="placeholder-text">
							<div class="text">Institute Name</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="institution" />{" "}
					</div>

					<label className="tw-ml-8 tw-mt-8 tw-font-semibold tw-text-gray-600">
						Current Work Experience
					</label>
					<div className="tw-flex tw-ml-8 tw-mt-2">
						<div>
							<div className="input-contain">
								<Field
									name="Current_experiance_in_Years"
									type="text"
									className="tw-border tw-border-solid tw-h-12 tw-pl-2 tw-border-gray-400 tw-w-full tw-outline-none"
									placeholder=""
								/>{" "}
								<label class="placeholder-text">
									<div class="text">Years</div>
								</label>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-w-3/4 tw-font-semibold">
								<ErrorMessage name="Current_experiance_in_Years" />{" "}
							</div>
						</div>
						<div className="tw--ml-9">
							<div className="input-contain">
								<Field
									name="Current_experiance_in_Month"
									type="text"
									className="tw-border tw-border-solid tw-h-12 tw-pl-2 tw-border-gray-400 tw-w-full tw-outline-none"
								/>{" "}
								<label class="placeholder-text">
									<div class="text">Months</div>
								</label>
							</div>
							<div className="tw-text-red-500 tw-ml-6 tw-w-3/4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="Current_experiance_in_Month" />{" "}
							</div>
						</div>
					</div>

					<label className="tw-ml-8 tw-mt-8 tw-font-semibold tw-text-gray-600">
						Total Work Experience
					</label>
					<div className="tw-flex tw-ml-8 tw-mt-2">
						<div>
							<div className="input-contain">
								<Field
									name="Total_Work_Experience_Yrs"
									type="text"
									className="tw-border tw-border-solid tw-h-12 tw-pl-2 tw-border-gray-400 tw-w-full tw-outline-none"
								/>{" "}
								<label class="placeholder-text">
									<div class="text">Years</div>
								</label>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-w-3/4 tw-font-semibold">
								<ErrorMessage name="Total_Work_Experience_Yrs" />{" "}
							</div>
						</div>
						<div className="tw--ml-9">
							<div className="input-contain">
								<Field
									name="Total_Work_Experience_Months"
									type="text"
									className="tw-border tw-border-solid tw-h-12 tw-pl-2 tw-border-gray-400 tw-w-full tw-outline-none"
								/>{" "}
								<label class="placeholder-text">
									<div class="text">Months</div>
								</label>
							</div>
							<div className="tw-text-red-500 tw-w-3/4 tw-ml-6 tw-text-sm tw-font-semibold">
								<ErrorMessage name="Total_Work_Experience_Months" />{" "}
							</div>
						</div>
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Office_Pin_Code"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Office Location Pincode</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Office_Pin_Code" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Office_Landline_Number1"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Work Phone no.</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Office_Landline_Number1" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Office_Address_1st_Line"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Office Address Line 1</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Office_Address_1st_Line" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Office_Address_2nd_Line"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Office Address Line 2</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="Office_Address_2nd_Line" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="location"
							type="text"
							className="tw-border tw-border-solid tw-h-12 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
							placeholder=""
						/>{" "}
						<label class="placeholder-text">
							<div class="text">Area/Locality</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-font-semibold">
						<ErrorMessage name="location" />{" "}
					</div>

					<div className="tw-ml-8 tw-mt-8 input-contain">
						<Field
							name="Bank_Name"
							as="select"
							style={{ color: "black" }}
							className="tw-border tw-border-solid tw-h-12 tw-text-gray-500 tw-pl-3 tw-border-gray-400 tw-w-full xl:tw-w-5/6 tw-outline-none"
						>
							{" "}
							<option value="">Select</option>
							<option value="HDFC Bank">HDFC Bank</option>
							<option value="ICICI Bank">ICICI Bank</option>
							<option value="State Bank of India">State Bank of India</option>
							<option value="Axis Bank">Axis Bank</option>
							<option value="IDBI Bank">IDBI Bank</option>
							<option value="Other Bank">Other Bank</option>
						</Field>
						<label class="placeholder-text">
							<div class="text">Bank Name</div>
						</label>
					</div>
					<div className="tw-text-red-500 tw-ml-8 tw-text-sm tw-mb-14 tw-font-semibold">
						<ErrorMessage name="Bank_Name" />{" "}
					</div>

					<div className="tw-mb-16 tw-mt-6 tw-ml-14">
						<Link to={"/PLForm/calc"}>
							<button className=" tw-border-nishyellow-400 tw-text-nishyellow-400 tw-bg-white tw-mr-8 tw-py-1 tw-px-8 tw-rounded-sm tw-font-medium tw-mt-6">
								Back
							</button>
						</Link>
						<button
							type="submit"
							className="tw-border-nishyellow-400 tw-text-white tw-bg-nishyellow-400 tw-py-1 tw-px-3 tw-rounded-sm tw-font-medium tw-mt-6"
						>
							Submit
						</button>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default Salaried_PersonalFields;
