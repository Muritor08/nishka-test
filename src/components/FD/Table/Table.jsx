import React from "react";
import { senior_small } from "../database/normalFD_database.jsx";
import { senior_big } from "../database/normalFD_database.jsx";
import { non_senior_small } from "../database/normalFD_database.jsx";
import { non_senior_big } from "../database/normalFD_database.jsx";

import {FD_Rates , current_year} from "../FD_rates";

const Table = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl tw-text-left md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-px-4">
                            Rate of Interest
                        </h1>
                        <h2 className="tw-text-xl md:tw-text tw-px-4 tw-text-left tw-font-semibold">Fixed Deposit</h2>
                        <p className="tw-px-4 tw-text-left tw-mt-2 tw-mb-2">Annual rate of interest valid for deposits up to Rs. 5 crore (w.e.f {FD_Rates.wef} {current_year})</p>

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
                                    {senior_small.map(roi => {
                                        return (
                                            <tr className={`tw-text-xs ${roi.class} md:tw-text-lg`}>
                                                <td>{roi.min_tenure}-{roi.max_tenure}</td>
                                                <td>{roi.cumulative}%</td>
                                                <td>{roi.monthly}%</td>
                                                <td>{roi.quaterly}%</td>
                                                <td>{roi.halfyearly}%</td>
                                                <td>{roi.annual}%</td>
                                            </tr>
                                        )
                                    })}

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

                                    {non_senior_small.map(roi => {
                                        return (
                                            <tr className={`tw-text-xs ${roi.class} md:tw-text-lg`}>
                                                <td>{roi.min_tenure}-{roi.max_tenure}</td>
                                                <td>{roi.cumulative}%</td>
                                                <td>{roi.monthly}%</td>
                                                <td>{roi.quaterly}%</td>
                                                <td>{roi.halfyearly}%</td>
                                                <td>{roi.annual}%</td>
                                            </tr>
                                        )
                                    })}

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

                                    {senior_big.map(roi => {
                                        return (
                                            <tr className={`tw-text-xs ${roi.class} md:tw-text-lg`}>
                                                <td>{roi.tenure}Months</td>
                                                <td>{roi.cumulative}%</td>
                                                <td>{roi.monthly}%</td>
                                                <td>{roi.quaterly}%</td>
                                                <td>{roi.halfyearly}%</td>
                                                <td>{roi.annual}%</td>
                                            </tr>
                                        )
                                    })}
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
                                    {non_senior_big.map(roi => {
                                        return (
                                            <tr className={`tw-text-xs ${roi.class} md:tw-text-lg`}>
                                                <td>{roi.tenure}Months</td>
                                                <td>{roi.cumulative}%</td>
                                                <td>{roi.monthly}%</td>
                                                <td>{roi.quaterly}%</td>
                                                <td>{roi.halfyearly}%</td>
                                                <td>{roi.annual}%</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;