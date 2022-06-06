import React from 'react';
import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
import SocialFollow from '../social/SocialFollow';
import ScrollToTop from '../ScrollToTop';
import './socials.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../social/SocialFollow.css'

import CuratorWidget from '../CuratorWidget';


export default function instagram() {
    return (
        <div style={{ backgroundColor: "lightGrey" }}>
            <ScrollToTop />
            <Header />
            <div className="row justify-content-evenly" style={{ color: '#3AD4AF', backgroundColor: "Gray" }}>
                {/* <CuratorWidget feedId="a40403d9-3b68-4b31-bd48-fc73ca388db6" /> */}
                <div className="col-12 border border-3">

                    <div className="h4 container-fluid sp-mt" >
                        NishkaEra on Instagram
                        <a href="https://www.instagram.com/nishkaera/" className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                    </div>
                    {/* Buildstrust's ID */}
                    {/* {/* <CuratorWidget feedId="3ff6f122-07be-4260-9ce9-38b0f371170f" /> */}
                    {/*  mukesh.vijayvergia@nishkaera.com */}
                    <CuratorWidget feedId="821f8418-1467-4514-8e17-2c8e472fbebf" />
                </div> 
            </div>
            <SocialFollow />
        </div>
    );
}
