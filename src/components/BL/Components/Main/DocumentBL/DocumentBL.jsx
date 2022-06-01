import React from "react";

// Components

const DocumentBL = () => {
    return (
        <>
            {/* BACKGROUND BOX */}
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box */}
                <div className="tw-border-nishblue-100  md:tw-p-8">

                    {/* Component Starts */}
                    <div className=" tw-border-solid tw-h-auto tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        <h1 className="tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-text-left tw-font-bold tw-py-4 tw-px-4">Documents Required</h1>
                        <div className="tw-text-left tw-p-6 tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                            <ul className="tw-ml-4 tw-list-disc">
                                <li>KYC documents - Recent Photographs, identity proof, address proof of all co-applicants.</li><br />
                                <li>PAN Card of all co-applicants.</li><br />
                                <li>Latest 6-12 months bank statement of main operative business account.</li><br />
                                <li>Signed copy of standard terms (term loan facility).</li><br />
                                <li>Business registration proof (two years).</li><br />
                                <li>GST Registration.</li><br />
                                <li>Additional document(s) may be required for credit assessment and processing of loan request.</li><br />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default DocumentBL;