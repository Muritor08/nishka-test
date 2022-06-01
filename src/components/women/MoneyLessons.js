import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

function MoneyLessons() {

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
                    <Modal.Title>Money lessons every woman should know  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <video className="w-100" style={{ height: "20rem" }} src="Money_lessons_every_woman_should_learn_from_(1).mp4" controls />
                    <p>
                        In a perfect world, nobody needs to go to work and worry about savings and make vows to spend less. Unfortunately, the world we live in isn't so perfect and money problems are everywhere. Some of us are tired of our expense bills and others are still working on their saving plans. With every problem comes an experience and with every experience comes a lesson.
                    </p>
                    <p>Let's discuss some money lessons we could use while spending and saving both. Especially if you are a woman and also tired of being advised to get a man every time you struggle with your money issues. Well, we have something else for you in the store: </p>
                    <h5>Using too much of your credit card </h5>
                    <p>Credit cards in our generation are one of the easiest solutions to our month- end problems when the salary hasn't been credited yet and the flash sale at that store is important. But what you forget is your budget. Using a credit card simply means taking a loan for your luxury which can never be an ideal solution for your problems. Set a monthly expense limit for all your things including clothes, makeup, food, rent, etc. This way you will be able to avoid your credit card loans when not necessary</p>
                    <h5>Spending money without research </h5>
                    <p>Many times, we see something attractive and decide to purchase it. It could be a pair of jeans, some antique or overpriced cereal. Spending money on things you need is correct but spending on things without knowing their actual worth and their durability can lead you to spend more in the end. This leads to over expense which doesn't seem right for your monthly plan, does it?</p>
                    <p>Always know your products before buying them. Research about the product, select from many options available and then make the right choice. </p>
                    <h5>Pay attention to your funds </h5>
                    <p>Make the habit of keeping minimum cash with you. With so much rush in today's era, losing money has become a common thing. It could be stolen when you are going to the office in the metro or you could lose it while running in the subway. The best thing to do with your money is to keep it in the bank or a liquid fund and use digital mode of payment as far as possible. Withdraw cash only when it is required. This also allows you to receive interest on your deposited funds. Not to mention, inflation is a huge problem and keeping your funds as cash will only reduce its value over a period. </p>
                    <h5>Investing after being mansplained </h5>
                    <p>It's not always your fault ladies, rather we get it. You will get a lot of men trying to explain to you about all kinds of financial products. They are not going to stop explaining until you believe that they know everything about it. This leads you to invest in the type of products which do not give the desired returns. Fortunately, there are certified financial experts to help you out and guide you in investing as per your financial goals. So, if you are in a doubt don't hesitate in connecting with a certified financial advisor. </p>



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

export default MoneyLessons
