import React from "react";
import { useField, Formik, Form, Field, ErrorMessage } from "formik";
import { RadioGroup } from "formik-material-ui";
import { AiFillStar } from "react-icons/ai";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import * as Yup from "yup";
import { FormControl, Radio, FormControlLabel, Slider } from "@mui/material";

//image
import submitted from "../../assets/submitted.png";
import step2 from "../../assets/step2_sal.png";
// import step1mob from "../../assets/step1mob.png";

const Submitted = (props) => {
	const applicationNumber = props.location.state.applicationNumber;

	return (
		<>
			<div className="tw-hidden md:tw-block tw-w-full tw-px-8 tw-pt-8">
				<img src={step2} className="tw-mx-auto tw-w-full" />
			</div>

			{/* <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step1mob} className="tw-mx-auto tw-w-full" />
      </div> */}

			<div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
				<div className=" tw-h-auto tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
					<div className="tw-p-6 md:tw-p-0 tw-text-center">
						<div className="tw-hidden tw-justify-center tw-my-14 lg:tw-block">
							<img
								src={submitted}
								className=" tw-hidden lg:tw-block tw-m-auto tw-my-auto"
							/>
						</div>
						<div className="tw-text-3xl tw-font-bold tw-mt-4">
							<p>Your application has been submitted</p>
						</div>
						<div className="tw-text-2xl tw-text-medium">
							<p>REFERENCE ID: {applicationNumber} </p>
						</div>
						<div className="tw-text-lg tw-text-gray-700">
							<p>
								Please keep this reference ID handy for future correspondence
							</p>
						</div>
						<div className="tw-text-lg tw--mt-4 tw-text-gray-700">
							<p>Our representative will contact you shortly.</p>
						</div>
						<div className="tw-text-lg tw--mt-4 tw-text-gray-700">
							<p>
								If you need to reach us for anything else, please write us at
								wecare@bajajfinserv.in
							</p>
						</div>
						<div className=" md:tw-w-80 tw-justify-center tw-mx-auto tw-text-sm tw-h-max tw-border-2 tw-p-2 tw-my-8 tw-border-solid tw-rounded-md tw-border-nishblue-400 tw-text-center">
							<p>
								IMPORTANT UPDATE: Due to the ongoing Corona Virus (COVID-19)
								situation, and to ensure the safety and health of our customers
								and employees, there may be a delay in servicing your personal
								loan application. We appreciate your patience.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Submitted;

