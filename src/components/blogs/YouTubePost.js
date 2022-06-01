import React from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import SocialFollow from '../social/SocialFollow';
import ScrollToTop from '../ScrollToTop';

import CuratorWidget from '../CuratorWidget';


export default function YouTubePost() {
    return (
        <div style={{ backgroundColor: "lightGrey" }}>
            <ScrollToTop />
            <Header />
            <CuratorWidget feedId="6f1c6b2c-6210-4360-aaee-90f5c75c15f2" />
            {/* <CuratorWidget feedId="3ff6f122-07be-4260-9ce9-38b0f371170f" /> */}
            {/* <CuratorWidget feedId="6bfed42e-c57e-4f2f-bce4-2b85a6d10179" /> */}
            <Footer />
            <SocialFollow />
        </div>
    );
}
