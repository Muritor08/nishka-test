import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loans() {
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
        <div className="CryptoCurrency" id="#CryptoCurrency">
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
                    <Modal.Title>Crypto Currency</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3> What is CryptoCurrency</h3>
                    <p>
                        A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers.
                        A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.
                        Blockchains, which are organizational methods for ensuring the integrity of transactional data, are an essential component of many cryptocurrencies
                    </p>
                    <p>Cryptocurrencies are systems that allow for secure payments online which are denominated in terms of virtual "tokens," which are represented by ledger entries internal to the system.
                        "Crypto" refers to the various encryption algorithms and cryptographic techniques that safeguard these entries, such as elliptical curve encryption, public-private key pairs, and hashing functions.
                    </p>
                    <h3>Types of CryptoCurrency</h3>
                    <p>
                        The first blockchain-based cryptocurrency was Bitcoin, which still remains the most popular and most valuable. Today, there are thousands of alternate cryptocurrencies with various functions and specifications. Some of these are clones or forks of Bitcoin, while others are new currencies that were built from scratch.
                        Bitcoin was launched in 2009 by an individual or group known by the pseudonym "Satoshi Nakamoto." As of March 2021, there were over 18.6 million bitcoins in circulation with a total market cap of around $927 billion.2
                        Some of the competing cryptocurrencies spawned by Bitcoin’s success, known as "altcoins," include Litecoin, Peercoin, and Namecoin, as well as Ethereum, Cardano, and EOS. Today, the aggregate value of all the cryptocurrencies in existence is around $1.5 trillion—Bitcoin currently represents more than 60% of the total value.
                    </p>
                    <h3>Advantages of Cryptocurrency</h3>
                    <p>Cryptocurrencies hold the promise of making it easier to transfer funds directly between two parties, without the need for a trusted third party like a bank or credit card company. These transfers are instead secured by the use of public keys and private keys and different forms of incentive systems, like Proof of Work or Proof of Stake.
                        In modern cryptocurrency systems, a user's "wallet," or account address, has a public key, while the private key is known only to the owner and is used to sign transactions. Fund transfers are completed with minimal processing fees, allowing users to avoid the steep fees charged by banks and financial institutions for wire transfers.
                        Central to the appeal and functionality of Bitcoin and other cryptocurrencies is blockchain technology, which is used to keep an online ledger of all the transactions that have ever been conducted, thus providing a data structure for this ledger that is quite secure and is shared and agreed upon by the entire network of an individual node, or computer maintaining a copy of the ledger. Every new block generated must be verified by each node before being confirmed, making it almost impossible to forge transaction histories
                    </p>
                    <h3>Disadvantages of cryptocurrency</h3>
                    <p>The semi-anonymous nature of cryptocurrency transactions makes them well-suited for a host of illegal activities, such as money laundering and tax evasion.
                        However, cryptocurrency advocates often highly value their anonymity, citing benefits of privacy like protection for whistle-blowers or activists living under repressive governments. Some cryptocurrencies are more private than others.
                        Bitcoin, for instance, is a relatively poor choice for conducting illegal business online, since the forensic analysis of the Bitcoin blockchain has helped authorities arrest and prosecute criminals. More privacy-oriented coins do exist, however, such as Dash, Monero, or ZCash, which are far more difficult to trace.
                        As cryptocurrencies are virtual and are not stored on a central database, a digital cryptocurrency balance can be wiped out by the loss or destruction of a hard drive if a backup copy of the private key does not exist.
                    </p>
                    <p>
                        Since market prices for cryptocurrencies are based on supply and demand, the rate at which a cryptocurrency can be exchanged for another currency can fluctuate widely, since the design of many cryptocurrencies ensures a high degree of scarcity.
                        Bitcoin has experienced some rapid surges and collapses in value, climbing above  $60,000 per Bitcoin in April 2021 before dropping to around $35,000 in May 2021 Cryptocurrencies are thus considered by some economists to be a short-lived fad or speculative bubble.
                        There is concern that cryptocurrencies like Bitcoin are not rooted in any material goods. Some research, however, has identified that the cost of producing a Bitcoin, which requires an increasingly large amount of energy, is directly related to its market price.
                    </p>
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