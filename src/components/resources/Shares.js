import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Shares() {

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
        <div>
            <Modal className="modalBackdrop"
                show={show}
                onHide={handleClose}
                // onExiting={'./Learn'}
                animation={true}
                onClick={handleClose}
                onClose={closeModal}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Shares</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h2>What are shares? </h2>
                    <p> When you talk about investment options then you can’t complete any discussion without talking about investment in shares.
                        There is a lot to learn about investing in shares and parallelly there is always huge demand to get the proper and authentic information about investment in shares. Reforms in the share market and technology revolution has created even bigger interest among people to invest in shares.
                        Given the importance of shares in the investment world it is important to understand this investment process from the very beginning.</p>
                    <p>Any company after its incorporation and bringing its product or services into the market need capital on regular basis to run the operation of the company and grow. Every company has various sources available to it to fund its capital requirement. Initially, it does it through internal accrual including cash from operations, capital infusion by the promoters and other associates.
                        As the requirement for additional funds go up, it may be necessary to source funds from a wider group of investors. One of the ways to raise capital from outside investors is by offering a small portion of share in the ownership of the company to the large number of people in exchange of certain amount. They do that by the way of Initial Public Offer or what we generally call IPO.
                        Once you apply and get allotment of shares through the IPO you become a small investor in the company that is you share the ownership of the company with all other investors. Now once the company is listed on stock exchange through IPO the shares bought by investors are tradable on secondary market where you can buy more shares or sell your existing holding. In simple terms since a share is a document certifying your ownership in a company, you can sell it to someone for a price.
                        The number of shares held by you determines the percentage of holding you have in the company. So, if a company is worth Rs.10 crore and you hold shares worth Rs.10 lakh, then you are a 1% partner in the company. Shares are also known by other names like securities or stocks.</p>

                    <p>Similarly, for companies who are already listed on the stock exchanges like NSE or BSE you can buy their shares you can buy their shares from the secondary market. Lets know more about it.</p>
                    <h2>How to buy or sell a share? Understanding the securities market.</h2>
                    <p>The market in which shares or securities are issued, purchased by investors and subsequently transferred among investors is called the securities market.
                        The securities market has two interdependent and inseparable segments, viz., the primary market and the secondary market. The primary market, also called the new issue market, is where issuers or the company raise capital by issuing securities to investors. This is where IPO are launched by the issuers and shares are issued by them to the public at a pre-determined share price.
                        The secondary market, also called the stock exchange, facilitates trade in already-issued securities, thereby enabling investors to exit from an investment or to accumulate more, if it meets their expectations. So, once you get shares from primary market through and IPO you can trade in those shares in the secondary market or what we call the stock exchanges.
                        The risk and rights represented in a securities investment is transferred from one investor (seller) to another (buyer) in the secondary markets. The primary market creates financial assets and the secondary market makes them marketable.</p>
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