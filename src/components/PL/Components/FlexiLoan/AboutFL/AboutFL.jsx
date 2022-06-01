import React from "react";

// Components

const AboutFL = () => {
    return (
        <>
            {/* BACKGROUND BOX */}
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box */}
                <div className="tw-border-nishblue-100 md:tw-p-8">

                    {/* Component Starts */}
                    <div className="tw-h-auto tw-border-solid tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        <h1 className="tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-text-left tw-font-bold tw-py-4 tw-px-4">About Bajaj Finserv Flexi Term Loan</h1>
                        <div className="tw-text-left tw-p-6 tw-text-xs md:tw-text-md lg:tw-text-lg xl:tw-text-xl">
                            <ul className="tw-ml-4 tw-list-disc">
                                <li>Interest is charged only on the utilized loan amount.</li><br/>
                                <li>Customer can withdraw / drawdown from his loan amount as per the dropline limit which reduces month on month.</li><br/>
                                <li>Option to part pay with surplus funds and withdraw within the available limit at NIL charges.</li><br/>
                                <li>No limit on the number of part payments or withdrawals that can be made by customer within the available limit.</li><br/>
                                <li>Instant and hassle free transaction (part payment & withdrawal) on customer portal Experia.</li><br/>
                            </ul>
                        </div>
                    </div>
                    {/* Component Ends */}
                </div>
            </div>
        </>
    );
};


export default AboutFL;