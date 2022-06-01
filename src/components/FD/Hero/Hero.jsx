import React from "react";

// Imports
import bajajxpattern from "../assets/3.png";
// import bajaj from "../assets/bajaj.png";

import {FD_Rates} from "../FD_rates";

const Hero = () => {
    return (
        <>
            {/* Background Box */}
            <div className="tw-h-max-content tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box  */}
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className="tw-bg-transparent tw-flex md:tw-flex-row tw-flex-col tw-gap-0 tw-justify-between tw-h-auto tw-p-0 tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        {/* Left Div */}
                        {/* Brand Logo */}
                        <div className="  tw-h-full tw-text-left tw-p-0 tw-m-0">
                            <img className="tw-rounded-tl-xl md:tw-rounded-bl-xl tw-w-full md:tw-float-left lg:tw-w-max md:tw-h-full" src={bajajxpattern} />
                        </div>
                        <div className="tw-mx-auto tw-my-auto">
                            {/* Right Div */}
                            {/* Table Container Starts */}
                            <div>

                                {/* Table Border Box */}
                                <div className=" tw-flex tw-flex-col tw-mb-6 tw-gap-0 tw-mx-auto tw-mt-6 md:tw-mt-0 md:tw-float-right lg:tw-m-auto md:tw-mr-2  md:tw-ml-0 tw-border-2 tw-w-max lg:tw-h-80 tw-h tw-border-solid tw-border-nishblue-400 tw-rounded-xl">

                                    {/* Table Top */}
                                    <div className="tw-w-max-content tw-rounded-t-lg tw-p-4 tw-border-b-0">
                                        <h1 className="tw-text-left md:tw-text-center tw-font-bold lg:tw-text-3xl md:tw-text-xl tw-text-lg tw-mb-2">
                                            Bajaj Finance Fixed Deposit
                                        </h1>

                                        <p className="tw-text-left md:tw-text-center lg:tw-text-xl md:tw-text-md tw-text-sm tw-pt-2 tw-font-semibold tw-mb-1">Interest Rates</p>

                                        <div className="tw-pt-2 tw-flex tw-flex-row lg:tw-text-lg md:tw-text-sm tw-text-xs tw-gap-4 tw-text-left tw--ml-4 md:tw--ml-2">
                                            <ul className="tw-list-disc">
                                                <li>Senior Citizens</li>
                                                <li>Non Senior Citizens</li>
                                            </ul>
                                            <ul className="tw--ml-4 md:tw--ml-0 tw-list-none">
                                                <li>
                                                    -upto <span className="tw-font-semibold">{FD_Rates.senior}% p.a.</span>
                                                </li>
                                                <li>
                                                    -upto <span className="tw-font-semibold">{FD_Rates.nonSenior}% p.a.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Table Bottom */}
                                    <div style={{ borderTop: '2px solid #3AD4AF' }} className="tw-flex tw-flex-row tw-justify-evenly tw-border-nishblue-400  tw-rounded-b-lg tw-p-4">
                                        <div className="lg:tw-text-lg md:tw-text-sm tw-text-xs tw-text-center lg:tw-mt-2">
                                            <p>TENURE</p>
                                            <p className="tw-font-semibold">12-60 months</p>
                                        </div>

                                        <div className="lg:tw-text-lg md:tw-text-sm tw-text-xs tw-text-center lg:tw-mt-2">
                                            <p>MIN DEPOSIT</p>
                                            <p className="tw-font-semibold">Rs.{FD_Rates.min_amount}</p>
                                        </div>
                                    </div>

                                    {/* Invest Now Button */}
                                    {/* <div className="tw-m-auto tw-bg-nishyellow-400 tw--mb-4 md:tw-mt-2 lg:tw--mt-7 lg:tw-text-lg md:tw-text-sm tw-text-xs tw-rounded-md tw-h-10 lg:tw-w-2/4 lg:tw-h-20 md:tw-w-32 md:tw-h-8 tw-w-28  tw-font-semibold">
                                    <a target="_blank" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=&utm_medium=B2B&utm_campaign=Online_Fintech" className="tw-text-black" >
                                        <button className="tw-bg-nishyellow-400 tw-w-full tw-h-full tw-rounded-md  tw-font-semibold">
                                            Invest Now
                                        </button>
                                    </a>
                                    </div> */}
                                     <div className="tw-m-auto tw-bg-nishyellow-400 tw--mb-4 md:tw-mt-2 lg:tw--mt-7 lg:tw-text-lg md:tw-text-sm tw-text-xs tw-rounded-md tw-h-10 lg:tw-w-2/4 lg:tw-h-20 md:tw-w-32 md:tw-h-8 tw-w-28  tw-font-semibold">
                                    <a target="_blank" href="/form" className="tw-text-black" >
                                        <button className="tw-bg-nishyellow-400 tw-w-full tw-h-full tw-rounded-md  tw-font-semibold">
                                            Invest Now
                                        </button>
                                    </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Hero;