import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

export default function SocialFollow() {
    return (
        <div className="text-center socialMediaColor">
            <div>
            <h3 style={{ justifyContent: "normal" }}>Our Social Links</h3>
            <a
                href="https://www.linkedin.com/company/nishkaera/"
                className="linkend-in social"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
                href="https://www.facebook.com/nishkaera/"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.youtube.com/channel/UCboiaf0to-PrBpvPFXlqimQ"
                className="youtube social"
            >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.twitter.com/nishkaera" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/nishkaera/"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            {/* Footer Bottom  */}
            <div className="footer-bottom" >
                <p className="text xs center" style={{ top: '5px', position: 'relative',marginBottom:"0" }}>
                    &copy;{new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
            </div>

        </div>
    );
}
