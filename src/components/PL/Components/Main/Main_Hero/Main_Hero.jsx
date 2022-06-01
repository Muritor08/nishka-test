import React from "react";
// Imports
// import bajajxpattern from "../assets/3.png";
import mainhero from "../../../assets/PLMain.png";

const Main_Hero = () => {
    return (
        <>
            {/* Background Box */}
            <div className="tw-h-max-content tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box  */}
                <div className=" tw-border-nishblue-100 md:tw-p-8">
                    <div className="tw-border-solid tw-bg-transparent tw-flex md:tw-flex-row-reverse tw-flex-col-reverse tw-gap-0 tw-justify-evenly tw-h-auto tw-p-0 tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        {/* Left Div */}
                        {/* Brand Logo */}
                        <div className="md:tw-w-1/2 tw-p-0 tw-m-0">
                            <img className="tw-rounded-tr-xl tw-w-full md:tw-rounded-br-xl tw--mr-1 tw--mb-1 tw-float-right" src={mainhero} />
                        </div>

                        {/* Right Div */}
                        {/* Table Container Starts */}
                        <div className="tw-w-1/2 md:tw-my-auto tw-my-auto tw-mx-auto tw-w-max">

                            {/* Table Border Box */}
                            <div className=" tw-flex tw-border-solid tw-flex-col tw-mb-6 tw-gap-0 tw-mt-6 md:tw-mt-0 md:tw-float-right lg:tw-mr-6 md:tw-ml-0 tw-border-2 tw-w-60 md:tw-w-60 lg:tw-w-max lg:tw-h-72 tw-h-64 tw-border-nishblue-400 tw-rounded-xl ">

                                {/* Table Top */}
                                <div className="lg:tw-w-96 tw-rounded-t-lg tw-p-4 tw-border-b-0">
                                    <h1 className="tw-font-bold tw-text-center lg:tw-text-5xl md:tw-text-2xl tw-text-2xl tw-mb-2">
                                        Personal Loan
                                    </h1>

                                    <p className="tw-text-center lg:tw-text-lg md:tw-text-md tw-text-sm tw-pt-2 tw-mb-1">An unsecured loan that comes to you without having to submit any collateral for the same
                                    </p>

                                    <div className=" tw-pt-2 tw-flex tw-flex-row lg:tw-text-lg md:tw-text-sm tw-text-xs tw-gap-4 tw-pl-8">
                                        <p>

                                        </p>
                                    </div>
                                </div>

                                {/* Table Bottom */}
                                <div className="tw-text-center tw-border-solid tw-border-nishblue-400 tw-font-semibold tw-border-t-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-rounded-b-lg tw-p-6 ">
                                    <p>Interest Rate 13% p.a onwards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Main_Hero;