import React from "react";
// import { Link } from "react-router-dom";

// Imports
import bajajxpattern from "../../assets/3.png";
// import Tabs from "./tabs";
import TabsMd from "./tabsMd";
// import bajaj from "../../assets/bajaj.png";
import Header from "../../../Layout/Header";
import Footer from "../../../Layout/Footer";

const Hero = () => {
	return (
		<>
			<Header />
			{/* Background Box */}
			<div className="tw-h-max-content tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
				{/* Border Box  */}
				<div className="tw-border-nishblue-100 tw-p-4">
					<div className="tw-bg-transparent tw-flex tw-flex-col tw-flex-col-reverse md:tw-flex-row tw-gap-0 tw-justify-evenly tw-h-auto tw-p-0 tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
						{/* Left Div */}
						{/* Brand Logo */}
						<div className="tw-w-full tw-h-full tw-p-0 tw-m-0 tw-text-left">
							<img
								className=" tw-block lg:tw-hidden tw-rounded-bl-xl md:tw-rounded-bl-xl tw-w-full tw-h-full"
								src={bajajxpattern}
							/>
							<img
								className="tw-hidden lg:tw-block tw-rounded-bl-xl md:tw-rounded-bl-xl tw-h-full"
								src={bajajxpattern}
							/>
						</div>

						{/* Right Div */}
						{/* Table Container Starts */}
						<div className="tw-w-auto lg:tw-w-full tw-m-10 tw-my-auto">
							{/* Table Border Box */}
							<div className=" tw-flex tw-flex-col tw-mb-6 tw-gap-0 tw-mt-6 tw-border-2 tw-w-auto tw-h-auto lg:tw-h-80 xl:tw-h-72 tw-border-solid tw-border-nishblue-400 tw-rounded-xl ">
								{/* Table Top */}
								<div className="tw-w-full tw-rounded-t-lg tw-p-4 tw-border-b-0">
									<h1 className="tw-font-bold tw-text-lg md:tw-text-xl lg:tw-text-3xl tw-text-left xl:tw-text-4xl tw-mb-2">
										Bajaj Finance Personal Loan
									</h1>
									<p className="tw-text-xs md:tw-text-md lg:tw-text-lg xl:tw-text-xl tw-pt-2 tw-mb-1 tw-text-left">
										The loan comes with no hidden charges and 100% transparency,
										which make your overall borrowing experience seamless.
									</p>
								</div>

								{/* Table Bottom */}
								<div className="tw-h-full tw-flex tw-flex-row tw-justify-evenly tw-text-center tw-items-center tw-border-solid tw-border-nishblue-400 tw-border-t-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-rounded-b-lg">
									<div className="tw-h-full xl:tw-py-12 lg:tw-py-6 md:tw-py-4 tw-py-4 tw-font-normal tw-border-r-2 tw-border-solid tw-border-l-0 tw-border-t-0 tw-border-b-0 tw-border-nishblue-400">
										<p className="tw-text-xs md:tw-text-md lg:tw-text-lg xl:tw-text-xl tw-px-6">
											Rate of Interest <span className="tw-font-bold">13%</span>{" "}
											onwards
										</p>
									</div>
									<div className="tw-h-full xl:tw-py-12 lg:tw-py-6 tw-font-normal">
										<p className="tw-text-xs md:tw-text-md lg:tw-text-lg tw-px-4">
											Repayment over{" "}
											<span className="tw-font-bold">12 to 84</span> months
										</p>
									</div>
								</div>
							</div>

							<div className="tw--mt-10 tw-w-full tw-text-center lg:tw--ml-2 lg:tw--mt-12 xl:tw--ml-2 xl:tw--mt-12 md:tw--ml-2 md:tw--mt-10">
								<a target="_self" href="/PLForm/home" className="tw-text-black">
									<button
										href=""
										className="tw-m-auto tw-bg-nishyellow-400 tw-text-xs md:tw-text-md lg:tw-text-lg tw-rounded-md tw-w-28 md:tw-w-32 lg:tw-w-40 tw-h-10 tw-font-semibold"
									>
										Apply Now
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* <div className=" md:hidden w-full text-center -mt-6">
                        <Tabs />
                    </div> */}
				</div>
			</div>
			<div className="tw-w-full tw-text-center tw--mt-14 md:tw--mt-28">
				<TabsMd />
			</div>
			<Footer />
		</>
	);
};

export default Hero;
