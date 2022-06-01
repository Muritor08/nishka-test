import React from "react";

// Components
import HomePage from "../components/HomePage/HomePage";
import Otp_PL from "../components/OTP/otp";
import Emp_type from "../components/PL_calc/PL_calc";
import PL_calc from "../components/PL_calc/PL_calc";
import Salaried_Personal from "../components/Salaried_Personal/Salaried_Personal";
import Submitted from "../components/Submitted/Submitted";
import BusiOwner_PL from "../components/BusiOwnerPL/BusiOwnerPL";

const PL_Form = () => {

    return (
        <>
            <HomePage />
            <Otp_PL />
            <Emp_type />
            <PL_calc />
            <Salaried_Personal />
            <Submitted />
            <BusiOwner_PL />
        </>
    );
};

export default PL_Form;