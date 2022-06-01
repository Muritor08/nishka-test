import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tablebg from "../assets/tabblebg.png";
import bajajfin from "../assets/bajajfinserv.png";
import shriram from "../assets/shriram.png";
import HDFC from "../assets/HDFC.png";
import SBI from "../assets/sbi.png";
import PAS from "../assets/pas.png";
import ICICI from "../assets/icici.png";
import CANARA from "../assets/canara.png";
import AXIS from "../assets/axis.png";
import KOTAK from "../assets/kotak.png";
import YES from "../assets/yes.png";
import BOB from "../assets/bob.png";
import IDBI from "../assets/idbi.png";
import IDFC from "../assets/idfc.png";
import ColorSwitches from "./tableswitch";
import "./differentiator.css";

import { current_year } from "../FD_rates";

const BankList = () => {
	const regular = [
		{
			id: "1",
			name: "Shriram Transport Finance",
			bk: "NBFC",
			r_fd: "7.90% p.a.",
			s_fd: "8.40% p.a.",
			returns: "Rs.7,900",
			img: shriram,
			route:
				"https://cos.stfc.in/cos/affiliate/cos_schemedetails.aspx?Affiliatecode=DEBMUM054&SubAffiliatecode=FQ653",
		},
		{
			id: "2",
			name: "Bajaj Finance Ltd.",
			bk: "NBFC",
			r_fd: "7.20% p.a.",
			s_fd: "7.45% p.a.",
			returns: "Rs.7,200",
			img: bajajfin,
			route: "/FixedDeposits/bajaj",
		},
		{
			id: "3",
			name: "SBI",
			bk: "Bank",
			r_fd: "5.40% p.a.",
			s_fd: "6.20% p.a.",
			returns: "Rs.5,510",
			img: SBI,
			// route: "/bajaj"
		},
		{
			id: "4",
			name: "HDFC",
			bk: "Bank",
			r_fd: "5.50% p.a.",
			s_fd: "6.25% p.a.",
			returns: "Rs.5,614",
			img: HDFC,
			// route: "/bajaj"
		},
		{
			id: "5",
			name: "Punjab and Sind Bank",
			bk: "Bank",
			r_fd: "5.30% p.a.",
			s_fd: "5.80% p.a.",
			returns: "Rs.5,406",
			img: PAS,
			// route: "/bajaj"
		},
		{
			id: "6",
			name: "ICICI",
			bk: "Bank",
			r_fd: "5.50% p.a.",
			s_fd: "6.30% p.a.",
			returns: "Rs.5,614",
			img: ICICI,
			// route: "/bajaj"
		},
		{
			id: "7",
			name: "Canara Bank",
			bk: "Bank",
			r_fd: "5.25% p.a.",
			s_fd: "5.75% p.a.",
			returns: "Rs.5,354",
			img: CANARA,
			// route: "/bajaj"
		},
		{
			id: "8",
			name: "Axis Bank",
			bk: "Bank",
			r_fd: "5.75% p.a.",
			s_fd: "6.50% p.a.",
			returns: "Rs.5,875",
			img: AXIS,
			// route: "/bajaj"
		},
		{
			id: "9",
			name: "Kotak Mahindra Bank",
			bk: "Bank",
			r_fd: "5.30% p.a.",
			s_fd: "5.80% p.a.",
			returns: "Rs.5,406",
			img: KOTAK,
			// route: "/bajaj"
		},
		{
			id: "10",
			name: "Yes Bank",
			bk: "Bank",
			r_fd: "6.25% p.a.",
			s_fd: "7.0% p.a.",
			returns: "Rs.6,398",
			img: YES,
			// route: "/bajaj"
		},
		{
			id: "11",
			name: "Bank of Baroda",
			bk: "Bank",
			r_fd: "5.25% p.a.",
			s_fd: "6.25% p.a.",
			returns: "Rs.5,354",
			img: BOB,
			// route: "/bajaj"
		},
		{
			id: "12",
			name: "IDBI Bank",
			bk: "Bank",
			r_fd: "5.25% p.a.",
			s_fd: "5.75% p.a.",
			returns: "Rs.5,354",
			img: IDBI,
			// route: "/bajaj"
		},
		{
			id: "13",
			name: "IDFC Bank",
			bk: "Bank",
			r_fd: "6.00% p.a.",
			s_fd: "6.50% p.a.",
			returns: "Rs.6,660",
			img: IDFC,
			// route: "/bajaj"
		},
	];

	const senior = [
		{
			id: "1",
			name: "Shriram Transport Finance",
			bk: "NBFC",
			r_fd: "7.90% p.a.",
			s_fd: "8.40% p.a.",
			returns: "Rs.8,400",
			img: shriram,
			route: "/FixedDeposits/shriram",
		},
		{
			id: "2",
			name: "Bajaj Finserv",
			bk: "NBFC",
			r_fd: "7.25%",
			s_fd: "7.45%",
			returns: "Rs.7,450",
			img: bajajfin,
			// route: "/bajaj"
		},
		{
			id: "3",
			name: "SBI",
			bk: "Bank",
			r_fd: "5.40%",
			s_fd: "6.20%",
			returns: "Rs.6,346",
			img: SBI,
			// route: "/bajaj"
		},
		{
			id: "4",
			name: "HDFC",
			bk: "Bank",
			r_fd: "5.50%",
			s_fd: "6.25%",
			returns: "Rs.6,398",
			img: HDFC,
			// route: "/bajaj"
		},
		{
			id: "5",
			name: "Punjab and Sind Bank",
			bk: "Bank",
			r_fd: "5.30%",
			s_fd: "5.80%",
			returns: "Rs.5,927",
			img: PAS,
			// route: "/bajaj"
		},
		{
			id: "6",
			name: "ICICI",
			bk: "Bank",
			r_fd: "5.50%",
			s_fd: "6.30%",
			returns: "Rs.6,450",
			img: ICICI,
			// route: "/bajaj"
		},
		{
			id: "7",
			name: "Canara Bank",
			bk: "Bank",
			r_fd: "5.25%",
			s_fd: "5.75%",
			returns: "Rs.5,875",
			img: CANARA,
			// route: "/bajaj"
		},
		{
			id: "8",
			name: "Axis Bank",
			bk: "Bank",
			r_fd: "5.75%",
			s_fd: "6.50%",
			returns: "Rs.6,660",
			img: AXIS,
			// route: "/bajaj"
		},
		{
			id: "9",
			name: "Kotak Mahindra Bank",
			bk: "Bank",
			r_fd: "5.30%",
			s_fd: "5.80%",
			returns: "Rs.5,927",
			img: KOTAK,
			// route: "/bajaj"
		},
		{
			id: "10",
			name: "Yes Bank",
			bk: "Bank",
			r_fd: "6.25%",
			s_fd: "7.0%",
			returns: "Rs.7,186",
			img: YES,
			// route: "/bajaj"
		},
		{
			id: "11",
			name: "Bank of Baroda",
			bk: "Bank",
			r_fd: "5.25%",
			s_fd: "6.25%",
			returns: "Rs.6,398",
			img: BOB,
			// route: "/bajaj"
		},
		{
			id: "12",
			name: "IDBI Bank",
			bk: "Bank",
			r_fd: "5.25%",
			s_fd: "5.75%",
			returns: "Rs.5,875",
			img: IDBI,
			// route: "/bajaj"
		},
		{
			id: "13",
			name: "IDFC Bank",
			bk: "Bank",
			r_fd: "6.00%",
			s_fd: "6.50%",
			returns: "Rs.6,660",
			img: IDFC,
			// route: "/bajaj"
		},
	];

	const [initial_returns, setNewReturns] = useState(regular);

	useEffect(() => {
		console.log(initial_returns);
	}, [initial_returns]);

	const handleChange = () => {
		setNewReturns((users) =>
			users.map((user, index) => {
				const getUserDataFromList2 = senior.filter(({ id }) => id == user.id);

				return {
					...user,
					returns:
						user.returns === regular[index].returns
							? getUserDataFromList2[0].returns
							: regular[index].returns,
				};
			})
		);
	};

	return (
		<>
			<div className="tw-p-2">
				<div className="tw-hidden md:tw-block">
					<div className="tw-m-3 tw-border-black tw-rounded-xl tw-w-full md:tw-w-4/6 tw-mx-auto">
						<h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-bold tw-pt-16 tw-mb-8 lg:tw-px-0 md:tw-px-16 tw-text-left md:tw-pl-4 tw-pl-4">
							Best FD Rates in India {current_year}
						</h1>
						<p className="lg:tw-ml-0 tw-text-left tw-mb-8 md:tw-ml-20 tw-mb-4 tw-ml-4 tw-text-sm">
							*Estimated Annual Returns on Rs.1 Lakh Investment
						</p>
						<div className="tw-bg-nishblue-400 tw-font-bold tw-text-white tw-h-auto tw-p-4 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
							<div className="tw-flex tw-flex-row  md:tw-pl-8 lg:tw-pl-32 tw-flex-start tw-items-center md:tw-gap-6 lg:tw-gap-0 lg:tw-text-md md:tw-text-sm tw-text-xs">
								<div className="tw-text-left tw-w-1/4">Name</div>
								{/* <div className="tw-w-1/5">Bank/NBFC</div> */}
								<div className="tw-w-1/4">
									Regular <br /> FD Rates
								</div>
								<div className="tw-w-1/4">
									Senior Citizen's <br /> FD Rates
								</div>
								<div id="switchOn" className="tw-w-1/4">
									Annual Returns*
									<br />
									<div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center lg:tw-ml-12 md:tw-ml-6">
										<span className="md:tw-text-sm tw-text-xs tw-font-light">
											For Senior Citizen
										</span>
										<ColorSwitches handleChange={handleChange} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="md:tw-hidden">
					<div className="tw-m-3 tw-border-black tw-rounded-xl tw-w-full md:tw-w-5/6 tw-mx-auto">
						<h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-bold tw-pt-16 tw-mb-8 lg:tw-px-0 md:tw-px-16 tw-text-left md:tw-pl-4 tw-pl-4">
							Best FD Rates in India {current_year}
						</h1>
						<p className="lg:tw-ml-0 tw-text-left tw-mb-8 md:tw-ml-20 tw-mb-4 tw-ml-4 tw-text-sm">
							*Estimated Annual Returns on Rs.1 Lakh Investment
						</p>
						<div className="tw-bg-nishblue-400 tw-text-white tw-font-bold tw-h-auto tw-p-4 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
							<div className="tw-flex tw-flex-row tw-gap-6 tw-flex-start tw-items-center tw-text-xs">
								<div className="tw-w-1/5">Name</div>
								{/* <div className="tw-w-1/5">Bank/<br />NBFC</div> */}
								<div className="tw-w-1/5">
									Regular <br /> FD Rates
								</div>
								<div className="tw-w-1/5">
									Senior Citizen's <br /> FD Rates
								</div>
								<div className=" tw-w-1/5 tw--ml-2">
									Annual Returns*
									<br />
									<div className=" tw-flex tw-flex-col tw-items-center">
										<span className="tw-text-xs tw-font-light">
											For Senior Citizen
										</span>
										<span className="tw-w-4 tw--ml-12 ">
											<ColorSwitches handleChange={handleChange} />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					{initial_returns.map((rest) => {
						return <Bank rest={rest}></Bank>;
					})}
				</div>

				<p className="tw-text-center tw-mt-10 tw-mb-20 tw-font-bold">
					*Estimated Annual Returns on Rs.1 Lakh Investment
				</p>
			</div>
		</>
	);
};

