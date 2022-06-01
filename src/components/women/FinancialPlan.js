import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function FinancialPlan() {

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
                    <Modal.Title>Why you need a financial plan for a better future?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <video className="w-100" style={{ height: "20rem" }} src="Financial_plan.mp4" controls />
                    <h6>Warren Buffett said, “Do not save what is left after spending; instead spend what is left after saving.” </h6>
                    <p>Managing personal finance can be quite confusing. Having questions related to it is completely normal and one should be curious. Questions such as- </p>
                    <ul>
                        <li>What is the current status of your investments and liabilities? </li>
                        <li>What to do with the cash you have in the bank? Spend it or invest it? </li>
                        <li>How much to allocate your savings on buying an asset or spending on a requirement? </li>
                        <li>How to make your money earn for you? This is the one answer most of you have been looking for, right? </li>

                    </ul>
                    <p>So, other than being formal and allocating numbers which represent your earnings overall, financial planning answers the questions above. </p>
                    <p>Now, whether you are working part- time or sipping coffee as an employee of some multinational company, you my friend require a financial plan in order to be happy and wealthy with your ESI (expenses, savings and investments.) </p>
                    <h5>How exactly will a financial plan help? </h5>
                    <p>Having a financial plan will simply help you understand and have control over your current earnings and expenses in order to keep you out of heavy debts, loans or overdraft or any unexpected financial difficulty in future.  </p>
                    <p>Financial planning is especially important for people living on their pay-checks. A proper financial plan helps you to save from the existing earnings, find ways to manage expenses and make some investments. These investments create a corpus which you need when you plan for a career break, marriage, starting a family, kids education, travelling to your dream destination, buying a house or for your retirement.  </p>
                    <p>But many might say that these things can just be done with some amount of savings and investments, so why should one must go and put their efforts into preparing some heavy plan about their financial situation!  </p>
                    <p>Well, let’s explore what happens if they do make the effort for it. </p>
                    <h5>Better budget allocation </h5>
                    <p>Many times, you end up with absolutely no money at the end of the month right before the salary is about to be credited. Presence of a financial plan will help you list and understand all your general expenses and investments.  </p>
                    <p>Once you know how much you are spending for a specific item, your monthly investment in SIPs, stocks etc and your monthly EMIs, you can work out ways to save some amount so as to avoid the situation you face at the end of every month and even might end up having more money to invest. </p>
                    <h5>More savings than you expected </h5>
                    <p>Now that your expenses are allocated properly and you have an appropriate amount of savings every month, you can invest more. Now, the thing about some of the investments in the market is they come with a lot of benefits and tax allowances. Good returns and less tax to be paid. Bingo!  </p>
                    <h5>Be there for your family </h5>
                    <p>Nowadays, everything has a price and if you want something no matter what, you have no choice but to pay the price. It is difficult, isn’t it? Thinking about all the future expenses and not being prepared for it, well say no more. With the help of your own financial plan, you will be ready with good savings for your future.  </p>
                    <p>But are savings all which a good financial plan can help with? Well, no. Through the setup of good quality and number of liquid investments, you will be able to provide for your family whenever you require. This way you are never out of funds and earning good returns at the same time. But be cautious and research well about the investments you are choosing. </p>
                    <h5>Approach your goals fearlessly </h5>
                    <p>Your financial plan makes you independent and courageous to finally pursue the things you wanted to without worrying about money. Whether it’s pursuing another degree, starting a new business or setting yourself up with social services. Move ahead with no pressure. You go, girl! </p>
                    <h5>No tension about your pension </h5>
                    <p>Well, this basically refers to the time when you are old and want to relax by your poolside at all times. Generally, when people are in their 20s and 30s they don’t think a lot about their ESI and always end up working or living off their pension money when they are in their 50s. But guess what? With a well- functioned financial plan we think you will be able to do much more than just chilling by your poolside.</p>
                    <p>We know how tiring all this process sounds but hey, don’t sweat it. Reach out to us and we will help you get everything you want. Through Nishkaera, you can reach out to some experienced financial advisors and experts and get yourself all arranged for the future. Whether it’s retirement or your kid’s college finance or the dream business that you want to start. Let us help you out to settle your earnings for all the expenses coming in your way. </p>
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
export default FinancialPlan
