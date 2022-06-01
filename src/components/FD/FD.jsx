import React from "react";

// Components
import Main_Hero from "./Main_Hero/Main_Hero";
import Invest_main from "./Invest_main/Invest_main";
import FD_table from "./FD_table/FD_table";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import fd_banner from "../FD/assets/fd_banner.png";
import '../../index.css';

const FD = () => {

    return (
        <>
            <Header />
            <Main_Hero />
            <Invest_main />
            < FD_table />
            <Footer />
        </>
    );
};

export default FD;