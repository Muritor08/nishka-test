import React from "react";
import secured from "../assets/getSecuredReturns.png";
import tenor from "../assets/FlexibleTenor.png";
import deposits from "../assets/Depositsstarting.png";
import Upto from "../assets/Upto.png";

import {FD_Rates} from "../FD_rates";

const Features = () => {

    return (
        <>
            <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className="tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-px-6 tw-text-left lg:tw-px-4">Features and Benefits of Fixed Deposit</h1>
                        <div className=" md:tw-mb-6 tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap lg:tw-flex-row tw-justify-center tw-items-center tw-gap-6 lg:tw-gap-12 tw-py-4">
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between md:tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${Upto})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=" tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 tw-leading-6 tw-text-right tw-text-lg tw-text-white tw-font-bold">
                                        <p>
                                            Upto 0.25% higher<br />
                                            interest rates for<br />
                                            senior citizens
                                        </p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-left tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-4 tw-mt-2">
                                        <div className="md:tw-mx-4">
                                            <p>Manage your post-retirement expenses with an additional rate of benefit on your deposit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className="tw-flex tw-flex-row tw-justify-between md:tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${tenor})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 tw-leading-6 tw-text-right tw-text-lg tw-text-white tw-font-bold">
                                        Flexible tenor up<br />
                                        to 60 months
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-left tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-4 tw-mt-2">
                                        <div className="md:tw-mx-4">
                                            <p>Choose tenors ranging from 12 to 60 months, as per your convenience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className=" tw-flex tw-flex-row tw-justify-between md:tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${deposits})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=" tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 tw-leading-6 tw-text-right tw-text-lg tw-text-white tw-font-bold">
                                        <p>
                                            Deposits starting<br />
                                            at Rs.{FD_Rates.min_amount}<br/>per
                                            month
                                        </p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-left tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-4 tw-mt-2">
                                        <div className="md:tw-mx-4">
                                            <p>Start investing with a small
                                                amount and grow your savings with our fixed deposit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:tw-w-72 tw-w-64 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className="tw-flex tw-flex-row tw-justify-between md:tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${secured})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-text-right tw-mt-2 tw-leading-6 tw-text-lg tw-text-white tw-font-bold">
                                        <p>
                                            Get secured<br />
                                            returns upto {FD_Rates.senior}%
                                        </p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-left tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-4 tw-mt-2">
                                        <div className="md:tw-mx-4">
                                            <p>Access your savings instantly, during emergencies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-mx-10 md:tw-mx-16 tw-text-justify">
                                <p>
                                    Fixed deposit (FD) is a low-risk financial instrument that is offered by banks, post offices or Non-banking Financial Companies (NBFCs). Bajaj Finance offers higher FD rates ensuring you earn better returns.<br/><br/>
                                    With the Bajaj Finance Fixed Deposit, you can grow your savings at attractive FD interest rates up to {FD_Rates.senior}%*p.a. along with the convenience of an end-to-end paperless investment process. The Bajaj Finance online FD provides an easy application process that saves you time and trouble waiting in long queues to open an FD account.<br/> <br/>
                                    Amid increasing market volatilities, investing in a Bajaj Finance FD offers assured returns along with steady growth of savings. So you can build your savings without any effect of market fluctuations. Moreover, Bajaj Finance has the highest credit quality and safety ratings. CRISIL and ICRA have awarded it with MAAA and FAAA, respectively, making the Bajaj Finance Fixed Deposit one of the safest investment options.<br/><br/>
                                    *Conditions apply
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Features;