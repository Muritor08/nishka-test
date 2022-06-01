import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const IIFL_temp_BL = () => {
    return (
        <>
            <Header />
            <div className="tw-w-full tw-h-screen">
                <iframe className="tw-w-full tw-h-full" src="https://creditlink.finbox.in/?partnerCode=FQ_OSLBBB"></iframe>
            </div>
            <Footer />
        </>
    );
};

export default IIFL_temp_BL;
