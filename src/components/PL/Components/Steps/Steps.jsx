import React from "react";
// import { AiFillInfoCircle } from "react-icons/ai";
import dotd from "../../assets/dotd.png";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";
import step7 from "../../assets/step7.png"
const Steps = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto tw-border-solid tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        <h1 className=" tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-text-left tw-font-bold tw-py-4 tw-px-4">Steps to apply for Personal Loan</h1>
                        <div className="tw-flex tw-flex-col lg:tw-w-4/5 md:tw-w-5/6 tw-justify-center tw-items-center tw-gap-12 tw-py-4 tw-px-4 tw-mx-auto">

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step1} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step1} alt="step1"/>
                            </div>
                            <span className="tw--m-14">
                                <img src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className=" tw-block lg:tw-hidden tw-h-full tw-w-full" src={step2} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step2} alt="step1"/>
                            </div>

                            <span className="tw--m-14">
                                <img src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step3} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step3} alt="step1"/>
                            </div>

                            <span className="tw--m-14">
                                <img src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step4} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step4} alt="step1"/>
                            </div>
                            <span className="tw--m-14">
                                <img src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step5} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step5} alt="step1"/>
                            </div>
                            <span className="tw--m-14">
                                <img src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step6} alt="step1"/>
                                <img className="tw-hidden lg:tw-block" src={step6} alt="step1"/>
                            </div>

                            <span className="tw--m-14">
                                <img className="tw-h-full tw-w-full" src={dotd} />
                            </span>

                            <div className="xl:tw-w-4/5">
                                <img className="tw-block lg:tw-hidden tw-h-full tw-w-full" src={step7}/>
                                <img className="tw-hidden lg:tw-block" src={step7}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Steps;