const Bank = (props) => {
	const { name, bk, r_fd, s_fd, returns, img, route } = props.rest;

	return (
		<>
			{!route ? (
				<div className="tw-hidden md:tw-block">
					<div
						style={{
							background: `url(${img})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "left",
							backgroundSize: "98%",
						}}
						className="tw-m-3 tw-border-black tw-rounded-xl tw-w-full md:tw-w-4/6 tw-mx-auto"
					>
						<div className="tw-bg-transparent md:tw-h-18 tw-h-20 tw-p-4 tw-border-4 tw-border-solid tw-rounded-xl tw-border-nishblue-100 tw-w-full">
							<div className="tw-flex tw-flex-row  md:tw-pl-8 lg:tw-pl-32 tw-flex-start md:tw-gap-6 lg:tw-gap-0 lg:tw-text-md md:tw-text-sm tw-text-xs">
								<div className="tw-text-left tw-w-1/4">{name}</div>
								{/* <div className="tw-w-1/5">{bk}</div> */}
								<div className="tw-font-semibold tw-w-1/4">{r_fd}</div>
								<div className="tw-font-semibold tw-w-1/4">{s_fd}</div>
								<div id="switchOn" className="tw-font-semibold tw-w-1/4">
									{returns}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="tw-hidden md:tw-block">
					<a
						style={{ textDecoration: "none" }}
						className="tw-ring-black tw-text-black"
						href={`${route}`}
					>
						<div
							style={{
								background: `url(${img})`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "left",
								backgroundSize: "120%",
							}}
							className="tw-m-3 tw-border-black tw-shadow-3xl raise tw-rounded-xl tw-w-full md:tw-w-4/6 tw-mx-auto"
						>
							<div className="tw-bg-transparent  md:tw-h-24 lg:tw-h-18 tw-h-20 tw-p-4 tw-border-4 tw-border-solid tw-rounded-xl tw-border-nishblue-400 tw-w-full">
								<div className="tw-flex tw-flex-row  md:tw-pl-8 lg:tw-pl-32 tw-flex-start md:tw-gap-6 lg:tw-gap-0 lg:tw-text-md md:tw-text-sm tw-text-xs">
									<div className="tw-text-left tw-w-1/4 tw-flex tw-flex-col">
										<span>{name}</span>
										<span className="tw-text-sm md:tw-text-xs lg:tw-text-sm tw-bg-nishblue-400 tw-rounded-md tw-w-2/3 md:tw-w-full lg:tw-w-2/3 tw-text-center tw-p-0.5 tw-text-white tw-mt-1 ">
											Deposit Now
										</span>
									</div>
									{/* <div className="tw-w-1/5">{bk}</div> */}
									<div className="tw-font-semibold tw-w-1/4">{r_fd}</div>
									<div className="tw-font-semibold tw-w-1/4">{s_fd}</div>
									<div id="switchOn" className="tw-font-semibold tw-w-1/4">
										{returns}
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			)}

			{!route ? (
				<div className="md:tw-hidden">
					<addEventListener
						style={{ textDecoration: "none" }}
						className="tw-ring-black tw-text-black"
						href={`${route}`}
					>
						<div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-xl tw-w-full md:tw-w-5/6 tw-mx-auto">
							<div className="tw-border-solid tw-border-nishblue-100 tw-border-4 tw-bg-transparent tw-h-24 tw-p-4 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
								<div className="tw-flex tw-flex-row tw-gap-6 tw-flex-start tw-items-center tw-text-xs">
									<div className=" tw-w-1/5">{name}</div>
									{/* <div className="tw-w-1/5">{bk}</div> */}
									<div className="tw-font-semibold tw-w-1/5">{r_fd}</div>
									<div className="tw-font-semibold tw-w-1/5">{s_fd}</div>
									<div id="switchOn" className="tw-font-semibold tw-w-1/5">
										{returns}
									</div>
								</div>
							</div>
						</div>
					</addEventListener>
				</div>
			) : (
				<div className="md:tw-hidden">
					<a
						style={{ textDecoration: "none" }}
						className="tw-ring-black tw-text-black"
						href={`${route}`}
					>
						<div className="tw-m-3 tw-border-black tw-shadow-5xl tw-rounded-xl tw-w-full md:tw-w-5/6 tw-mx-auto">
							<div className="tw-flex tw-flex-col">
								<div className="tw-border-solid tw-border-nishblue-400 tw-border-4 tw-bg-transparent tw-h-24 tw-p-4 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
									<div className="tw-flex tw-flex-row tw-gap-6 tw-flex-start tw-items-center tw-text-xs">
										<div className=" tw-w-1/5">{name}</div>
										{/* <div className="tw-w-1/5">{bk}</div> */}
										<div className="tw-font-semibold tw-w-1/5">{r_fd}</div>
										<div className="tw-font-semibold tw-w-1/5">{s_fd}</div>
										<div id="switchOn" className="tw-font-semibold tw-w-1/5">
											{returns}
										</div>
									</div>
								</div>
								<div className="tw-text-xs tw-w-full tw-bg-nishblue-400 tw-rounded-md tw-p-0.5 tw-text-white">
									Deposit Now
								</div>
							</div>
						</div>
					</a>
				</div>
			)}
		</>
	);
};

export default BankList;
