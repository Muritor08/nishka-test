import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import Mob_ver from "./components/Mobile_ver/step1";
import Otp_ver from "./components/OTP/otp_sent";
import Kyc_HomePage from "./components/Kyc_completion/kyc_home";
import Aadhar_ver from "./components/Aadhar_ver/AadharVer_home";
import Aadhar_record from "./components/Aadhar_ver/Aadhar_record";
import Invest_home from "./components/Investment_details/Invest_home";
import Personal_home from "./components/Personal_details/Personal_home";
import Aadhar_otp from "./components/Aadhar_ver/Aadhar_otp";

function FD_Form() {
  return (
    <>
      <Router>
          <Route exact path='/' element={<Mob_ver />} />
          <Route exact path='/form/otpverification' element={<Otp_ver />} />
          <Route exact path='/form/otpverification' element={<Otp_ver />} />
          <Route exact path='/form/kyc' element={<Kyc_HomePage />} />
          <Route exact path='/form/aadharverification' element={<Aadhar_ver />} />
          <Route exact path='/form/otpadhaar' element={<Aadhar_otp />} />
          <Route exact path='/form/adhaarrecord' element={<Aadhar_record />} />
          <Route exact path='/form/personaldetails' element={<Personal_home />} />
          <Route exact path='/form/investment' element={<Invest_home />} />
      </Router>

      {/* <Kyc_HomePage />
      <Aadhar_ver />
      <Aadhar_otp />
      <Aadhar_xml />
      <Personal_home />
      <Invest_home /> */}
    </>
  );
}

export default FD_Form;
