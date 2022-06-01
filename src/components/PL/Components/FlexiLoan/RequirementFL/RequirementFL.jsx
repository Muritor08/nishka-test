import React from "react";

// Components

const RequirementFL = () => {
    return (
        <>
            {/* BACKGROUND BOX */}
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box */}
                <div className="tw-border-nishblue-100 md:tw-p-8">

                    {/* Component Starts */}
                    <div className="tw-h-auto  tw-border-solid tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        <h1 className="tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-text-left tw-font-bold tw-py-4 tw-px-4">Eligibility Criteria for Bajaj Finserv Flexi Personal Loan</h1>
                        <div className="tw-text-left tw-p-6 tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                        <p className="tw-mb-2 tw-font-semibold">For Salaried Individuals:</p>
                            <ul className="tw-ml-4 tw-list-disc">
                                <li>You should be between 21 and 67 years of age.</li><br/>
                                <li>You should be a salaried employee of either an MNC, public, or private company. </li><br/>
                                <li>You should be an Indian citizen living in a eligible city. (<a target="_blank" href="https://www.bajajfinserv.in/flexi-loans">https://www.bajajfinserv.in/flexi-loans</a>)</li><br/>
                            </ul>
                            (The document list mentioned here is indicative. You may be asked)
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default RequirementFL;