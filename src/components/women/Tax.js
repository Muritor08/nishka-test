import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function Tax() {
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
                    <Modal.Title>Effective ways to manage your tax </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <video className="w-100" style={{ height: "20rem" }} src="Effective_ways_to_manage_your_tax.mp4" controls />

                    <p>We always look for ways to save our taxes. Many people try to save tax using wrong means by misinformation or hiding certain information. Honestly, there are various ways to save tax which are perfectly legal. This simply means that people can use these ways to save tax instead of using wrongful means and then getting caught and paying heavy penalties for such an offense later.  </p>
                    <p>To start with, Income tax is a portion of your annual income which you pay to the government as per the income tax slab you fall into and the rate of tax defined by the government in its annual budget for that financial year. However, there are various ways and means which you can use which reduces your net taxable income. Here we are discussing some provisions which you can use to save tax. </p>
                    <p>One of the easiest ways to reduce tax is to invest in tax saving instruments. You can easily find a lot of investment opportunities listed under section 80C of the Income Tax Act. 80C allows deduction upto Rs. 1.5 lakh for the investment made in Public Provident Fund, Employee Provident Fund, LIC premium, Equity-linked Saving Scheme (ELSS), Annual principal amount payment towards home loan, Stamp duty and registration charges for purchase of property, Sukanya Smriddhi yojana (SSY), National saving certificate (NSC), Senior citizen savings scheme (SCSS), ULIP, tax saving FD for 5 years, Infrastructure bonds, Children Tuition fee etc.  </p>
                    <p>Other than provisions under section 80C, one can avail tax benefits under following provisions as applicable:  </p>
                    <ul>
                        <li>Section 24: Tax deduction on interest on home loan:  Interest deduction for housing loan upto Rs 2 lakh is available to you under Section 24 if the house property is self-occupied or vacant whereas if the house is rented, the entire interest amount can be deducted from the ‘Income from house property.  </li>
                        <li>Section 80 D: No pressure while paying your hospital bills- Medical treatments are pretty expensive these days. This is why one should get medical insurance. Individuals can claim a maximum deduction of Rs 25000 for medical insurance premium for self, spouse and dependent children.  </li>
                        <li>Section 80TTA: Depositing money on your savings account benefits you with interest. For taxation purpose, there is an exception upto Rs. 10,000 on the annual interest earned through your savings account.  </li>
                        <li>Section 80G: You can avail tax deduction on donations you gave to charitable institutions.  </li>
                        <li>Don't worry while selling your equity- The tax rule for equity is maintained at 10% tax if the amount of long-term capital gain exceeds Rs. 1 lakh. So there is no tax liability if your gain is less than Rs 1 lakh.</li>
                        <li>Section 80 E: An education loan helps you not only finance your foreign studies but it can save you a lot of tax as well. If you have taken an education loan and are repaying the same, then the interest paid on that education loan is allowed as a deduction from the total income under Section 80E.  </li>
                        <li>Section 80 EEB - Now buying an electric car comes with a lot of tax benefits for you apart from the environmental benefits. A deduction for interest payments up to Rs 1,50,000 on purchase of an electric vehicle is available under Section 80 EEB to an individual taxpayer for personal use or for business use. So, it's time to go electric now. </li>
                        <li>In case you have an extra income - if you have a way to earn any secondary income (which is not the part of your primary income) there is a tax benefit for you too. You can open a separate HUF account for your secondary income like rent from an ancestral property. </li>
                    </ul>
                    <p>Use various provisions discussed above to manage your tax liabilities effectively and invest the money saved to grow your wealth. </p>

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

export default Tax
