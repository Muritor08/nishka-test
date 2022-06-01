import React from "react";
// import {
//     Link,
// } from "react-router-dom";

// Components
import Faq from "./FAQ_SDP/Faq";
import SDP_Hero from "./SDP_Hero/SDP_Hero";
import Invest_card_SDP from "./InvestCards_SDP/Invest_cards_SDP";
import Steps from "./Steps/Steps";
import Table_SDP from "./Table_SDP/Table_SDP";
// import Calc from "./Calc/Calc";
import Un_benefits_SDP from "./UnmatchedBenefits_SDP/Un_benefits_SDP";
// import Features from "./Features/Features";
// import Requirements from "./Requirements/Requirements";
import Btn from "./btn/Btn";
// import Header from "../Layout/Header";
// import Footer from "../Layout/Footer";
// import fd_banner from "../FD/assets/fd_banner.png";
import '../../index.css';

const SDP_bajaj = () => {

    return (
        <>
            <div>
                {/* <Header />
                <div className="tw-px-4">
                    <img className="tw-w-full tw-mx-auto" src={fd_banner} />
                </div> */}
                <SDP_Hero />
                {/* <Features /> */}
                <Un_benefits_SDP />
                 {/* <Requirements /> */}
                <Invest_card_SDP />
                {/* <Calc /> */}
                <Table_SDP />
                <Steps />
                <Faq />
                <div className="tw-m-8 tw-text-left">
                <p>*Rate of interest per annum, applicable on a non-cumulative scheme tenor of 44 months for senior citizens.</p>
                    <p> **Rate of interest per annum, applicable on a non-cumulative scheme tenor of 44 months for non-senior citizens.</p>
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

export default SDP_bajaj;