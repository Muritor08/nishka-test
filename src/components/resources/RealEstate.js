import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RealEstate() {
    const history = useHistory();

    const closeModal = e => {
        e.stopPropagation();
        history.goBack();
    };
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        history.goBack();
    }
    // const handleShow = () => setShow(true);
    return (
        <div className="RealEstate" id="#RealEstate">
            {/* <Button variant="primary" onClick={handleShow}>
                Loans
            </Button> */}
            <Modal className="modalBackdrop"
                show={show}
                onHide={handleClose}
                // onExiting={'./Learn'}
                animation={true}
                onClick={closeModal}
                size="lg"

            >

                <Modal.Header closeButton>
                    <Modal.Title>Real Estate</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3> What is Real Estate?</h3>
                    <p>Real Estate is one of the key investment option for investors in India. Investment in real sector is done keeping in view the appreciation in the property prices over the years and regular income like rental income. Real estate investment comprises of investment in residential properties and commercial properties for an individual investor.</p>
                    <p>Growth of investment in real sector in India was fuelled by reforms in the sector bringing higher transparency in the entire process. Reforms and development in real estate financing was another key development which has made it easier for larger section of population to buy properties by availing home loans and loans for commercial properties.</p>
                    <p>Investment in real estate require investor to invest higher capital compared to other investment option and investment in real estate is not a liquid investment compared to investment in stocks, mutual funds, gold or fixed deposit where an investor can withdraw the investment at any time.</p>


                    <p>Returns from real estate investment depends upon the time period for which the investment is made. Generally, investment for longer duration fetch better returns.Investment in real estate when a particular area is seeing a lot of investment opportunities is likely to fetch better returns than investing in areas which where growth has already peaked.Therefore, selection of right location of property, whether residential or commercial, is another important criterion affecting returns for such an asset.</p>
                    <p>Also, the rental income for properties given on rent depends upon the importance of the locality in which property is located.Property located in areas with good infrastructure, road, rail and air connectivity, good access to water, electricity medical and other facilities is likely to give investors good rental income as well as higher appreciation in price for sale in future.However, investor may have to pay a premium while buying such a property over buying properties in areas lacking in such facilities.So, investor needs to do a lot of research and due diligence before he or she finalise the property for purchase.</p>
                    <p>In order to boost the growth in the sector government has created the financial resources to fund residential and commercial projects and lot of incentives are provided to the industry time to time.Investors, in particular those buying residential property, are provided tax benefits under Income Tax Act to promote purchase of residential properties.</p>

                    <p>However, purchase of properties not only have cost attached with the property itself but an investor has to incur many other expenses also at the time of purchase of property.This includes registration charges, stamp duty charges, GST etc.Then there are regular maintenance charges which an investor has to pay especially of the property is part of a housing society or commercial complex.</p>
                    <p>However, investment in property do not have risk which an investor can have while investing in stocks.</p>
                    <p>Gains made in real estate are subject to capital gain tax with certain relaxation/exemption available on reinvestment of gains.</p>
                    <p>Overall real estate investment is good investment option for investor having a lot of surplus money or a very stable income source and for investor who is looking for diversification in his or her investment portfolio.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}