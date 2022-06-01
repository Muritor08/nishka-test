import React from "react";
// import ScrollUpButton from "react-scroll-up-button";
import AboutFL from "./Components/FlexiLoan/AboutFL/AboutFL";
import FeaturesFL from "./Components/FlexiLoan/FeaturesFL/FeaturesFL";
import InterestFL from "./Components/FlexiLoan/InterestFL/InterestFL";
import DocumentFL from "./Components/FlexiLoan/DocumentFL/DocumentFL"
import RequirementFL from "./Components/FlexiLoan/RequirementFL/RequirementFL";
import Steps from "./Components/Steps/Steps";
import Faq from "./Components/FAQ/Faq";
import FeaturesFLMob from "./Components/FlexiLoan/FeaturesFL/FeaturesFLMob";



const Bajaj_FL = () => {
    return (
        <>
        
            <AboutFL/>
            <FeaturesFL/>
            <FeaturesFLMob />
            <InterestFL/>
            <DocumentFL />
            <RequirementFL />
            <Steps/>
            <Faq/>
            {/* <ScrollUpButton/> */}
        </>
    );
};

export default Bajaj_FL;
