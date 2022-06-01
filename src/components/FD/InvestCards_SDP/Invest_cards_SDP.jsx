import React from "react";
import { AiFillInfoCircle } from "react-icons/ai"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import strong from "../assets/strongCredibility.png"
import premature from "../assets/prematureWithdrwal.png"
import online from "../assets/OnlineAccountManagement.png"
import additional from "../assets/additionalRateBenefits.png"



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
Rated FAAA/Stable by CRISIL and MAAA/Stable by ICRA, which means highest safety of your money
`;

const toolTip2 = `
Fund emergencies with an easy premature withdrawal facility after a minimum lock-in period of 3 months. You can also take an easy loan against FD, instead of liquidating your saving prematurly.

`;

const Invest_card_SDP = () => {

    return (
        <>
            <div className=" tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className="tw-h-auto  tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-text-left tw-py-4 tw-px-6 lg:tw-px-4">Why invest in Bajaj Finance SDP</h1>
                        <div className=" md:tw-mb-6 tw-flex tw-flex-col md:tw-flex-row md:tw-flex-wrap lg:tw-flex-row tw-justify-center tw-items-center tw-gap-6 lg:tw-gap-12 tw-py-4">
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-60">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${strong})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 md:tw-mt-4 tw-text-right tw-leading-6 tw-text-xl tw-text-white tw-font-bold">
                                        <p>Strong <br />Credibility</p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white w-full">
                                    <div className="tw-mt-2">
                                        <div className="tw-float-right">
                                            <CustomWidthTooltip title={toolTip1}>
                                                <Button>
                                                    <AiFillInfoCircle className="tw-text-xl tw-text-nishblue-400 tw--mr-6 tw--mt-10" />
                                                </Button>
                                            </CustomWidthTooltip>

                                        </div>
                                        <div className="tw-mx-4">
                                            <p>Bajaj Finance FD has safely ratings of FAAA by CRISIL and MAAA by ICRA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-60">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${additional})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 md:tw-mt-4 tw-text-right tw-leading-6 tw-text-xl tw-text-white tw-font-bold">
                                        <p>Additional <br />Rate Benefits</p>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mt-2">
                                        <div className="tw-float-right">
                                            <CustomWidthTooltip>
                                                <Button>
                                                    <AiFillInfoCircle className="tw-text-xl tw-text-white tw--mr-6 tw--mt-10" />
                                                </Button>
                                            </CustomWidthTooltip>

                                        </div>
                                        <div className="tw-mx-4">
                                            <ul>
                                                <li>0.20% for non-senior citizens investing Online</li>
                                                <li>0.10% for renewal</li>
                                                <li>0.25% for senior citizens</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-60">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-6 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${online})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 md:tw-mt-4 tw-text-right tw-leading-6 tw-text-xl tw-text-white tw-font-bold">
                                        <p>Online account <br />management</p>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mt-2">
                                        <div className="tw-float-right">
                                            <CustomWidthTooltip>
                                                <Button>
                                                    <AiFillInfoCircle className="tw-text-xl tw-text-white tw--mr-6 tw--mt-10" />
                                                </Button>
                                            </CustomWidthTooltip>

                                        </div>
                                        <div className="tw-mx-4">
                                            <p>Access all products details 24x7 on our customer portal-Experia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-w-64 md:tw-w-72 tw-shadow-md tw-rounded-xl tw-h-60">
                                <div className=" tw-flex tw-flex-row tw-justify-between tw-gap-2 tw-w-1/4 tw-px-4 tw-py-2 tw-rounded-t-xl tw-h-2/5 tw-bg-nishblue-400 tw-w-full">
                                    <div style={{ background: `url(${premature})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="tw-mt-8 tw-bg-black tw-h-16 tw-w-16 tw-rounded-full">

                                    </div>
                                    <div className="tw-mt-2 md:tw-mt-4 tw-text-right tw-leading-6 tw-text-xl tw-text-white tw-font-bold">
                                        <p>Premature <br />Withdrawal Facility</p>
                                    </div>
                                </div>
                                <div className="tw-py-4 tw-items-center tw-text-justify tw-text-md tw-text-black tw-rounded-b-xl tw-h-3/5 tw-bg-white tw-w-full">
                                    <div className="tw-mt-2">
                                        <div className="tw-float-right">
                                            <CustomWidthTooltip title={toolTip2}>
                                                <Button>
                                                    <AiFillInfoCircle className="tw-text-xl tw-text-nishblue-400 tw--mr-6 tw--mt-10" />
                                                </Button>
                                            </CustomWidthTooltip>

                                        </div>
                                        <div className="tw-mx-4">
                                            <p>Access your savings instantly, during emergencies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Invest_card_SDP;