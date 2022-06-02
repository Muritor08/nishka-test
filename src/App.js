import React, { useEffect, useState } from "react";
// import logo from './NE_logo.png';
import "./App.css";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import Learn from "./components/resources/Learn";
import Loans from "./components/resources/Loans";
import MutualFunds from "./components/resources/MutualFunds";
import ProvidentFund from "./components/resources/ProvidentFund";
// import FixedDeposit from "./components/resources/FixedDeposit";
import Insurance from "./components/resources/Insurance";
import CreditCard from "./components/resources/CreditCard";
import CryptoCurrency from "./components/resources/CryptoCurrency";
import RealEstate from "./components/resources/RealEstate";
import Gold from "./components/resources/Gold";
import Shares from "./components/resources/Shares";
// import IPO from './components/resources/IPO';
import NRI_bajaj from "./components/FD/NRI_bajaj";
import AltInvestment from "./components/resources/AltInvestment";
import FD_tabs from "./components/FD/FD_tabs";
import Careers from "./components/Careers/Careers";
import Disclaimer from "./components/Disclaimer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SocialPost from "./components/blogs/SocialPost";
import Faqs from "./components/Faqs";
import ContactUS from "./components/ContactUs";
import Invest from "./components/resources/Invest";
import Grow from "./components/resources/Grow";
import KnowYourFP from "./components/financialpulse/KnowYourFP";
import MoreWomenSpecial from "./components/women/MoreWomenSpecial";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import WomenSpecialHome from "./components/women/womenspecial/WomenSpecialHome";
import Tips from "./components/women/Tips";
import MoneyLessons from "./components/women/MoneyLessons";
import FinancialPlan from "./components/women/FinancialPlan";
import EmergencyFunds from "./components/women/EmergencyFunds";
import IPO from "./components/resources/IPO";
// import Investing from './components/women/Investing';
import Tax from "./components/women/Tax";
import WomenLoans from "./components/women/WomenLoans";
import IPOnew from "./components/markets/IPO";
import Webinar from "./components/webinar/Webinar.js";

// import Admin from "./components/Admin/Admin";

// import Updatelatest from "./components/Admin/Updatelatest";
// import Latestpage from "./components/Admin/Latestpage";
import DetailedFP from "./components/financialpulse/DetailedFPNew";
import Details from "./components/Details/Details";
import PrivateRoute from "./PrivateRoute";

import { Switch, Route } from "react-router-dom";
import Plans from "./components/Plans/Plans";
// import { AppContext } from "./context/AppContext";
// import axios from "axios";
import VerificationSent from "./components/Auth/VerificationSent";
import ThankyouForReg from "./components/Auth/ThankyouForReg";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPass from "./components/Auth/ResetPass";
import ScrollToTop from "./components/ScrollToTop";
import FD from "./components/FD/FD";
// import Bajaj_finserv from "./components/FD/Bajaj_finserv";

import Main from "./components/PL/Main";
import Hero from "./components/PL/Components/Hero/Hero";

// import FD_Form from "./components/FD/FD_Form/FD_Form";
import Mob_ver from "./components/FD/FD_Form/components/Mobile_ver/step1";
import Otp_ver from "./components/FD/FD_Form/components/OTP/otp_sent";
import Kyc_HomePage from "./components/FD/FD_Form/components/Kyc_completion/kyc_home";
import Aadhar_ver from "./components/FD/FD_Form/components/Aadhar_ver/AadharVer_home";
import Aadhar_record from "./components/FD/FD_Form/components/Aadhar_ver/Aadhar_record";
import Invest_home from "./components/FD/FD_Form/components/Investment_details/Invest_home";
import Personal_home from "./components/FD/FD_Form/components/Personal_details/Personal_home";
import Aadhar_otp from "./components/FD/FD_Form/components/Aadhar_ver/Aadhar_otp";

