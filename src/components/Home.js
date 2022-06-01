import React from "react";
import Header from "./Layout/Header";
import Carousel from "./carousel/Carousel";
import FinancialPulse from "./financialpulse/FinancialPulse";
import WomenSpecial from "./WomenSpecial";
import OneStopSolution from "./OneStopSolution";
// import Latest from "./Latest";
import ContactUs from "./ContactUs";
// import Trending_heading from "./Trending_heading";
import Nishka_socials from "./nishka_socials";
import Testimonials from "./Testimonials";
// import Nishka_socials_heading from "./nishka_socials_heading";

// import FinancialPlanning from './resources/FinancialPlanning';
// import Resources from './resources/Resources';

import Footer from "./Layout/Footer";
// import SocialFollow from "./social/SocialFollow";
import Marque from "./Marque";
import NishkaeraSpecial from "./NishkaeraSpecial/NishkeraSpecial"
import Special_heading from "./special_heading";
// import Trending from "./Trending";

function Home() {
  return (
    <div>
      <Header />
      <Marque />
      <Carousel />
      <FinancialPulse />
      <OneStopSolution />
      <Testimonials />
      <Special_heading />
      <NishkaeraSpecial />
      <WomenSpecial />
      <ContactUs />
      {/* <Trending_heading /> */}
      {/* <Trending /> */}
      {/* <Nishka_socials_heading /> */}
      <Nishka_socials />
      {/* <Latest /> */}
      {/* <ContactUS/>  */}
      {/* <FinancialPlanning /> */}
      {/* <Resources /> */}
      <Footer />
      {/* <AboutUs /> */}
      {/* <OurStory /> */}
    </div>
  );
}
export default Home;