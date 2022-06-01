import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FinancialPlanning() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div id="#FinancialPlanning">

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Financial Planning</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h2> Understanding your Financial Scorecard </h2>

                    <p>Financial scorecard has three sections viz financially vulnerable, financially coping and financially healthy.
                        Review the section as per your financial score to understand where you are in your financial journey.You can also check out the next section to how your journey will continue.</p>
                    <p><strong>Financially vulnerable</strong> - Financial score between 0-39 points</p>
                    <p><strong>Financially vulnerable</strong> means you likely have a hard time keeping up with your payment obligations like utilities bills, credit card bills etc and may be unable to save for the future.</p>
                    <p>A surprise bill such as a medical bill or car repair bill due to an accident can spell disaster when you’re in this position — you don’t have a financial cushion and might not have access to low interest loans or credit when you need to cover an unexpected expense.
                        Here are some resources that may help you in a crisis and lay the groundwork for greater financial security.</p>

                    <p> For more help read the following: </p>
                    <ul>
                        <li>How to manage your monthly bills.</li>
                        <li>Learning the basic of personal finance</li>
                    </ul>
                    <p> <strong>Financially coping</strong> - Financial score between 40-79 points</p>
                    <p>If your score is under "financially coping", you may be thriving in some areas but struggling in others.Perhaps you are buried by debt but manage to make all of your minimum payments on time, or you manage your debt well but aren’t saving for retirement.Like the financially vulnerable, an unexpected expense could destabilize you.</p>
                    <p>More than other groups, you may find helpful resources in all categories, but here are some to help address possible financial pain points and shore up your security.</p>
                    <ul>
                        <li>Manage your debt (article)</li>
                        <li>5 debt tips to keep you on track (article) </li>
                    </ul>
                    <p> <strong>Financially Healthy</strong> - Financial score between 80-100 points</p>
                    <p>Financially healthy folks are successfully managing all aspects of their financial life.They have good to excellent credit, a handle on debt, an emergency savings fund and are on the right track for retirement.The goal for you, if you fall in this category, is staying the course and reaching your financial goals.
                        Here are some resources to maximize your efforts and ensure you’re getting the most out of the optimal position you’re in.</p>
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