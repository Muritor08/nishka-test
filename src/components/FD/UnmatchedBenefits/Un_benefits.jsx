import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import {FD_Rates} from "../FD_rates";

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
const Un_benefits = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                <div className="tw-border-nishblue-100 md:tw-p-8 ">
                    <div className=" tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100 ">
                        <h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold text-left tw-py-4 tw-px-4">Explore the Unmatched Benefits</h1>
                        <div className="tw-flex tw-flex-row tw-justify-center tw-py-4 md:tw-gap-6 tw-gap-4 tw-flex-wrap">
                            <div className="tw-bg-nishblue-400 md:tw-w-64 md:tw-h-44 tw-h-32 tw-w-36 tw-rounded-xl">
                                <div>
                                    <CustomWidthTooltip title={toolTip1}>
                                        <Button className=" tw-float-right">
                                            <AiOutlineInfoCircle className="tw-text-xl tw-text-white tw-mt-2 tw--mr-6" />
                                        </Button>
                                    </CustomWidthTooltip>
                                </div>
                                <div className="tw-w-max tw-text-left tw-flex tw-flex-col tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-gap-1 md:tw-my-6">

                                    <p className="tw-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Interest Rates
                                    </p>
                                    <p className="tw-w-max tw-text-xl tw--mt-2 md:tw--mt-0 md:tw-text-3xl tw-text-white tw-font-black">
                                    {FD_Rates.senior}%p.a.*
                                    </p>
                                    <p className="tw-w-max md:tw-text-lg tw--mt-2 md:tw--mt-0 tw-text-xs tw-font-semibold ">For Senior Citizen</p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-64 md:tw-h-44 tw-h-32 tw-w-36 tw-rounded-xl">
                                <div>
                                    <CustomWidthTooltip title={toolTip2}>
                                        <Button className=" tw-float-right">
                                            <AiOutlineInfoCircle className="tw-text-xl tw-text-white tw-mt-2 tw--mr-6" />
                                        </Button>
                                    </CustomWidthTooltip>
                                </div>
                                <div className="tw-w-max tw-text-left tw-flex tw-flex-col tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-gap-1 md:tw-my-6">
                                    <p className="tw-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Interest Rates
                                    </p>
                                    <p className="tw-w-max tw-text-xl md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                    {FD_Rates.nonSenior}%p.a.**
                                    </p>
                                    <p className="tw-w-max md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">For Non Senior Citizen</p>
                                </div>
                            </div>

                            <div className="tw-bg-nishblue-400 md:tw-w-64 md:tw-h-44 tw-h-32 tw-w-36 tw-rounded-xl">
                                <div>
                                    <CustomWidthTooltip title={toolTip3}>
                                        <Button className="tw-float-right">
                                            <AiOutlineInfoCircle className="tw-text-xl tw-text-white tw-mt-2 tw--mr-6" />
                                        </Button>
                                    </CustomWidthTooltip>
                                </div>
                                <div className="tw-w-max tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="tw-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Choose
                                    </p>
                                    <p className="tw-w-max tw-text-xl md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                        Flexible
                                    </p>
                                    <p className="tw-w-max md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Payout Interest</p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-64 md:tw-h-44 tw-h-32 tw-w-36 tw-rounded-xl">
                                <div>
                                    <CustomWidthTooltip title={toolTip4}>
                                        <Button className="tw-float-right">
                                            <AiOutlineInfoCircle className="tw-text-xl tw-text-white tw-mt-2 tw--mr-6" />
                                        </Button>
                                    </CustomWidthTooltip>
                                </div>
                                <div className="tw-w-max tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="t-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Get a loan up to
                                    </p>
                                    <p className="tw-text-xl tw-w-max md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                        75%
                                    </p>
                                    <p className="tw-w-max md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Of FD amount</p>
                                </div>
                            </div>
                            <div className="tw-bg-nishblue-400 md:tw-w-64 md:tw-h-44 tw-h-32 tw-w-36 tw-rounded-xl">
                                <div>
                                    <CustomWidthTooltip title={toolTip3}>
                                        <Button className="tw-float-right">
                                            <AiOutlineInfoCircle className="tw-text-xl tw-text-white tw-mt-2 tw--mr-6" />
                                        </Button>
                                    </CustomWidthTooltip>
                                </div>
                                <div className="tw-w-max tw-mt-9 tw-text-left tw-flex tw-flex-col md:tw-gap-1 tw-mx-2 md:tw-mx-5 tw-my-4 md:tw-my-6">
                                    <p className="tw-w-max tw-text-white tw-text-xs md:tw-text-lg tw-font-semibold">
                                        Months
                                    </p>
                                    <p className="tw-w-max tw-text-xl md:tw-text-3xl tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-text-white tw-font-black">
                                        12-60
                                    </p>
                                    <p className="tw-w-max md:tw-text-lg tw-text-xs tw--mt-2 md:tw--mt-0 md:tw--mt-0 tw-font-semibold">Flexible</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Un_benefits;