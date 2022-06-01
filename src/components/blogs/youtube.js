import React from 'react';
import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
import SocialFollow from '../social/SocialFollow';
import ScrollToTop from '../ScrollToTop';
import './blogs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import '../social/SocialFollow.css'

import CuratorWidget from '../CuratorWidget';


export default function youtube() {
    return (
        <div style={{ backgroundColor: "lightGrey" }}>
            <ScrollToTop />
            <Header />
            <div className="row justify-content-evenly" style={{ color: '#3AD4AF', backgroundColor: "Gray" }}>
                
                <div className="col-12 border border-3">

                    <div className="h4 container-fluid sp-mt">
                        NishkaEra on YouTube
                        <a
                            href="https://www.youtube.com/channel/UCboiaf0to-PrBpvPFXlqimQ"
                            className="youtube social"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
                    </div>
                    {/* Saurabh's id  */}
                    {/* <CuratorWidget feedId="6f1c6b2c-6210-4360-aaee-90f5c75c15f2" /> */}
                    {/* <CuratorWidget feedId="6bfed42e-c57e-4f2f-bce4-2b85a6d10179" /> */}
                    {/*  mukesh.vijayvergia@nishkaera.com */}
                    <CuratorWidget feedId="af69ffa3-9c5e-45cb-b85e-8f0447a9755c" />

                </div>
            </div>

            <SocialFollow />
        </div>
    );
}
