import React from 'react';
import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
import SocialFollow from '../social/SocialFollow';
import ScrollToTop from '../ScrollToTop';
import './socials.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook
} from "@fortawesome/free-brands-svg-icons";
import '../social/SocialFollow.css'

import CuratorWidget from '../CuratorWidget';


export default function facebook() {
    return (
        <div style={{ backgroundColor: "lightGrey" }}>
            <ScrollToTop />
            <Header />
            <div className="row justify-content-evenly" style={{ color: '#3AD4AF', backgroundColor: "Gray" }}>
                {/* <CuratorWidget feedId="a40403d9-3b68-4b31-bd48-fc73ca388db6" /> */}
                <div className="col-12 border border-3">

                    <div className="h4 container-fluid sp-mt" >
                        NishkaEra on Facebook
                        <a href="https://www.facebook.com/nishkaera/" className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                    </div>
                    {/* Buildstrust's ID */}
                    {/* {/* <CuratorWidget feedId="3ff6f122-07be-4260-9ce9-38b0f371170f" /> */}
                    {/*  mukesh.vijayvergia@nishkaera.com */}
                    <CuratorWidget feedId="af69ffa3-9c5e-45cb-b85e-8f0447a9755c" />
                </div> 
            </div>
            <SocialFollow />
        </div>
    );
}
