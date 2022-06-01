import React from "react";
// import {
//     Link,
// } from "react-router-dom";

// Components
import Faq from "./FAQ/Faq";
import NRI_Hero from "./NRI_Hero/NRI_Hero";
import Invest_card_NRI from "./InvestCards_NRI/Invest_cards_NRI";
import Steps from "./Steps/Steps";
import Table_NRI from "./Table_NRI/Table_NRI";
// import Calc from "./Calc/Calc";
import Un_benefits_NRI from "./UnmatchedBenefits_NRI/Un_benefits_NRI";
// import Features from "./Features/Features";
// import Requirements from "./Requirements/Requirements";
import Btn from "./btn/Btn";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
// import fd_banner from "../FD/assets/fd_banner.png";
import '../../index.css';

const NRI_bajaj = () => {

    return (
        <>
            <div>
                {/* <Header />
                <div className="tw-px-4">
                    <img className="tw-w-full tw-mx-auto" src={fd_banner} />
                </div> */}
                <NRI_Hero />
                {/* <Features /> */}
                <Un_benefits_NRI />
                 {/* <Requirements /> */}
                <Invest_card_NRI />
                {/* <Calc /> */}
                <Table_NRI />
                <Steps />
                <Faq />
                <div className="tw-m-8 tw-text-left">
                    <p>*Rate of interest per annum, applicable on a cumulative scheme tenor of 36-60 months for senior citizens</p>
                    <p> **Rate of interest per annum, applicable on a cumulative scheme tenor of 36-60 months for non-senior citizens
                        applying online</p>
                    <div>
                        <a target="_blank" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=&utm_medium=B2B&utm_campaign=Online_Fintech">
                            <Btn />
                        </a>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default NRI_bajaj;