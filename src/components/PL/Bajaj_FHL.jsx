import React from "react";
// import ScrollUpButton from "react-scroll-up-button";
import Steps from "./Components/Steps/Steps";
import Faq from "./Components/FAQ/Faq";
import AboutFHL from "./Components/FlexiHybrid/AboutFHL/AboutFHL";
import FeaturesFHL from "./Components/FlexiHybrid/FeaturesFHL/FeaturesFHL";
import InterestFHL from "./Components/FlexiHybrid/InterestFHL/InterestFHL";
import DocumentFHL from "./Components/FlexiHybrid/DocumentFHL/DocumentFHL";
import RequirementFHL from "./Components/FlexiHybrid/RequirementFHL/RequirementFHL";
import FeaturesFHLMob from "./Components/FlexiHybrid/FeaturesFHL/FeaturesFHLMob";

const Bajaj_FHL = () => {
    return (
        <>
            <AboutFHL />
            <FeaturesFHL />
            <FeaturesFHLMob />
            <InterestFHL />
            <DocumentFHL />
            <RequirementFHL />
            <Steps />
            <Faq />
            {/* <ScrollUpButton/> */}
        </>
    );
};

export default Bajaj_FHL;
