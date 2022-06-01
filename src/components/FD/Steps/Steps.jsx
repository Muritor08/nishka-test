import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import dotd from "../assets/dotd.png"
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"


const Steps = () => {
    return (
        <>
            <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto lg:tw-h-stepssm border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-text-left tw-px-4">Steps to Invest</h1>
                        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-12 tw-py-4 tw-px-4">

                            <div>
                                <img className="tw-w-full" src={step1}/>
                            </div>
                            <span className="tw--m-14">
                                <img className="tw-h-1/2 tw-w-1/2 md:tw-w-full md:tw-h-full" src={dotd} />
                            </span>

                            <div>
                                <img className="tw-w-full" src={step2}/>
                            </div>

                            <span className="tw--m-14">
                                <img className="tw-h-1/2 tw-w-1/2 md:tw-w-full md:tw-h-full" src={dotd} />
                            </span>

                            <div>
                                <img className="tw-w-full" src={step3}/>
                            </div>

                            <span className="tw--m-14">
                                <img className="tw-h-1/2 tw-w-1/2 md:tw-w-full md:tw-h-full" src={dotd} />
                            </span>

                            <div>
                                <img className="tw-w-full" src={step4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Steps;