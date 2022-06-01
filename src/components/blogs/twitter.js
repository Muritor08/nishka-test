import React from 'react';
import Header from '../Layout/Header';
// import Footer from '../Layout/Footer';
import SocialFollow from '../social/SocialFollow';
import ScrollToTop from '../ScrollToTop';
import './blogs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    // faYoutube
} from "@fortawesome/free-brands-svg-icons";
import '../social/SocialFollow.css'

import CuratorWidget from '../CuratorWidget';


export default function twitter() {
    return (
        <div style={{ backgroundColor: "lightGrey" }}>
            <ScrollToTop />
            <Header />
            <div className="row justify-content-evenly" style={{ color: '#3AD4AF', backgroundColor: "Gray" }}>
                {/* <CuratorWidget feedId="a40403d9-3b68-4b31-bd48-fc73ca388db6" /> */}
                <div className="col-12 border border-3">

                    <div className="h4 container-fluid sp-mt" >
                        NishkaEra on Twitter
                        <a href="https://www.twitter.com/nishkaera" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                    </div>
                    {/* Buildstrust's ID */}
                    {/* {/* <CuratorWidget feedId="3ff6f122-07be-4260-9ce9-38b0f371170f" /> */}
                    {/* <CuratorWidget feedId="3ff6f6ce-a3a6-4d72-b345-237c60869361" /> */}
                    {/*  mukesh.vijayvergia@nishkaera.com */}
                    <CuratorWidget feedId="3ff6f6ce-a3a6-4d72-b345-237c60869361" />
                </div> 
            </div>
            <SocialFollow />
        </div>
    );
}
