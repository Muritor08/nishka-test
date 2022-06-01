import React from "react";

// Components
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import fd_banner from "../FD/assets/fd_banner.png";
import Tabs from "./tabsMd";
import '../../index.css';

const FD_tabs = () => {

    return (
        <>
            <Header />
            <div className="tw-px-4">
                <img className="tw-w-full tw-mx-auto" src={fd_banner} />
            </div>
            <Tabs />
            <Footer />
        </>
    );
};

export default FD_tabs;