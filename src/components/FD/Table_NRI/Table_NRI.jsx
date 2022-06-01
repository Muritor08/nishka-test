import React from "react";

import { NRI_FD_Rates, current_year } from "../FD_rates";

const Table_NRI = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl tw-text-left md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-px-4">
                            Rate of Interest
                        </h1>
                        <h2 className="tw-text-xl md:tw-text tw-px-4 tw-text-left tw-font-semibold">NRI Fixed Deposit Interest Rates</h2>
                        <p className="tw-px-4 tw-text-left tw-mt-2 tw-mb-2">Annual rate of interest valid for deposits up to Rs. 5 crore (w.e.f {NRI_FD_Rates.wef} {current_year})</p>

                        <div className="lg:tw-w-full md:tw-items-ctw-enter tw-flex tw-flex-col lg:tw-justify-evenly lg:tw-flex-row tw-p-2 md:tw-p-0">
                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 lg:tw--mr-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Senior Citizen </h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-border-nishblue-300 tw-text-xs md:tw-text-lg tw-border-collapse tw-border-2 tw-border-r-0 tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Monthly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Quaterly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Half Yearly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-r-0 tw-border-solid">Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>12-23</td>
                                        <td>6.00%</td>
                                        <td>5.84%</td>
                                        <td>5.87%</td>
                                        <td>5.91%</td>
                                        <td>6.00%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>24-35</td>
                                        <td>6.65%</td>
                                        <td>6.46%</td>
                                        <td>6.49%</td>
                                        <td>6.54%</td>
                                        <td>6.65%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>36-60</td>
                                        <td>7.15%</td>
                                        <td>6.93%</td>
                                        <td>6.97%</td>
                                        <td>7.03%</td>
                                        <td>7.15%</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 tw-mb-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Non-Senior Citizen</h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-text-xs md:tw-text-lg tw-border-nishblue-300 tw-border-collapse tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-border-nishblue-300 tw-text-xs md:tw-text-lg tw-border-collapse tw-border-2 tw-border-r-0 tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Monthly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Quaterly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Half Yearly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-r-0 tw-border-solid">Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>12-23</td>
                                        <td>5.75%</td>
                                        <td>5.60%</td>
                                        <td>5.63%</td>
                                        <td>5.67%</td>
                                        <td>5.75%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>24-35</td>
                                        <td>6.40%</td>
                                        <td>6.22%</td>
                                        <td>6.25%</td>
                                        <td>6.30%</td>
                                        <td>6.40%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>36-60</td>
                                        <td>6.90%</td>
                                        <td>6.69%</td>
                                        <td>6.73%</td>
                                        <td>6.79%</td>
                                        <td>6.90%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                        <div className="lg:tw-w-full md:tw-items-ctw-enter tw-flex tw-flex-col lg:tw-justify-evenly lg:tw-flex-row tw-p-2 md:tw-p-0">
                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 lg:tw--mr-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Senior Citizen </h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-border-nishblue-300 tw-text-xs md:tw-text-lg tw-border-collapse tw-border-2 tw-border-r-0 tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Monthly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Quaterly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Half Yearly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-r-0 tw-border-solid">Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>15 Months</td>
                                        <td>6.25%</td>
                                        <td>6.08%</td>
                                        <td>6.11%</td>
                                        <td>6.16%</td>
                                        <td>6.25%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>18 Months</td>
                                        <td>6.35%</td>
                                        <td>6.17%</td>
                                        <td>6.20%</td>
                                        <td>6.25%</td>
                                        <td>6.35%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>22 Months</td>
                                        <td>6.50%</td>
                                        <td>6.31%</td>
                                        <td>6.35%</td>
                                        <td>6.40%</td>
                                        <td>6.50%</td>
                                    </tr>

                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>30 Months</td>
                                        <td>6.75%</td>
                                        <td>6.55%</td>
                                        <td>6.59%</td>
                                        <td>6.64%</td>
                                        <td>6.75%</td>
                                    </tr>

                                    <tr className="tw-text-xs md:tw-text-lg ">
                                        <td>33 Months</td>
                                        <td>6.90%</td>
                                        <td>6.69%</td>
                                        <td>6.73%</td>
                                        <td>6.79%</td>
                                        <td>6.90%</td>
                                    </tr>
                                    
                                </table>
                            </div>

                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 tw-mb-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Non-Senior Citizen</h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-text-xs md:tw-text-lg tw-border-nishblue-300 tw-border-collapse tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl tw-border-nishblue-300 tw-border-2 tw-border-solid tw-border-r-0 tw-border-t-0" colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-border-nishblue-300 tw-text-xs md:tw-text-lg tw-border-collapse tw-border-2 tw-border-r-0 tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Monthly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Quaterly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-solid">Half Yearly</th>
                                        <th className="tw-border-nishblue-300 tw-border-2 tw-border-r-0 tw-border-solid">Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>15 Months</td>
                                        <td>6.00%</td>
                                        <td>5.84%</td>
                                        <td>6.87%</td>
                                        <td>6.91%</td>
                                        <td>6.00%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>18 Months</td>
                                        <td>6.10%</td>
                                        <td>5.94%</td>
                                        <td>5.97%</td>
                                        <td>6.01%</td>
                                        <td>6.10%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>22 Months</td>
                                        <td>6.25%</td>
                                        <td>6.08%</td>
                                        <td>6.11%</td>
                                        <td>6.16%</td>
                                        <td>6.25%</td>
                                    </tr>

                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>30 Months</td>
                                        <td>6.50%</td>
                                        <td>6.31%</td>
                                        <td>6.35%</td>
                                        <td>6.40%</td>
                                        <td>6.50%</td>
                                    </tr>

                                    <tr className="tw-text-xs md:tw-text-lg ">
                                        <td>33 Months</td>
                                        <td>6.65%</td>
                                        <td>6.46%</td>
                                        <td>6.49%</td>
                                        <td>6.54%</td>
                                        <td>6.65%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table_NRI;