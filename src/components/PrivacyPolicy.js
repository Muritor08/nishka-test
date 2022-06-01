import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import { Card, CardDeck, Jumbotron } from 'react-bootstrap';
// import SocialFollow from './social/SocialFollow';
import ScrollToTop from '../components/ScrollToTop';

export default function PrivacyPolicy() {
    return (
        <div  >
            <ScrollToTop />
            <Header />
            <Jumbotron className="container-fluid" style={{marginTop:"6%"}} >
                <h1 className="sectionHeading" > Nishkaera Privacy Policy</h1>
                <p className="sectionParagraph h6">At Nishkaera Financial Advisory and Wealth Management Private Limited, we respect your privacy and are committed to protecting your personal information.Our privacy policy detailed below explains what information we may gather from your visit to our web sites and how such information may be used.</p>
                <br></br>
                <p className="sectionParagraph h6">We use the information that you provide to us when you register on a page on this site, fill out a survey, provide information for using a financial tool provided on website, or otherwise voluntarily tell us about yourself or your activities, for our own use to improve our products and services and the content of this site.In addition, we may use the information you provide us to send you marketing information about Nishkaera Financial Advisory and Wealth Management Private Limited’s products / services.</p>
                {/* <CardDeck >
                    <Card >
                    <Card.Body>
                    <Card.Title>How do we use information ? </Card.Title>
                    <Card.Text>
                    We use the information that you provide to us when you register on a page on this site, fill out a survey, provide information for using a financial tool provided on website, or otherwise voluntarily tell us about yourself or your activities, for our own use to improve our products and services and the content of this site.In addition, we may use the information you provide us to send you marketing information about Nishkaera Financial Advisory and Wealth Management Private Limited’s products / services.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </CardDeck> */}
                <br></br>
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Third party providers</Card.Title>
                            <Card.Text>
                                We may provide links to third party sites.As we do not control these web sites, Nishkaera Financial Advisory and Wealth Management Private Limited is not responsible for the privacy practices of those web sites or the reliability of the information presented by such web sites.We therefore encourage you to review the policies posted on these and all third - party web sites.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body >
                            <Card.Title>Profile and / or Registration Information </Card.Title>
                            <Card.Text>
                                The information and preferences you provide during registration is used for presenting and improving content and services that may be applicable to you.We may share this information with our partners only if you indicate interest in products that are serviced through our partners and their related concerns.We may use demographic and profile data for statistical analysis.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br></br>
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>Cookies </Card.Title>
                            <Card.Text>
                                Nishkaera Financial Advisory and Wealth Management Private Limited uses browser - based cookies mainly for the purpose of identifying you on subsequent visits to our web sites.Occasionally, information from cookies may be used to tailor services that may better suit you.Please note that should you disable your browser from accepting cookies, some information or services may not be able to you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Privacy Policy Updates </Card.Title>
                            <Card.Text>
                                As we add more features and services to help you make better financial decisions, we update our privacy policies from time to time.Please visit this page often to review latest information on privacy practices at Nishkaera Financial Advisory and Wealth Management Private Limited.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Jumbotron>
            <Footer />
        </div>
    );
}
