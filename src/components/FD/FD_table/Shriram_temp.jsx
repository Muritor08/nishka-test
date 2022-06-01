import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const Shriram_temp = () => {
    return (
        <>
            <Header />
            <div
                style={{height:"150vh"}} className="tw-w-full tw-h-screen tw-mt-7">
                <iframe
                className="tw-w-full tw-h-full" height="600" width="320" src="https://cos.stfc.in/cos/affiliate/cos_schemedetails.aspx?Affiliatecode=DEBMUM054&SubAffiliatecode=FQ653"></iframe>
            </div>
            <Footer />
        </>
    );
};

export default Shriram_temp;