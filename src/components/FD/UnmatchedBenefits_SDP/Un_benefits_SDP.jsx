import { React, useState } from "react";
// import { AiOutlineInfoCircle } from "react-icons/ai";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import {SDP_FD_Rates} from "../FD_rates";

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 200,
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const toolTip1 = `
Rate of interest per annum, applicable on a scheme tenor of 36-60 months for senior citizens.
`;
const toolTip2 = `
Rate of interest per annum, applicable on a scheme tenor of 36-60 months for non-senior citizens.
`;
const toolTip3 = `
Apply for a loan against FD and take a loan up to 75% of FD amount in case of emergencies.
`;
const toolTip4 = `
Staying invested for longer can help you earn higher returns on your deposit. The tenor for Single Maturity Scheme of SDP is 19 to 60 months. 
`;
const toolTip5 = `
Rate of interest per annum, applicable on a scheme tenor of 36-60 months for senior citizens.
`;
const Un_benefits_SDP = () => {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div className="tw-mx-10 tw-text-justify">
        <p>
            Investing in fixed deposits requires an investment of a lump sum amount. However, a Systematic Deposit Plan (SDP) is a great investment tool for investors looking for stable monthly savings options. One can deposit a fixed amount regularly to create a corpus over time.<br/><br/>

            By setting aside an amount each month in SDP. you can build your savings in a disciplined manner, over time. You can save with small monthly deposits, choosing options that suit you best. SDP offers two variants - Monthly Maturity Scheme and Single Maturity Scheme.<br/><br/>

            With the Monthly Maturity Scheme, the tenor you choose gets applied to all the deposits you invest in. The maturity date for each deposit is different, as your deposits mature as per the chosen tenor.<br/><br/>

            On the other hand, with the Single Maturity Scheme, you can receive maturity proceeds of all your deposits on a single day. The tenor of each deposit placed after the first deposit will gradually reduce, so all your deposits mature on a single date.<br/><br/>

            **Conditions apply
        </p>
    </div>
    const linkName = readMore ? 'Less ↑' : 'More ↓'
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                <div className="tw-border-nishblue-100 md:tw-p-8 ">
                    <div className=" tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100 ">
                        <h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold text-left tw-py-4 tw-px-4">Explore the Unmatched Benefits</h1>
                        <div className="tw-text-right tw-px-8">
                            <button className='tw-bg-white tw-border-0 tw-font-semibold tw-text-xl tw-text-blue-600' onClick={() => { setReadMore(!readMore) }}>{linkName}</button>
                        </div>
                        <div className="tw-flex tw-flex-row tw-justify-center tw-py-4 tw-px-2 md:tw-gap-6 tw-gap-4 tw-flex-wrap">
                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                                <div className="tw-w-full tw-text-left tw-flex tw-flex-col tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-gap-1 md:tw-my-6">

                                    <p className="tw-w-full tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Resident
                                    </p>
                                    <p className="tw-w-full tw-text-xl tw--mt-2 md:tw--mt-0 md:tw-text-3xl tw-text-white tw-font-black">
                                        Indian
                                    </p>
                                    <p className="tw-w-full md:tw-text-lg tw--mt-2 tw-pr-6 md:tw--mt-0 tw-text-xs tw-font-semibold ">Indian residents
                                        above 18 years are
                                        eligible. </p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                            
                                <div className="tw-w-full tw-text-left tw-flex tw-flex-col tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-gap-1 md:tw-my-6">
                                    <p className="tw-w-full tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Assured Returns Upto
                                    </p>
                                    <p className="tw-w-full tw-text-xl md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                    {SDP_FD_Rates.senior}%
                                    </p>
                                    <p className="tw-w-3/4 md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Best returns on
                                        deposit</p>
                                </div>
                            </div>

                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                            
                                <div className="tw-w-full tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="t-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Additional Benefit
                                    </p>
                                    <p className="tw-text-xl tw-w-full md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                        0.25%
                                    </p>
                                    <p className="tw-w-full md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">For Senior Citizens</p>
                                </div>
                            </div>

                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                                <div className="tw-w-full tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="tw-w-full tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Payouts
                                    </p>
                                    <p className="tw-w-full tw-text-xl md:tw-text-3xl tw--mt-2 tw-text-white tw-font-black">
                                        Monthly
                                    </p>
                                    <p className="tw-w-full md:tw-text-lg tw-text-xs tw--mt-2 tw-pr-6 tw-font-semibold">Recieve Monthly
                                        Payouts</p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                            
                                <div className="tw-w-full tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="t-w-full tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Deposits
                                    </p>
                                    <p className="tw-text-xl tw-w-full md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                    {SDP_FD_Rates.min_amount}
                                    </p>
                                    <p className="tw-w-3/4 md:tw-text-lg tw-text-xs tw--mt-2 tw-pr-6 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Deposits starts at
                                    {SDP_FD_Rates.min_amount}
                                          rupees per
                                        month</p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-52 md:tw-h-56 tw-h-36 tw-w-36 tw-rounded-xl">
                                <div className="tw-w-full tw-mt-9 tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="tw-w-full tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Months
                                    </p>
                                    <p className="tw-w-full tw-text-xl md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                        12-60
                                    </p>
                                    <p className="tw-w-full md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Flexible Tenor</p>
                                </div>
                            </div>
                            {readMore && extraContent}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};


export default Un_benefits_SDP;