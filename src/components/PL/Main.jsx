import React from "react";

import Main_Hero from "./Components/Main/Main_Hero/Main_Hero";
import FeaturesBenefits from "./Components/Main/FeaturesBenefits/FeaturesBenefits";
import FeaturesBenefitsMob from "./Components/Main/FeaturesBenefits/FeaturesBenefitsMob"
import EligibilityCriteria from "./Components/Main/EligibilityCriteria/EligibilityCriteria";
import InterestMain from "./Components/Main/InterestMain/InterestMain";
import EligibilityCriteriaMob from "./Components/Main/EligibilityCriteria/EligibilityCriteriaMob";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Main = () => {
    return (
        <>
            <Header />
            <Main_Hero />
            <FeaturesBenefits />
            <FeaturesBenefitsMob />
            <EligibilityCriteria />
            <EligibilityCriteriaMob />
            <InterestMain />
            <Footer />

        </>
    );
};

export default Main;
