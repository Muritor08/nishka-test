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
                    <Modal.Title><h2></h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>What is a fixed deposit ?</h3>
                    <p>A bank fixed deposit(FD) is also called as a term or time deposit, as it is a deposit account with a bank for a fixed period of time.
                        It entitles the investor to pre - determined interest payments and return of the deposited sum on maturity.</p>
                    <h5>Is FD better option than keeping your money in savings account ?</h5>
                    <p>Fixed bank deposits offer higher returns than savings accounts as the money is available for use by the bank for a longer period of time.</p>
                    <h5>How to open a fixed deposit account ?</h5>
                    <p>A fixed deposit is created by opening an FD account with the bank which in turn issues an FD receipt.</p>
                    <h5>How interest in paid on the FD amount ?</h5>
                    <p>Interest on an FD can be paid into the depositor’s savings bank account at a predefined frequency, or accumulated and paid at the end of the term.
                        On maturity, the lump sum deposit amount is returned to the investor.Investors can also choose to renew the deposit on the maturity date.The minimum deposit amount varies across banks.
                        Banks also offer special rates to senior citizens, defined as those who are over 60 years of age.</p>
                    <h5>For what period an FD account can be opened ?</h5>
                    <p>The duration of deposits can range from 7 days to 10 years though FDs longer than 5 years are not very common.Interest on FD generally varies with the term of the deposit.</p>
                    <h5>Why fixed deposit is very popular among large section of investors ?</h5>
                    <h5>Safety :</h5>
                    <p>Fixed deposits are preferred by investors who like the safety that a bank provides and do not have an immediate need for the funds.Bank FDs are considered to be a safe investment option.This is because each depositor is insured up to Rs.1 lakh by the Deposit Insurance and Credit Guarantee Corporation(DICGC).It includes all deposits and interest on them, held across branches of a given bank.</p>
                    <h5>Liquidity:</h5>
                    <p>Though FDs are opened for a fixed term you can draw funds fully or partially at any time during the term of the FD after paying a certain penalty in terms of reduction in the interest rate payable on maturity.</p>
                    <h5>Tax Benefit:</h5>
                    <p>Investment in specified(under Section 80C of the Income Tax Act) 5 - year bank FDs are eligible for tax deductions up to a maximum amount of Rs.1 lakh, along with other investment options listed under the same section.These deposits are subject to a lock -in period of 5 years and have to be added back to the taxable income in the year of redemption.</p>
                    <h5>Assured return:</h5>
                    <p>A rate committed to be payable for a tenor, until maturity, does not change even if market interest rates change.New rates usually apply only for fresh deposits.</p>
                    <h5>Additional benefits:</h5>
                    <p>FD holders may enjoy additional benefits such as loan facility against the security of their FD receipts, or cash overdraft facility.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
