import React, { useState } from "react";
// import { AiOutlineInfoCircle } from "react-icons/ai";
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { useEffect } from "react";
// Component Imports
// import Example from "./List";
// import ColorSwitches from "./Switch";
import { Slider } from "@material-ui/core";
import { grey } from '@mui/material/colors';
// import { AiFillInfoCircle } from "react-icons/ai"


import { alpha } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };



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
You can choose how would you like to get interest gains: Lumpsum at maturity or Periodically at fixed intervals
`;
const Calc = () => {



    const [interest, setinterest] = useState(5.65);
    function handleChange() {
        if (interest == 5.75) {
            setinterest(6.00);
        } else {
            setinterest(5.75);
        }
    }



    function to_indian_format(y) {

        var x = y;
        x = x.toString();
        var afterPoint = '';
        if (x.indexOf('.') > 0)
            afterPoint = x.substring(x.indexOf('.'), x.length);
        x = Math.floor(x);
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

        return res;
    }


    const [pAmount, setpAmount] = useState(20000);
    // const interest = 5.9;
    const [duration, setDuration] = useState(12);
    const maxValue = 50000000
    // const intMax = 20;
    const maxDuration = 60;

    const maxtenure = duration;
    const [tenure, settenure] = useState(duration);


    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    var totalAmt = duration * emi;
    var TotalAmountofCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    var TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit);

    var month_interest = Math.round(TotalAmountofInterest / duration);


    TotalAmountofInterest = to_indian_format(TotalAmountofInterest);
    totalAmt = to_indian_format(totalAmt);
    month_interest = to_indian_format(month_interest);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    mm = (mm + duration - 6) % 12;
    var plus = Math.floor(duration / 12);
    yyyy += plus;

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "Septembr", "October", "Novembr", "December"];
    var month = monthNames[mm - 1];




    const color = grey[900];
    return (
        <>
            {/* Background Box */}
            <div className="tw-m-3 tw-h-auto tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Blue Border Box */}
                <div className=" tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto tw-border-4 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">

                        {/* Calculator Start */}
                        <h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-text-left tw-px-4">Calculator</h1>

                        {/* Container Div */}
                        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-12 tw-py-4">
                            <div className="tw-m-8 tw-flex tw-flex-col tw-justify-between md:tw-w-11/12 lg:tw-w-max tw-h-auto tw-border-black tw-shadow-xl tw-rounded-2xl">

                                {/* Left Div Start  */}
                                <div className="tw-w-5/6 md:tw-mt-10 tw-ml-4">

                                    {/* Investment Amount Component */}
                                    <div className="tw-mt-2 md:tw-m-8 md:tw-mt-0 tw-w-full">
                                        <h1 className="tw-text-xl md:tw-text-3xl tw-text-left tw-font-medium">
                                            Investment Amount
                                        </h1>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-justify-between">
                                            <div className="tw-flex tw-flex-row tw-gap-4 tw-items-center tw-w-4/6">
                                                {/* Text Input */}
                                                {/* <p className="tw-text-lg md:tw-text-xl tw-mt-4">Rs. </p> */}
                                                <p className="tw-text-md md:tw-text-lg tw-font-semibold">₹ 20k</p>
                                                {/* <input className="tw-mt-4 tw-p-2 tw-w-72 tw-outline-none tw-border-b-2 tw-border-black" type="text"></input> */}



                                                <Slider
                                                    size="small"
                                                    value={pAmount}
                                                    onChange={(event, vAmt) => { setpAmount(vAmt); }}
                                                    defaultValue={pAmount}
                                                    aria-label="Small"
                                                    min={20000}
                                                    max={maxValue}
                                                    step={1000}
                                                    // marks
                                                    color={color}
                                                    valueLabelDisplay="auto"
                                                />
                                                <p className="tw-text-md md:tw-text-lg tw-font-semibold">₹ 5Cr</p>
                                            </div>
                                            <div>
                                                <p className="tw-border-2 tw-border-solid tw-border-nishblue-400 tw-p-2 lg:tw-w-52 tw-font-semibold tw-rounded-md"> ₹ {pAmount}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Investment Tenure Component */}
                                    <div className="tw-mt-4 md:tw-mt-2 md:tw-m-8">
                                        <h1 className="tw-text-xl md:tw-text-3xl tw-text-left tw-font-medium">
                                            Investment Tenure
                                        </h1>
                                        {/* Slider Component */}
                                        <div className="tw-text-center md:tw-w-3/4 tw-mt-4 md:tw-m-6 tw-ml-0 tw-flex tw-flex-row tw-gap-2">
                                            <p className="tw-text-md md:tw-text-lg tw-font-semibold ">12 Months</p>
                                            {/* <Slider
                                                size="small"
                                                defaultValue={12}
                                                aria-label="Small"
                                                min={12}
                                                max={36}
                                                color={color}
                                                valueLabelDisplay="auto" 
                                            /> */}



                                            <Slider
                                                size="Small"
                                                value={duration}
                                                onChange={(event, vDur) => { setDuration(vDur); }}
                                                defaultValue={duration}
                                                aria-label="Small"
                                                min={12}
                                                max={maxDuration}
                                                color={color}
                                                valueLabelDisplay="auto"
                                            />




                                            <p className="tw-text-md md:tw-text-lg tw-font-semibold">60 Months  </p>
                                        </div>
                                    </div>

                                    {/* Interest Payout Component */}
                                    {/* <div className="tw-mt-4 md:tw-mt-2 md:tw-m-8">
                                        <div className="tw-flex tw-flex-row tw-items-center tw-gap-10">
                                            <h1 className="tw-text-xl tw-text-left md:tw-text-3xl tw-font-medium">
                                                Interest Payout
                                            </h1>
                                            <div>
                                                <CustomWidthTooltip title={toolTip1}>
                                                    <Button className="tw-float-right">
                                                        <AiFillInfoCircle className="tw-text-xl tw-text-nishblue-400 tw-mt-2" />
                                                    </Button>
                                                </CustomWidthTooltip>
                                            </div>
                                        </div>
                                        {/* Drop List Component */}
                                    {/* <Example /> */}

                                    {/* <Slider
                                                size="small"
                                                value = {tenure}
                                                onChange={(event, vtenu) => {settenure(vtenu);}}  
                                                defaultValue={1}
                                                aria-label="Small"
                                                min={1}
                                                max={maxtenure}
                                                color={color}
                                                valueLabelDisplay="auto"
                                            /> */}


                                    {/* </div>  */}

                                    {/* Senior Citizen Component */}
                                    <div className="tw-flex tw-flex-row tw-gap-4 tw-mt-6 md:tw-mt-2 tw-mb-8 md:tw-mb-8 md:tw-m-8">
                                        <p className="tw-font-semibold tw-text-md md:tw-text-lg">Are you a Senior Citizen?</p>

                                        {/* Switch */}
                                        {/* <ColorSwitches onChange={handlechange} /> */}



                                        <Switch {...label}
                                            onChange={handleChange}
                                            color="warning" />




                                    </div>

                                </div>
                                {/* Left Div Ends */}

                                {/* Right Div Starts */}
                                <div className="tw-w-1/4 tw-flex tw-flex-col md:tw-flex-row tw-gap-1">

                                    {/* Card 1 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-1/5 lg:tw-w-40 lg:tw-rounded-bl-xl tw-w-full tw-h-40 md:tw-h-48 lg:tw-h-40">
                                        <div className="tw-flex tw-flex-col tw-gap-1 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Interest Rate
                                            </p>

                                            <p className="tw-text-xl tw-text-white tw-font-black mt-4">
                                                {interest}%
                                                {/* {selecte.name} */}

                                            </p>
                                        </div>
                                    </div>

                                    <div className=" tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-1/5 lg:tw-w-40  tw-h-40 md:tw-h-48 lg:tw-h-40">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Interest Payout (Monthly)
                                            </p>
                                            <p className="tw-text-xl tw-text-white tw-font-black ">
                                                {/* Rs 1,475 */}
                                                ₹ {month_interest}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className=" tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-1/5 lg:tw-w-40 tw-h-40 md:tw-h-48 lg:tw-h-40">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Interest Payout        (On Maturity)
                                            </p>

                                            <p className="tw-text-xl tw-text-white tw-font-black">
                                                {/* Rs 1,475 */}
                                                ₹ {TotalAmountofInterest}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-1/5 lg:tw-w-40  tw-h-40 md:tw-h-48 lg:tw-h-40">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Matured By
                                            </p>

                                            <p className="tw-text-xl tw-text-white tw-font-black mt-3">
                                                {/* December 2022 */}
                                                {/* {duration} Months */}
                                                {month} {yyyy}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-1/5 lg:tw-w-40  lg:tw-rounded-br-xl tw-h-40 md:tw-h-48 lg:tw-h-40">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Maturity Amount
                                            </p>

                                            <p className="tw-text-xl tw-text-white tw-font-black mt-3">
                                                {/* Rs 26,475 */}
                                                ₹ {totalAmt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Right div ends */}

                            </div>

                            {/* Invest now Button */}
                            <button className="tw-m-auto tw-bg-nishyellow-400 tw-text-xl tw-w-56 tw-h-16 tw-rounded-md md:tw-w-40 md:tw-h-12 lg:tw-w-56 lg:tw-h-16 tw--mt-12 tw-font-semibold">
                                <a className="tw-text-black" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=IFA_Prime&utm_medium=B2B&utm_campaign=IFA_NISHKAERA_FINANCIAL_ADVISORY">
                                    Invest Now
                                </a>
                            </button>

                        </div>
                        {/* Container Div Ends */}

                    </div>
                </div>
                {/* Blue Border Box Ends */}
            </div>
            {/* Background Box Ends */}
        </>
    );
};


export default Calc;