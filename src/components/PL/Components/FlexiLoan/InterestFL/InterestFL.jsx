import React from "react";

const InterestFL = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100  md:tw-p-8">
                    <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-xl tw-text-left md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-py-4 tw-px-6 lg:tw-px-4">
                            Current Personal Loan Interest Rate, Fees and Charges{" "}
                        </h1>
                        <div className="md:tw-ml-10 md:tw-mr-10 tw-text-justify tw-mx-auto tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                            <p className="tw-m-4 tw-ml-5">
                                With a Bajaj Finserv Personal Loan, you can get up to Rs. 25 lakh at an attractive interest rate. The loan comes with no hidden charges and 100% transparency, which make your overall borrowing experience seamless.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                The latest personal loan interest rates and charges are listed in the table below:
                            </p>
                        </div>
                        <div>
                            <table className="tw-shadow-3xl tw-rounded-2xl tw-w-5/6 tw-mx-auto tw-m-4">
                                <tr className="tw-bg-nishblue-400 tw-text-white tw-font-bold tw-text-xs md:tw-text-md lg:tw-text-lg xl:tw-text-xl">
                                    <th className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Types of Fees
                                    </th>
                                    <th className="md:tw-p-3 tw-p-1 ">Charges Applicable</th>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify ">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Rate of Interest
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1">13% onwards</td>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify tw-bg-blue-50">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Processing Fees
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        Up to 4% of the loan amount (plus applicable taxes)
                                    </td>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Bounce Charges
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        Rs.600 - Rs.1,200 per bounce (inclusive of applicable taxes)
                                    </td>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify tw-bg-blue-50">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Penal Interest
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        A delay in payment of monthly instalment/EMI shall attract
                                        penal interest of 2% to 4% per month on the monthly
                                        instalment/EMI outstanding. This penal interest will be
                                        chargeable from the date of default until the receipt of the
                                        monthly instalment/EMI.
                                    </td>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        <p>Document/statement charges</p>
                                        <p>
                                            Statement of Account/Repayment Schedule/Foreclosure
                                            Letter/No Dues Certificate/Interest Certificate/other
                                            documents
                                        </p>
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        <p>
                                            Download your e-statements/letters/certificates at no
                                            extra cost by logging into our customer portal - Experia.{" "}
                                        </p>
                                        <p>
                                            You can get a physical copy of your
                                            statements/letters/certificates/other list of documents
                                            from any of our branches at a charge of Rs.50 (Inclusive
                                            of applicable taxes) per statement/letter/certificate.
                                        </p>
                                    </td>
                                </tr>
                                {/* <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify tw-bg-blue-50">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Part-Payment charges**
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        2% + applicable taxes on part-payment amount paid*{" "}
                                    </td>
                                </tr> */}
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-bg-blue-50 tw-text-justify">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Stamp Duty
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">At actuals. (as per state)</td>
                                </tr>
                            </table>
                        </div>
                        <div className="md:tw-ml-10 md:tw-mr-10 tw-text-justify tw-mx-auto tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                            <p className="tw-m-4 tw-ml-5">
                                *Applies to e-statements. You can get a physical copy from any
                                branch for Rs. 50 (inclusive of taxes).
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                **These charges are not applicable for the Flexi Loan facility.
                                Moreover, the part-prepayment should be more than 1 EMI.
                            </p>
                        </div>
                        <h1 className="tw-text-xl tw-text-left md:tw-text-2xl tw-text-black tw-font-semibold tw-py-4 tw-px-6 lg:tw-px-4">
                            Annual Maintenance Charges{" "}
                        </h1>
                        <div>
                            <table className="tw-shadow-3xl tw-rounded-2xl tw-w-5/6 tw-mx-auto tw-m-4">
                                <tr className="tw-bg-nishblue-400 tw-text-white tw-font-bold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                                    <th className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Types of Fees
                                    </th>
                                    <th className="md:tw-p-3 tw-p-1 ">Charges Applicable</th>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify ">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Flexi Term Loan
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        0.25% plus applicable taxes, on the total withdrawable amount irrespective of utilisation on date of levy of such charges
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <h1 className="tw-text-xl tw-text-left md:tw-text-2xl tw-text-black tw-font-semibold tw-py-4 tw-px-6 lg:tw-px-4">
                            Personal Loan Foreclosure Charges{" "}
                        </h1>
                        <div>
                            <table className=" tw-shadow-3xl tw-rounded-2xl tw-w-5/6 tw-mx-auto tw-m-4">
                                <tr className="tw-bg-nishblue-400 tw-text-white tw-font-bold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                                    <th className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Types of Fees
                                    </th>
                                    <th className="md:tw-p-3 tw-p-1 ">Charges Applicable</th>
                                </tr>
                                <tr className="tw-font-semibold tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl tw-text-justify ">
                                    <td className="tw-border-r tw-border-nishblue-200 md:tw-p-3 tw-p-1 tw-w-1/3">
                                        Flexi Term Loan
                                    </td>
                                    <td className="md:tw-p-3 tw-p-1 ">
                                        4% plus applicable taxes on total withdrawable amount* (*total loan amount that you can withdraw under Flexi loan from time to time as per the repayment schedule on the date of levy of such charges).
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="md:tw-ml-10 md:tw-mr-10 tw-text-justify tw-mx-auto tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl ">
                            <p className="tw-m-4 tw-ml-5">
                                Mandate rejection service charge: Rs.450 (inclusive of applicable taxes)
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                Charges will be levied if the new mandate form is not registered within 30 days from the date of rejection of the previous mandate form by the customer's bank for any reasons whatsoever.
                                Additional cess will be applicable on all charges for all products in accordance with the state-specific laws.

                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                Additional cess will be applicable on all charges for all
                                products in accordance with the state-specific laws.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                Bajaj Finserv offers personal loans of up to Rs. 25 lakh at
                                competitive interest rates starting at 13%. There are no hidden
                                charges, and you are assured of 100% transparency.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                By securing an affordable interest rate, you can use the Bajaj
                                Finserv Personal Loan to meet your financial goals
                                cost-effectively. When applying for a personal loan, do account
                                for the processing fee of up to 4% of the loan amount plus
                                taxes. This is a one-time fee. You can split repayment into a
                                maximum of 60 EMIs as you get a flexible repayment tenor up to
                                60 months. For ease of planning, use the Personal Loan EMI
                                Calculator.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                When taking a personal loan, prior planning is a must as
                                defaults attract fines and penal interest. The bounce charges
                                range from Rs.600 to Rs. 1,200, and penal interest is charged at
                                the rate of 2% to 4% per month on the monthly instalment/EMI
                                outstanding, from the date of default until the receipt of
                                monthly instalment/ EMI.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                Part-prepayments help make loan repayment cheaper as they reduce
                                the outstanding principal. However, make sure to judge the
                                benefit of a partprepayment by accounting for the fee of 2% plus
                                taxes on the amount paid. The part-prepayment fee does not apply
                                to the Flexi loan facility.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                If you want to pre-close your loan, you will incur a nominal
                                charge of 4% plus taxes on the outstanding principal. For a
                                Flexi loan, the foreclosure charge is 4% plus taxes and cess on
                                the withdrawable amount.
                            </p>
                            <p className="tw-m-4 tw-ml-5">
                                To view your loan documents and statements, simply visit the
                                customer portal - Experia. You can download e-statements,
                                letters, certificates and more from Experia. For physical
                                copies, you can visit the nearest Bajaj Finserv branch and pay a
                                nominal fee of Rs. 50 to obtain the copy you need.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InterestFL;
