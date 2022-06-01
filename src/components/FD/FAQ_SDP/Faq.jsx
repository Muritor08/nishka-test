import React from "react";

// Components
import Accordian from "./Accordian";

const Faq = () => {
    return (
        <>
            {/* BACKGROUND BOX */}
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box */}
                <div className="tw-border-nishblue-100 md:tw-p-8">

                    {/* Component Starts */}
                    <div className="tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl md:tw-text-4xl tw-text-left tw-text-black tw-font-semibold tw-py-4 tw-px-4">FAQs</h1>

                        {/* Accordian */}
                        <div className="tw-w-full tw-m-2 md:tw-m-4">
                            <Accordian className="tw-w-full" />
                        </div>
                    </div>
                    {/* Component Ends */}
                </div>
            </div>
        </>
    );
};


export default Faq;