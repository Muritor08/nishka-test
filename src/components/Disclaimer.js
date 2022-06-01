import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Footer from './Layout/Footer';
import SocialFollow from './social/SocialFollow';
import Header from './Layout/Header';
import ScrollToTop from '../components/ScrollToTop';

export default function Disclaimer() {
    const mTop = {
        marginTop: '0%',
    };
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Card className="container" style={{marginBottom:"3%",marginTop:"10%"}}>
                <br></br>
                <Card.Title><h1 style={mTop}>Disclaimer </h1></Card.Title>
                <Card.Body>
                    {/* <Card.Text className="h6 justifyContent"> */}
                        <p>Information provided on this website is general in nature and does not constitute financial advice.Nishkaera Financial Advisory and Wealth Management Private Limited will endeavour to update the website on a regular basis.However, information can change without notice and Nishkaera Financial Advisory and Wealth Management Private Limited do not guarantee the accuracy of information on the website, including information provided by third parties, at any particular time.</p>
                        <p>Every effort has been made to ensure that the information provided on the website is accurate.However, you must not rely on this information to make a financial or investment decision.Before making any decision, we recommend you to consult a financial planner to take into account your particular investment objectives, financial situation and individual needs.</p>
                        <p>Nishkaera Financial Advisory and Wealth Management Private Limited do not give any warranty as to the accuracy, reliability or completeness of information which is contained in this website.Except insofar as any liability under statute cannot be excluded, Nishkaera Financial Advisory and Wealth Management Private Limited and its employees do not accept any liability for any error or omission on this web site or for any resulting loss or damage suffered by the recipient or any other person.</p>
                        <p>Unless otherwise specified, copyright of information provided on this website is owned by Nishkaera Financial Advisory and Wealth Management Private Limited.You may not alter or modify this information in any way, including the removal of this copyright notice.</p>
                    {/* </Card.Text> */}
                </Card.Body>
            </Card>
            <Footer />
            <SocialFollow />
        </div >
    );
}