// import PL_Form from "./components/PL/PL_Form/components/PL_Form";
import HomePage from "./components/PL_Form/components/HomePage/HomePage";
import Otp_PL from "./components/PL_Form/components/OTP/otp_sent";
import Emp_type from "./components/PL_Form/components/EmploymentType/Emp_type";
import PL_calc from "./components/PL_Form/components/PL_calc/PL_calc";
import Salaried_Personal from "./components/PL_Form/components/Salaried_Personal/Salaried_Personal";
import Submitted from "./components/PL_Form/components/Submitted/Submitted";
import Submitted_BO from "./components/PL_Form/components/SubmittedBO/Submitted_BO";
import BusiOwner_PL from "./components/PL_Form/components/BusiOwnerPL/BusiOwnerPL";
// import UploadFile from "./components/PL_Form/components/FileUpload/FileUpload"

import SDP_bajaj from "./components/FD/SDP_bajaj";
import Blog from "./components/blogs/Blog/Blogs";
import youtube from "./components/blogs/youtube";
import twitter from "./components/blogs/twitter";
import LatestPost from "./components/Latestpost";
import facebook from "./components/blogs/facebook";
import instagram from "./components/blogs/instagram";

import TermsOfUse from "./components/TermsOfUse";
import Shriram_temp from "./components/FD/FD_table/Shriram_temp";
import IIFL_temp from "./components/PL/Components/IIFL_temp";
import IIFL_temp_BL from "./components/BL/Components/IIFL_temp_BL";
import Main_BL from "./components/BL/Main";
import HomeLayoutHOC from "./components/PL_Form/HOC/Home.Hoc"


import { CategoryPost, PostDetails } from "./components/blogs/Blog/Components";



