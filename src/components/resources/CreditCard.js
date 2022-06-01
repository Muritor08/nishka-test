import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreditCard() {
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
        <div id="#CreditCard">

            <Modal className="modalBackdrop"
                show={show}
                onHide={handleClose}
                // onExiting={'./Learn'}
                animation={true}
                onClick={closeModal}
                size="lg"

            >
                <Modal.Header closeButton>
                    <Modal.Title><h2>Credit Card</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>


                    <h3>Introduction to Credit cards</h3>
                    <p>A credit card is a thin rectangular piece of plastic issued by a financial company that lets cardholders to borrow funds with which users can pay for the purchase of goods and services. Credit cards work on the condition that cardholders must pay back the borrowed money, plus interest, as well as any additional agreed-upon charges.</p>
                    <p>A credit card provider may also enable them to borrow money in the form of cash advances. Issuers customarily pre-set the borrowing limits, based on an individual's credit rating. Most financial companies let the customer make purchases with credit cards, making them one of the most popular payment methodologies for buying consumer goods and services.</p>

                    <h4>What is Credit Card?</h4>
                    <p>Most major credit cards, including Visa, MasterCard, American Express, and Discover, are issued by banks, credit unions, or other financial institutions. Many credit cards attract customers by offering incentives such as airline miles, hotel room rentals, gift certificates to major retailers, and cash back on purchases.</p>


                    <h4>Types of Credit Cards:</h4>
                    <ul>
                        <li>Many retail establishments come up with branded versions of credit cards, with the store's name emblazoned on the card, to generate customer loyalty. Such cards are easier to get for consumers and offer perks such as special discounts, promotional offers, and cashbacks.</li>
                        <li>Secured credit cards are those that is to be secured with a security deposit. Such cards offer limited lines of credit that are equal in value to the security deposits.</li>
                    </ul>

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