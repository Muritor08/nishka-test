import React from "react";
// import {
//     Link,
// } from "react-router-dom";

// Components
import Faq from "./FAQ/Faq";
import Hero from "./Hero/Hero";
import Invest_card from "./InvestCards/Invest_cards";
import Steps from "./Steps/Steps";
import Table from "./Table/Table";
// import Calc from "./Calc/Calc";
import Un_benefits from "./UnmatchedBenefits/Un_benefits";
import Features from "./Features/Features";
import Requirements from "./Requirements/Requirements";
import Btn from "./btn/Btn";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
// import fd_banner from "../FD/assets/fd_banner.png";
import '../../index.css';
// import Tabs from "./tabsMd";

const Bajaj_Finserv = () => {

    return (
        <>
            <div>
                {/* <Header /> */}
                <Hero />
                <Features />
                <Un_benefits />
                <Requirements />
                <Invest_card />
                {/* <Calc /> */}
                <Table />
                <Steps />
                <Faq />
                <div className="tw-m-8 tw-text-left">
                    <p>*Rate of interest per annum, applicable on a non-cumulative scheme tenor of 44 months for senior citizens.</p>
                    <p> **Rate of interest per annum, applicable on a non-cumulative scheme tenor of 44 months for non-senior citizens.</p>
                    {/* <div>
                        <a target="_blank" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=&utm_medium=B2B&utm_campaign=Online_Fintech">
                            <Btn />
                        </a>
                    </div> */}
                    <div>
                        <a target="_blank" href="/form">
                            <Btn />
                        </a>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default Bajaj_Finserv;