import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gold() {
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
        <div className="Gold" id="#Gold">
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
                    <Modal.Title>Gold</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>Traditional use of gold in India</h3>
                    <ul>
                        <li>In India, gold is seen as an asset that is suitable for long term wealth creation.
                        </li>
                        <li>It is also used as a collateral for loans and is therefore seen as an asset to fall back on when in need for funds.</li>
                        <li>Indians are among the largest retail buyers of gold in the world.
                        </li>
                        <li>Traditional allocation to gold among even middle- class households may be high due to the purchase of jewellery. </li>
                        <li>However, Gold jewels have limited investment value due to their high making costs, no income generating power, and limited sale to realize the gain due to the emotional attachment to jewels. Jewels are usually recycled and sold to be reinvested in new jewels.
                        </li>
                        <li>Gold is mostly bought by central banks as part of the reserves they like to keep. </li>
                    </ul>
                    <h3>Investment potential of Gold
                    </h3>
                    <ul>
                        <li>Investment in gold has the potential to beat inflation over a long period.
                        </li>
                        <li>It is a safe haven when economic growth is slow and when traditional asset classes such as equity and debt are underperforming.</li>
                        <li>As an investment, one can purchase it as coins including the Indian Gold Coins available at designated branches of MMTC, bars, jewellery, or through mutual funds known as gold ETFs (Exchange Traded Funds) or gold funds and the gold bonds and gold deposit scheme launched in November, 2015.
                        </li>
                    </ul>
                    <h3>Investment in gold ETFs and gold funds</h3>
                    <ul>
                        <li>ETFs and gold funds (mutual funds that invest in gold ETFs) remove the issues of storage, assurance of purity, liquidity and the facility for regular investment associated with physical holding in gold.
                        </li>
                        <li>Gold ETFs invest in 99.5% purity gold which is held with the custodians. Divisibility of the investment in ETF is high since even one unit of gold ETF can be liquidated or sold in the market.</li>
                        <li>In the case of physical gold, while it is easy to sell gold, liquidating it for smaller values may be an issue, unless the investor is holding gold in the smallest physical denomination possible. Moreover, the deductions on account of wastage and making charges, among others, at the time of sale of gold jewellery can eat into the realisable value..
                        </li>
                    </ul>
                    <p>
                        Though SIP is not possible in an ETF structure, there are three ways in which regular systematic investment in gold may be possible:
                    </p>
                    <ul>
                        <li>Buy a gold savings fund. Gold Savings Fund is a fund of funds that holds ETFs. It gives investors indirect way of investing through SIP in gold ETF. Even investors who do not have demat accounts can take exposure in this way to a Gold ETF. Only drawback is the higher expense ratio for the FoF structure.
                        </li>
                        <li>SIP options may be provided by online brokers.
                        </li>
                        <li>Setting up manual reminders for investing in gold.</li>
                    </ul>
                    <h3>
                        How much of your portfolio you should invest in gold?
                    </h3>
                    <ul>
                        <li>Allocation to gold in a strategic portfolio should not ideally be over 10%.
                        </li>
                        <li>It may be used primarily to take advantage of its low correlation with other assets, and the ability to accumulate it in small lots compared to other alternate assets. .
                        </li>
                        <li>Tactical allocation to gold goes up during times of risk and uncertainty when gold is seen as a store of value.</li>
                    </ul>
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