function App() {

  // const {checktoken}=useContext(AppContext)

  //  useEffect(()=>{

  //  },[])

  return (
    <ScrollToTop>
      <div className="App">
        <Switch>
          {/* Auth */}
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Plans" component={Plans} />
          <Route exact path="/EmailSent" component={VerificationSent} />
          <Route exact path="/Thankyou" component={ThankyouForReg} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/reset/:token" component={ResetPass} />
          {/* <OurStory /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/OurStory" component={OurStory} style={{textAlign:"center"}}/>
          {/* <Route exact path="/OurStory" component={OurStory} /> */}
          <Route exact path="/FixedDeposits" component={FD} />
          <Route exact path="/FixedDeposits/bajaj" component={FD_tabs} />
          {/* <Route exact path="/FixedDeposits/shriramt" component={Shriram_temp} /> */}
          <Route exact path="/PersonalLoan" component={Main} />
          <Route exact path="/PersonalLoan/IIFL" component={IIFL_temp} />
          <Route exact path="/BajajPersonalLoan" component={Hero} />
          <Route exact path="/NRI" component={NRI_bajaj} />
          <Route exact path="/SDP" component={SDP_bajaj} />
          <Route exact path="/BL/IIFL" component={IIFL_temp_BL} />
          <Route exact path="/BL" component={Main_BL} />
          {/* FD FORM */}

          <Route exact path="/form" component={Mob_ver} />
          <Route exact path="/form/otpverification" component={Otp_ver} />
          <Route exact path="/form/otpverification" component={Otp_ver} />
          <Route exact path="/form/kyc" component={Kyc_HomePage} />
          <Route exact path="/form/aadharverification" component={Aadhar_ver} />
          <Route exact path="/form/otpadhaar" component={Aadhar_otp} />
          <Route exact path="/form/adhaarrecord" component={Aadhar_record} />
          <Route exact path="/form/personaldetails" component={Personal_home} />
          <Route exact path="/form/investment" component={Invest_home} />
          {/* <Route exact path='/tabs' component={FD_tabs} /> */}

          {/* PL FORM */}
          {/* <Route exact path="/PLForm" component={PL_Form} /> */}
          <HomeLayoutHOC exact path="/PLForm/home" component={HomePage} />
          <HomeLayoutHOC exact path="/PLForm/verify/otp" component={Otp_PL} />
          <HomeLayoutHOC exact path="/PLForm/empType" component={Emp_type} />
          <HomeLayoutHOC exact path="/PLForm/calc" component={PL_calc} />
          <HomeLayoutHOC exact path="/PLForm/salariedPL" component={Salaried_Personal} />
          <HomeLayoutHOC exact path="/PLForm/bOwnerPL" component={BusiOwner_PL} />
          <HomeLayoutHOC exact path="/PLForm/submittedSL" component={Submitted} />
          <HomeLayoutHOC exact path="/PLForm/submittedBO" component={Submitted_BO} />
          {/* <Route exact path="/PLForm/fileUpload" component={UploadFile} /> */}

          {/* Resources */}
          <Route exact path="/Learn" component={Learn} style={{textAlign:"center"}} />


          <Route path="/Blogs" component={Blog} />
          <Route path="/post/:postId" component={PostDetails} />
					<Route path="/category/:categoryId" component={CategoryPost} />


          <Route exact path="/Invest" component={Invest} style={{textAlign:"center"}} />
          <Route exact path="/Grow" component={Grow} style={{textAlign:"center"}} />
          <Route exact path="/Webinar" component={Webinar} />
          {/* Resource Links  */}
          <Route exact path="/Loans" component={Loans} />
          <Route exact path="/MutualFunds" component={MutualFunds} />
          <Route exact path="/ProvidentFund" component={ProvidentFund} />
          {/* <Route exact path="/FixedDeposit" component={FD_tabs} /> */}
          <Route exact path="/Insurance" component={Insurance} />
          <Route exact path="/CreditCard" component={CreditCard} />
          <Route exact path="/Gold" component={Gold} />
          <Route exact path="/CryptoCurrency" component={CryptoCurrency} />
          <Route exact path="/RealEstate" component={RealEstate} />
          <Route exact path="/Shares" component={Shares} />
          <Route exact path="/IPO" component={IPO} />
          <Route exact path="/AltInvestment" component={AltInvestment} />

          {/* Financial pulse */}
          <Route exact path="/Score" component={KnowYourFP} style={{textAlign:"center"}}/>
          <Route
            exact
            path="/ComprehensiveFinancialPulse"
            component={DetailedFP}
            style={{textAlign:"center"}}
          />

          <Route exact path="/Details" component={Details} style={{textAlign:"center"}}/>

          {/* Women Special */}
          <Route exact path="/WomenSpecial" component={MoreWomenSpecial} style={{textAlign:"center"}} />
          <Route exact path="/WomenSpecialHome" component={WomenSpecialHome} style={{textAlign:"center"}} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/moneylesson" component={MoneyLessons} />
          <Route exact path="/financialplan" component={FinancialPlan} />
          <Route exact path="/emergencyfunds" component={EmergencyFunds} />
          {/* <Route exact path="/investing" component={Investing}/> */}
          <Route exact path="/tax" component={Tax} />
          <Route exact path="/womenloans" component={WomenLoans} />

          {/* Markets */}
          <PrivateRoute exact path="/IPOWatch" component={IPOnew} style={{textAlign:"center"}}/>
          {/* Social Links  */}
          <Route exact path="/SocialPost" component={SocialPost} />
          <Route exact path="/latestpost" component={LatestPost} />
          <Route exact path="/youtube" component={youtube} />
          <Route exact path="/twitter" component={twitter} />
          <Route exact path="/facebook" component={facebook} />
          <Route exact path="/instagram" component={instagram} />

          {/* Footer */}
          <Route exact path="/Careers" component={Careers} style={{textAlign:"center"}}/>
          <Route exact path="/Disclaimer" component={Disclaimer} />
          <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/Faqs" component={Faqs} style={{textAlign:"center"}}/>
          <Route exact path="/Contact" component={ContactUS} />
          <Route exact path="/TermsOfUse" component={TermsOfUse} />

          {/* Admin */}
          {/* <Route exact path="/latest" component={Latestpage}/> 
           <Route exac path="/latest/:id" component={Updatelatest}/> */}
        </Switch>
        {/* <Header /> */}
        {/* <Carousel /> */}
        {/* <Test /> */}
        {/* <FinancialPulse /> */}
        {/* <OneStopSolution /> */}
        {/* <WomenSpecial /> */}
        {/* <Latest /> */}
        {/* <Footer /> */}
        {/* <SocialFollow /> */}
        {/* <AboutUs /> */}
        {/* <OurStory /> */}
      </div>
    </ScrollToTop>
  );
}

export default App;
