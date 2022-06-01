import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AltInvestment() {
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
        <div className="AltInv" id="#AltInv">
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
                    <Modal.Title>Alternative Investment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3>Alternative Investment</h3>
                    <p>An alternative investment is a financial asset that does not fall into one of the conventional investment categories. Conventional categories include stocks, bonds, and cash. Alternative investments include private equity or venture capital, hedge funds, managed futures, art and antiques, commodities, and derivatives contracts. Real estate is also often classified as an alternative investment</p>
                    <p>One of the most dynamic asset classes, alternatives cover a wide range of investments with unique characteristics. Many alternatives are becoming increasingly accessible to retail, or individual, investors—making knowing about them increasingly important for all types of investors and industry professionals.</p>
                    <h3>Key characteristics</h3>
                    <p>These types of investments can vary wildly in their accessibility and structure, but they share a few key characteristics:</p>
                    <ul>
                        <li>They're illiquid, meaning they can’t be easily sold or otherwise converted to cash
                        </li>
                        <li>They have a low correlation to standard asset classes, meaning they don’t necessarily move in the same direction as other assets when market conditions change</li>
                    </ul>
                    <p>While alternative investments share these key traits, they're also a diverse asset class.</p>

                    <h2>Types of Alternative Investments</h2>
                    <h3>Private Equity</h3>
                    <p>
                        Private equity is a broad category that refers to capital investment made into private companies, or those not listed on a public exchange, such as the NSE or BSE. There are several subsets of private equity, including:
                    </p>
                    <ul>
                        <li>
                            Venture capital, which focuses on startup and early-stage ventures
                        </li>
                        <li>
                            Growth capital, which helps more mature companies expand or restructure
                        </li>
                        <li>
                            Buyouts, when a company or one of its divisions is purchased outright
                        </li>
                    </ul>
                    <p>An important part of private equity is the relationship between the investing firm and the company receiving capital. Private equity companies often provide more than capital to the firms they invest in; they also provide benefits like industry expertise, talent sourcing assistance, and mentorship to founders.</p>
                    <h3>Private Debt</h3>
                    <p>
                        Private debt refers to investments that are not financed by banks (i.e., a bank loan) or traded on an open market. The “private” part of the term is important—it refers to the investment instrument itself, rather than the borrower of the debt, as both public and private companies can borrow via private debt.
                    </p>
                    <p>Private debt is leveraged when companies need additional capital to grow their businesses. The companies that issue the capital are called private debt funds, and they typically make money in two ways: through interest payments and the repayment of the initial loan.</p>
                    <h3>Hedge Funds</h3>
                    <p>Hedge funds are investment funds that trade relatively liquid assets and employ various investing strategies with the goal of earning a high return on their investment. Hedge fund managers can specialize in a variety of skills to execute their strategies, such as long-short equity, market neutral, volatility arbitrage, and quantitative strategies.</p>
                    <p>Hedge funds are exclusive, available only to institutional investors, such as endowments, pension funds, and mutual funds, and high-net-worth individuals.</p>
                    <h3>Real Estate</h3>
                    <p>There are many types of real assets. For example, land, timberland, and farmland are all real assets, as is intellectual property like artwork. But real estate is the most common type and the world’s biggest asset class.</p>
                    <p>In addition to its size, real estate is an interesting category because it has characteristics similar to bonds—because property owners receive current cash flow from tenants paying rent—and equity, because the goal is to increase the long-term value of the asset, which is called capital appreciation.</p>
                    <p>Like with other real assets, valuation is a challenge in real estate investing.Real estate valuation methods include income capitalization, discounted cash flow, and sales comparable, with each having both benefits and shortcomings.To become a successful real estate investor, it’s crucial to develop strong valuation skills and understand when and how to use various methods.</p>
                    <h3>Commodities</h3>
                    <p>Commodities are also real assets and mostly natural resources, such as agricultural products, oil, natural gas, and precious and industrial metals. Commodities are considered a hedge against inflation, as they're not sensitive to public equity markets. Additionally, the value of commodities rises and falls with supply and demand—higher demand for commodities results in higher prices and, therefore, investor profit.</p>
                    <h3>Collectibles</h3>
                    <p>Collectibles include a wide range of items, from rare wines to vintage cars to baseball cards. Investing in collectibles means purchasing and maintaining physical items with the hope the value of the assets will appreciate over time.</p>
                    <p>These investments may sound more fun and interesting than other types, but can be risky due to the high costs of acquisition, a lack of dividends or other income until they're sold, and potential destruction of the assets if not stored or cared for properly. The key skill required in collectibles investment is experience; you have to be a true expert to expect any return on your investment.</p>
                    <h3>Structured Products</h3>
                    <p>Structured products usually involve fixed income markets—those that pay investors dividend payments like government or corporate bonds—and derivatives, or securities whose value comes from an underlying asset or group of assets like stocks, bonds, or market indices. Examples of structured products include credit default swaps (CDS) and collateralized debt obligations (CDO).</p>
                    <p>Structured products can be complex and sometimes risky investment products, but offer investors a customized product mix to meet their individual needs. They're most commonly created by investment banks and offered to hedge funds, organizations, or retail investors.</p>
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