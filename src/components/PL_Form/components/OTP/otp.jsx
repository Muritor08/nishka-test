import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Countdown from "react-countdown";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";
import "../index.css";

//image\

import lock from "../../assets/lock.png";

const Otp_code = (props) => {
	function myFunction() {
		window.location.href = "/PLForm/empType";
	}
	const [keyValue, setKeyValue] = useState(200000);

	useEffect(() => {});
	function resendOtp() {
		const mobile = props.mobile;
		// const spinner = document.getElementById("cover-spin");
		// spinner.style.display = "block";
		Axios.post("https://dev.contechit.com:8000/sendmessage", {
			Mobile: mobile,
		})
			.then(() => {
				alert("otp sent");
				console.log("success");
			})
			.catch((err) => {
				alert(err);
			});

		setKeyValue(keyValue + 100000);
	}

	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			return (
				<button
					className="tw-bg-white tw-border-none tw-text-nishyellow-400 hover:tw-text-blue-500 hover:tw-text-underline tw-text-lg tw-font-medium"
					type="button"
					onClick={resendOtp}
				>
					Send
				</button>
			);
		} else {
			// Render a countdown
			return (
				<span>
					{minutes}:{seconds}
				</span>
			);
		}
	};

	// const navigate = useNavigate();
	return (
		<>
			<div className="tw-w-full  tw-flex tw-flex-col tw-items-center">
				<div className="tw-mt-10 tw-mb-5">
					<img src={lock} />
				</div>
				<h1 className="tw-font-semibold md:tw-text-2xl tw-text-xl tw-mb-3">
					Enter One Time Password(OTP)
				</h1>
				<p className="tw-text-lg tw-mb-3 tw-text-nishblue-400 tw-text-center md:tw-text-justify">
					Please enter the OTP received on your mobile <b>{props.mobile}</b>.
				</p>
				<h1 className="tw-font-semibold md:tw-text-xl tw-text-lg tw-text-center">
					Entered a wrong Number?
					<Link to={"/PLForm/home"}>
						<span className="tw-text-nishyellow-400 tw-font-normal tw-ml-2">
							Change here
						</span>
					</Link>
				</h1>
			</div>
			<Formik
				initialValues={{
					otp: "",
				}}
				validationSchema={Yup.object({
					otp: Yup.string()
						.min(6, "Must be 6 characters")
						.max(6, "Must be 6 characters")
						.matches("[0-9]{6}", "OTP contains only numbers")
						.required("Required"),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(async () => {
						const spinner = document.getElementById("cover-spin");
						spinner.style.display = "block";
						//Backend API connect
						// Axios.post("http://localhost:8000/verifyOTP", {
						//   otp: values.otp,
						// }).then((response) => {
						//     if (response.status === 200){
						//       myFunction()
						//       console.log("redirected ")
						//     }else {
						//       console.log("otp is wrong ")
						//       alert("Wrong otp");
						//     }
						// });
						setSubmitting(false);
						const otp = {
							otp: values.otp,
							Mobile: props.mobile,
						};
						console.log(otp);
						// alert(JSON.stringify(values, null, 2));
						const response = await fetch(
							"https://dev.contechit.com:8000/verifyOTP",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Accept: "application/json",
								},
								body: JSON.stringify(otp),
							}
						);
						if (response.status === 200) {
							myFunction();
						} else {
							alert("Wrong OTP");
						}
						console.log(response);
						spinner.style.display = "none";
					}, 400);
				}}
			>
				<Form className="tw-p-4 tw-m-2 tw-w-full ">
					{/* <label htmlFor="otp" className="text-nishblue-400 font-semibold text-2xl "></label> */}
					<div id="cover-spin"></div>
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
								{keyValue && (
									<Countdown
										date={Date.now() + keyValue}
										key={keyValue}
										renderer={renderer}
									/>
								)}
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
