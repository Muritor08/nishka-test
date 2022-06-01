import React from "react";
import individual from "../assets/indiviual.png";
import nonindividual from "../assets/non-individuals.png";

import {FD_Rates} from "../FD_rates";

const Requirements = () => {

    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className="tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-text-left tw-px-6 lg:tw-px-4">Fixed Deposit Eligibility Criteria  </h1>
                        <div className=" md:tw-mb-6 tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap lg:tw-flex-row tw-justify-center tw-items-center tw-gap-6 lg:tw-gap-12 tw-py-4">
                            <div className="tw-mx-4 md:tw-mx-0 md:tw-w-2/5 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className="tw-flex tw-flex-row lg:tw-justify-start tw-justify-between lg:tw-gap-32 tw-gap-6 tw-w-1/2 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${individual})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className=" tw-mt-8 tw-bg-black lg:tw-h-20 lg:tw-w-20 tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="lg:tw-mt-4 tw-mt-8 tw-leading-6 lg:tw-text-2xl tw-text-xl tw-text-white tw-font-bold">
                                        <p>
                                            Individuals
                                        </p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-2 lg:tw-mt-4">
                                        <div className="md:tw-mx-4 tw-text-sm lg:tw-text-md">
                                            <p>Resident Indians, persons of Indian origin, non-resident Indians and overseas citizens of India are eligible to book an FD.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-mx-4 md:tw-mx-0 md:tw-w-2/5 tw-shadow-md tw-rounded-xl tw-h-56">
                                <div className="tw-flex tw-flex-row lg:tw-justify-start tw-justify-between lg:tw-gap-32 tw-gap-6 tw-w-1/2 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${nonindividual})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black lg:tw-h-20 lg:tw-w-20 tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="md:tw-mt-4 lg:tw-mt-4 tw-mt-8 tw-text-right tw-leading-6 lg:tw-text-2xl tw-text-xl tw-text-white tw-font-bold">
                                        <p>
                                            Non-Individuals
                                        </p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mx-2 lg:tw-mt-4">
                                        <div className="md:tw-mx-4 tw-text-sm">
                                            <p>Sole proprietorships, partnership firms, companies, Hindu Undivided Families (HUFs), clubs, associations, societies, family trusts are also eligible to book an FD.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tw-mx-10 md:tw-mx-32 tw-text-justify">
                                <p>
                                    To invest in a Bajaj Finance online FD, you need to be above 18 years of age. You can book your deposit online, with a quick paperless process and get started with an investment amount of just Rs. {FD_Rates.min_amount}. Invest in a Bajaj Finance online FD to save time and book your deposit in less than 10 minutes.<br /><br />
                                    Senior citizens get an additional rate benefits up to 0.25%*p.a. on their deposit, regardless of the mode of investment, they choose.<br /><br />
                                    Existing FD customers of Bajaj Finance need not resubmit any documents on renewal, as this is a one-time process. For new customers, here are the documents required to open a fixed deposit account with Bajaj Finance.<br /><br />
                                    <ul className="tw-list-disc">
                                        <li>Latest photograph</li>
                                        <li>KYC of all applicants</li>
                                        <ul className=" tw-list-decimal">
                                            <li >PAN card</li>
                                            <li>Aadhaar card, passport, driving license, voter ID (any one)</li>
                                        </ul>
                                    </ul><br /><br />
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


export default Requirements;