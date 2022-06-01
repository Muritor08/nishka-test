import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProvidentFund() {
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
        <div id="#ProvidentFund">

            <Modal className="modalBackdrop"
                show={show}
                onHide={handleClose}
                // onExiting={'./Learn'}
                animation={true}
                onClick={closeModal}
                size="lg"

            >
                <Modal.Header closeButton>
                    <Modal.Title><h2>Public Provident Fund</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3> PPF </h3>
                    <p> The objective of the Public Provident Fund or PPF is to provide a long-term retirement planning option to those individuals who may not be covered by the provident funds of their employers or may be self-employed. PPF is one of the safest investment options and provides among the highest returns in terms of interest as well as tax benefits and is therefore is one of the most popular investment options particularly for risk averse investors.
                        This option also provides the best benefit of compounding wherein the interest is given on the interest accrued on deposited your amount during the year. Since this plan is mandated by the government, it is backed up with gu
                        aranteed returns to protect the financial needs of the investors. Invested funds in the PPF account are not market-linked</p>

                    <h5> Where you can open your PPF account?</h5>
                    <p> PPF is a 15-year deposit account that can be opened with a designated bank or a post office. It can also be opened online with a few banks.</p>

                    <h5>Who can open a PPF account?</h5>
                    <p>An individual can open a PPF account at any age. A person can hold only one PPF account in their name except an account in the name of a minor child to whom he or she is a guardian.
                        HUFs and NRIs are not allowed to open PPF accounts.
                        If a resident subsequently becomes an NRI during the prescribed term, he/she may continue to subscribe to the fund till its maturity on a non-repatriation basis. Joint account cannot be opened; however, nomination facility is available.
                    </p>
                    <h5>What are the various investment criteria?
                    </h5>
                    <p>Minimum amount that needs to be deposited in this account is Rs. 500 per year. The maximum limit is Rs.1,50,000.
                        Subscription should be in multiples of Rs.5 and can be paid in one lump sum or in instalments not exceeding 12 in a financial year.
                        Regular deposits have to be made in the account over the term of the fund. Penalties apply if the minimum deposit is not made in a financial year.</p>
                    <h5>How the interest in calculated?
                    </h5>
                    <p>Interest on amount deposited is calculated on the lowest balance available in the account between 5th of the month and the last day of the month, however, the total interest in the year is added back to PPF only at year end. Interest is cumulated and not paid out. Interest rates currently payable on such accounts stands at 7.1%, and is subject to quarterly updates at the discretion of the government.</p>

                    <h5>When my PPF account matures and can I make withdrawal in between?
                    </h5>
                    <p>
                        The account matures after expiry of 15 years from the end of financial year in which the account was opened.
                        One withdrawal in a financial year is permissible from seventh financial year. Maximum withdrawal can be 50% of the balance amount at the end of the fourth year or the immediate preceding year, whichever is lower.
                        Premature closure of the PPF is allowed in cases such as serious ailment, education of children and such. This shall be permitted with a penalty of a 1% reduction in the interest payable on the whole deposit and only for deposits that have completed 5 years from the date of opening.</p>
                    <h5>Can I continue my account after maturity?</h5>
                    <p>On completion of term, the account can be closed or continued, with or without additional subscription, for further blocks of 5 years. Once an account is continued without contribution for more than a year, the option cannot be changed.
                        What happen to the invested amount in the event of death of the account holder?
                        In the event of the death of the account holder during the term of the scheme, the balance in the account shall be paid to the nominee or to the legal heir if the account does not have a nomination.</p>
                    <h5>What is the tax benefit on the amount invested in PPF?</h5>
                    <p>Contribution to PPF is eligible for deduction under sec 80C of Income tax Act 1961. Interest is completely tax free.
                        Unlike other instruments which are eligible for tax deduction under Section 80C, PPF enjoys an exempt-exempt-exempt (EEE) status, where withdrawal on maturity is also not taxed.
                        A PPF account is not subject to attachment (seizure of the account by Court order) under any order or decree of a court.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}












