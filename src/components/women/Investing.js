import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
function Investing() {

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
                    <Modal.Title>Things to know before you start investing </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>By Bhumika Khandelwal </p>
                    <p>Investment has become an essential part of everyone’s financial health. We make investments in various asset classes based on our research and analysis and also based on advice that we take from a friend, family member or a financial advisor.  </p>
                    <p>The investment can be made on any type of asset such as mutual fund, equity, gold, government bond, real estate, fixed deposit, insurance etc. It is important that you know where you are putting our money, what is the process involved and what are the risks involved and how realistic are your return expectations from these investments. </p>
                    <h5>What do I need to do before making an investment? </h5>
                    <img className="w-100" src="thingsToKnow.jpg" alt="thingsToKnow"></img>
                    <p>There are a few things that you need to know or have before you make any kind of investment. It can be either some documents or information.  </p>
                    <p>Starting with, you may need documents like Pan Card, Bank Account Details, Aadhaar Card, and address proof. Depending upon the type of investment that you are making you may also be asked to provide documents like bank statements, salary slips, investment and liabilities details, credit score etc. Keeping these documents ready will be really handy at the time of making the investment. </p>
                    <p>Nowadays most of the investment that you make can be done online. So, you may be required to upload soft copies of documents in most of the cases. Keep them handy too! Also, make yourself aware about the online process fully so that you do not make any error while filling the details.  </p>
                    <h5>What can I invest in? </h5>
                    <p>When you have money to make some investments you must know where you want to put that money. Let’s talk about the common types of investments here. </p>
                    <h5>Equity </h5>
                    <p>Equity, stocks or shares are issued by companies to raise money from the public through an IPO (Initial Public Offer). The shares of such companies are then traded in the secondary markets which are also called stock exchanges like Sensex and NSE. Investors can either buy shares through an IPO or by buying from stock exchanges. This is one of the most popular investment options due to possibilities of high returns. However, keep in mind that with high return comes high risk also. </p>
                    <h5>Mutual Funds </h5>
                    <p>Mutual fund is an indirect way to invest into shares and debt instruments. As the name suggests, it involves a group of people coming together with their funds to invest into stocks, debt or a combination of both. Such a fund is managed by a fund manager. Basic types of mutual funds are equity funds, debt funds and hybrid or balanced funds. Depending upon the risk appetite and return expectations, investors can choose from various types of mutual funds to invest. One can either invest a lump sum amount or can choose the SIP (Systematic Investment Plan) route. </p>
                    <h5>Bonds </h5>
                    <p>Bonds are highly secure debt instruments that enable an entity to raise funds and fulfil its capital requirements. It is a category of debt that borrower’s avail from individual investors for a specified tenure. </p>
                    <p>Organisations, including companies, governments, municipalities and other entities, issue bonds for investors in primary markets. The corpus thus collected is used to fund business operations and infrastructural development by companies and governments alike.
                        Investors purchase bonds at face value or principal, which is returned at the end of a fixed tenure. Issuers extend a percentage of the principal amount as periodical interest at fixed or adjustable rates. </p>
                    <h5>Real Estate </h5>
                    <p>You could buy a house, a commercial property or a small piece of land. Investing in real estate is one of the most preferred investment asset classes in India. Although, it could take a good amount of time as investment in real estates are not possible to liquidate in a short period. </p>
                    <h5>Fixed Deposit </h5>
                    <p>A bank fixed deposit (FD) is also called a term or time deposit, as it is a deposit account with a bank for a fixed period of time.
                        It entitles the investor to predetermined interest payments and return of the deposited sum on maturity.</p>
                    <h5>Gold </h5>
                    <p>Investment in gold has the potential to beat inflation over a long period. It is a safe haven when economic growth is slow and when traditional asset classes such as equity and debt are underperforming. </p>
                    <p>As an investment, one can purchase it as coins including the Indian Gold Coins available at designated branches of MMTC, bars, jewellery, or through mutual funds known as gold ETFs (Exchange Traded Funds) or gold funds and the gold bonds and gold deposit scheme. </p>
                    <h5>Public Provident Fund (PPF) </h5>
                    <p>PPF is one of the safest investment options and provides among the highest returns in terms of interest as well as tax benefits and is therefore one of the most popular investment options particularly for risk averse investors. </p>
                    <p>This option also provides the best benefit of compounding wherein the interest is given on the interest accrued on deposited your amount during the year </p>
                    <h5>Things which can impact your financial health while you invest </h5>
                    <p>Honestly, investments are a great way to earn money but along the gains comes risks. One should know about the risk which comes along with these types of investments at all times or they might end up in losses.  </p>
                    <p>One of the common reasons why many investors bear a heavy amount of risk is because they invest the majority of their money in a single asset class like real estate or stocks. This not only leads to huge loss of capital but severely dent investor confidence. </p>
                    <p>So, what else do you need apart from money when you are ready to invest? Yes, you need proper knowledge and analysis of the asset that you plan to invest. Many times people get overconfident and too excited seeing a big gain in a particular investment opportunity. It is not a bad thing but it often leads them to invest based on their gut feeling and not based on facts and figures. Such actions can at times wipe the entire capital of the investor.  </p>
                    <p>Not to forget, some people lose their patience when returns from their investment are not as per the expectations. Let me tell you this, if you have done a good analysis of the asset you have invested, you need to be patient. Sometimes, things don’t work out the way you want them to be but eventually you will make money. </p>
                    <h5>How to be confident while investing? </h5>
                    <p>Start with investing time first. Spend a proper time learning about the type of investment you want to be connected to. Take up a course. Research. Learn to analyse the market. </p>
                    <p>In case you have a busy schedule, contact a financial advisor. An expert who can advise you on what type of investments you should be making. It is always a great idea to talk to someone with experience.  </p>
                    <p>Build your network. Connect with your friends or family who have a financial background or deal with any type of investments. Ask about their experience. Talk about your research and knowledge so far. </p>
                    <p>Gather information about more than one type of investment asset class. Diversification is a great way to manage your risk and reward.  </p>
                    <p>Trust yourself. Trust your gut feeling. It is not easy putting your money out there knowing that there is always a risk. But with risk comes great success. Just know that among other risks, no self- belief is the biggest one. </p>
                    <p>Finally, even after taking enough precautions the returns on the investment may not be in line with your expectations because a lot many factors are beyond our control in this globalised world. So, keep an eye on what is happening around you and make suitable changes in your investment portfolio from time to time. </p>
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

export default Investing
