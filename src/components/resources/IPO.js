import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IPO() {
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
        <div className="IPO" id="#IPO">
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
                    <Modal.Title><h2>Initial Public Offer (IPO)</h2></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>IPO</h3>
                    <p>An initial public offering (IPO) refers to the process of offering shares of a private company to the public in a new stock issuance. Public share issuance allows a company to raise capital from public investors. The transition from a private to a public company can be an important time for private investors to fully realize gains from their investment as it typically includes share premiums for current private investors. Meanwhile, it also allows public investors to participate in the offering.</p>
                    <h3>Why and when a private company go for an IPO</h3>
                    <p>Prior to an IPO, a company is a private. As a private company, the business grows with a relatively small number of shareholders including early investors like the founders, family, and friends along with professional investors such as venture capitalists or angel investors.</p>
                    <p>When a company reaches a stage in its growth process where it believes it is mature enough for the rigors of SEBI regulations along with the benefits and responsibilities to public shareholders, it will begin to advertise its interest in going public.</p>
                    <p>Typically, this stage of growth will occur when a company has reached a minimum valuation. However, private companies at various valuations with strong fundamentals and proven profitability potential can also qualify for an IPO, depending on the market competition and their ability to meet listing requirements.</p>
                    <p>An IPO is a big step for a company as it provides the company with access to raising a lot of money. This gives the company a greater ability to grow and expand. The increased transparency and share listing credibility can also be a factor in helping it obtain better terms when seeking borrowed funds as well.</p>
                    <p>IPO shares of a company are priced through underwriting due diligence. When a company goes public, the previously owned private share ownership converts to public ownership, and the existing private shareholders’ shares become worth the public trading price.</p>
                    <p>Share underwriting can also include special provisions for private to public share ownership. Generally, the transition from private to public is a key time for private investors to cash in and earn the returns they were expecting. Private shareholders may hold onto their shares in the public market or sell a portion or all of them for gains.</p>
                    <p>Meanwhile, the public market opens up a huge opportunity for millions of investors to buy shares in the company and contribute capital to a company’s shareholders' equity. The public consists of any individual or institutional investor who is interested in investing in the company.</p>
                    <p>Overall, the number of shares the company sells and the price for which shares sell are the generating factors for the company’s new shareholders' equity value. Shareholders' equity still represents shares owned by investors when it is both private and public, but with an IPO the shareholders' equity increases significantly with cash from the primary issuance.</p>
                    <h3> KEY TAKEAWAYS </h3>
                    <p>An initial public offering (IPO) refers to the process of offering shares of a private corporation to the public in a new stock issuance. </p>
                    <p>Companies must meet requirements by exchanges and the SEBI to hold an initial public offering (IPO).</p>
                    <p>IPOs provide companies with an opportunity to obtain capital by offering shares through the primary market.</p>
                    <p>Companies hire investment banks to market, gauge demand, set the IPO price and date, and more.</p>
                    <p>An IPO can be seen as an exit strategy for the company’s founders and early investors, realizing the full profit from their private investment. </p>

                    <h3>Types of IPO</h3>
                    <p>There are two common types of IPO. They are:</p>
                    <h3>Fixed Price Offering</h3>
                    <p>Fixed Price IPO can be referred to as the issue price that some companies set for the initial sale of their shares. The investors come to know about the price of the stocks that the company decides to make public.</p>
                    <p>The demand for the stocks in the market can be known once the issue is closed. If the investors partake in this IPO, they must ensure that they pay the full price of the shares when making the application.</p>
                    <h3>Book Building Offering</h3>
                    <p>In the case of book building, the company initiating an IPO offers a 20% price band on the stocks to the investors. The interested investors bid on the shares before the final price is decided. Here, the investors need to specify the number of shares they intend to buy and the amount they are willing to pay per share.</p>
                    <p>The lowest share price is referred to as floor price and the highest stock price is known as cap price. The ultimate decision regarding the price of the shares is determined by investors’ bids.</p>
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