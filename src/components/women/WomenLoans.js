import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
function WomenLoans() {

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
                    <Modal.Title>Benefits of women taking home loans over men </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <video className="w-100" src="Benefits_women_taking_home_loans.mp4" controls />
                    <p>Many of us still dream of having our own space, something to call our home, somewhere to enjoy our time peacefully. A survey in 2019 found out that just 50% of the people are able to get themselves a place of their own, while others are still counting on renting a place for living. In the other 50% of the people, you will be surprised to know that most of these percentages contain women around the nation.  </p>
                    <p>That’s right! Many of the women find themselves incapable of buying a house but what if they find out that there’s a way? What if buying a home for a woman is easier than society thinks it is? Well, they say, "when there is a will, there’s a way." </p>
                    <p>Bank bazaar reported that under a year the number of home loans taken by women increased by 7.41%. This easily proves that women are giving more priority to having a space in recent years. Things have changed and soon more good results will come to light. </p>
                    <p>Let’s find out what are some of the benefits that are there for women if they buy a home: </p>
                    <h5>1.	Lower interest rate on home loan </h5>
                    <p>Women in comparison to men get home loans at lower rates. For instance, when there is a male borrower, he is entitled to pay an interest of say 6.75% p.a, at the same case if a woman acts as the primary or co borrower then she will be granted the loan with the interest rate reduced by 0.05 to 0.1. This also leads to less EMI instalments every month and overall reduction in the cost of the home for the buyer.  </p>

                    <h5>2.	Extension in tenure period </h5>
                    <p>A male borrower is allowed to take up a home loan for 20 years or the age of 65, whichever comes earlier but a female borrower can repay the loan in 30 years or before the age of 75, whichever is earlier. Even when a woman is included as a co- borrower and joint holder of a property, the tenure for that loan will be extended depending on the age of the woman. For instance, the primary borrower is a man who is 40 years old this means he will get a tenure of 20 years to pay the loan, now his wife comes into the picture who is 35 years old and now the tenure is simply increased to 30 years giving them extra time to complete the contract.  </p>

                    <h5>3.  Better chances of loan sanction </h5>
                    <p>Women are always seen as someone very careful about things. The one who remembers to pay their bills in time and also save for their needs. This is not just said but observed through various reports. So, if there is a woman who is borrowing money to build her house or is made a co- applicant, the chances of the loan being approved may increase.  </p>

                    <h5>4.	PMAY scheme brings great benefits for women </h5>
                    <p>PMAY scheme of government of India offer interest subsidy upto Rs 2.67 lakh on home loans but co-ownership is mandatory for availing this benefit. Also, under the Economically Weaker Section (EWS) and Low-Income Group (LIG) segments of the PMAY scheme, preference is extended to widows as well as single women.  </p>

                    <h5>Conclusion </h5>
                    <p>A home loan is approved after checking all the factors and necessary points. As a woman there are many benefits and one should use that benefit to finally achieve what they want. Not to forget, a woman plays a lot of roles in her life including a homemaker, a mother, a wife, a daughter, a struggler and an achiever. We hope each of them gets what they truly dream of.  </p>


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

export default WomenLoans
