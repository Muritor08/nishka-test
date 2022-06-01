import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function EmergencyFunds() {
    const [show, setShow] = useState(true)
    const history = useHistory()
    function handleclose() {
        setShow(false)
        history.goBack("/WomenSpecialHome")

    }
    return (
        <div>

            <Modal
                className="modalBackdrop"
                show={show}
                onHide={handleclose}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Everything you need to know about Emergency Fund</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>By Bhumika Khandelwal </p>
                    <video className="w-100" src="Emergency_funds_(1).mp4" controls/>
                    <p>If there is one financial term that has gained maximum relevance in recent times than ever before it has to be Emergency Fund. </p>
                    <p>A lot many people in India and across the globe in all pandemic affected countries suffered huge financial difficulties for various reasons like loss of business, jobs, huge medical expenses, loss of earning members of the family. The emergency came from nowhere and its impact was unknown. A lot of families got into financial trouble because they were not having financial resources available with them to tide through the pandemic which made their situation worse. A lot of such families would have suffered less had they planned their finances better and had an emergency fund to their rescue. </p>
                    <h5>What is this emergency fund everybody talks about?</h5>
                    <p>Emergency fund, as the name suggests, is an amount of sum available to you in the form of liquid assets which you can use in case of any kind of emergency be it career break, medical emergency, job loss, unplanned travel, special occasions or any other kind of emergency in the family.  </p>
                    <h5>How can I create an emergency fund? </h5>
                    <p>Now, when you know the importance of having an emergency fund, let's talk about how you can create this fund. Like any other financial goal for which you save and invest, you have to do it for the emergency fund as well. Your emergency fund could be created in many ways. It could be an SIP investment, fixed deposit, recurring deposit, liquid funds, savings account etc. </p>
                    <p>It is always a good idea to keep your emergency fund in a liquid state. You never know when you need them. The best way is to divide the emergency fund amount between two or more asset classes. For example, if you have an emergency fund with Rs. 80,000 then divide it.</p>
                    <p>Rs. 80,000 can be divided into: - </p>
                    <ul>
                        <li>Rs. 15,000-20,000 as cash. </li>
                        <li>Rs. 20,000-25,000 in the savings account of your bank (so as to gain some interest on it) </li>
                        <li>Rs 15,000-20,000 in fixed deposit in a bank (fetches higher interest rates than savings account). </li>
                        <li>Rs. 15,000-20,000 in SIP investments (liquid funds which can give you better returns than a Fixed deposit). </li>
                    </ul>
                    <h5>How much amount do I need to keep in my emergency fund? </h5>
                    <p>Now, when you know the importance of an emergency fund and how to distribute the funds into various assets, there remains one important aspect of an emergency fund, what amount makes your emergency fund. This is a unique amount for everyone and it depends upon a lot many factors. However, generally it is advised to have an emergency fund equivalent to your six-month expenses. That’s the minimum you should have and you can always keep more funds depending upon factors like financial liabilities, medical liabilities, dependence on single earning members, uncertainty with your job or business etc.</p>
                    <h5>Here is some important things to remember </h5>
                    <p>As someone saving for future, there are things you should never forget which are: - </p>
                    <ul>
                        <li>If you live off your paychecks, long-term funds are not for you. Not till you earn enough. </li>
                        <li>Before you start saving, make your monthly expense plan. That's going to give you a better idea on how much more you can save. </li>
                        <li>Buying something for your luxury does not count as an emergency.  </li>
                        <li>Do not stop saving for anything else before covering your 6 months expense minimum. </li>
                        <li>Save at least 20%-30% of your monthly income in order to reach your goals positively. </li>
                    </ul>
                    <p>With a proper goal to save money, if anything else is required to succeed in creating your investment plan then it’s patience. Many times, you see something nice and want to purchase it without thinking twice. These are the desperate times where you need to stick to your plan and go ahead with what’s more important to you. </p>
                    <p>So don't wait for any more panic situation to come your way before you start working on having an emergency fund. Start it today to ensure a more secure life for your family. </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleclose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default EmergencyFunds
