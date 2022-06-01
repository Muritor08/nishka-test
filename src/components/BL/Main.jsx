import React from "react";

import Main_Hero from "./Components/Main/Main_Hero/Main_Hero";
import FeaturesBenefits from "./Components/Main/FeaturesBenefits/FeaturesBenefits";
import FeaturesBenefitsMob from "./Components/Main/FeaturesBenefits/FeaturesBenefitsMob"
import InterestMain from "./Components/Main/InterestMain/InterestMain";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import DocumentBL from "./Components/Main/DocumentBL/DocumentBL";

const Main_BL = () => {
    return (
        <>
            <Header />
            <Main_Hero />
            <FeaturesBenefits />
            <FeaturesBenefitsMob />
            <DocumentBL />
            <InterestMain />
            <Footer />

        </>
    );
};

export default Main_BL;
