import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Header from '../../Layout/Header'
import Footer from "../../Layout/Footer"
import "./Womenspehome.css"
import ScrollToTop from '../../ScrollToTop'
const cardDetails = [
    {
        id: 1,
        Video: "Tips_for_joining_after_a_career_break.mp4",
        content: "Tips that you can use to get back to work",
        link: "/tips"

    },
    {
        id: 2,
        Video: "Money_lessons_every_woman_should_learn_from_(1).mp4",
        content: "Money lessons for every woman",
        link: "/moneylesson"

    },
    {
        id: 3,
        Video: "Financial_plan.mp4",
        content: "Why is a financial plan needed for a better future",
        link: "/financialplan"

    },
    {
        id: 4,
        Video: "Emergency_funds_(1).mp4",
        content: "Everything you need to know about emergency fund",
        link: "/emergencyfunds"

    },
    {
        id: 5,
        Video: "Effective_ways_to_manage_your_tax.mp4",
        content: "Effective ways to manage your tax",
        link: "/tax"

    },
    {
        id: 6,
        Video: "Benefits_women_taking_home_loans.mp4",
        content: "Benefits of women taking home loans over men",
        link: "/womenloans"


    },
    // {
    //     id: 6,
    //     img: "thingsToKnow.jpg",
    //     content: "Things to know before you start investing",
    //     link: "/investing"


    // }
]


function WomenSpecialHome() {
    return (

        <div className="App backgroundColor" >
                  

            <ScrollToTop />
            <Header />
            <div className="container-fluid jumbotron">
                <h1 style={{ marginTop: "0px" }}>Women Special</h1>
                <p style={{ width: "80%", textAlign: "left", margin: "60px  auto 2% auto" }}>
                    Most of the Indians are still not making their investment decisions prudently nor they are doing the financial planning in a manner to meet their financial goals. Of this, the condition of women is even worse. On the top of it, the financial needs of women are different from men due to longer life expectancy, comparatively lower income level, lower awareness of financial products and markets and lower risk appetite.<span style={{ fontWeight: "bold" }}> Nishkaera</span>, through <span style={{ fontWeight: "bold" }}> WomenSpecial</span>, has created a unique platform to address this issue by:
                </p>
                <div>
                    <ul style={{ width: "80%", margin: "1% auto", textAlign: "left" }}>
                        <li><span style={{ fontWeight: "bold" }}>Learning: </span>Bridging the knowledge gap by educating on various investment avenues available.
                        </li>

                        <li><span style={{ fontWeight: "bold" }}>Planning: </span>Proper financial planning through financial consultant.</li>

                        <li><span style={{ fontWeight: "bold" }}>Investing: </span> Providing a best-in-class platform for investment.</li>
                    </ul>
                </div>

                <p className="" style={{ width: "80%", margin: "2% auto", textAlign: "left" }}>
                    Our curated platform aims to inspire women to educate themselves, invest and achieve their dreams and aspirations. In this manner they can participate in the growth of the country in inclusive manner. We have captured various aspects related to woman’s life and investment in our blogs.
                </p>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {cardDetails.map((card, i) => (
                        <Col key={i}>
                            <Card className="mb-3 p-3" style={{ height: "32rem" }}>
                                {card.img ? <Card.Img className=" image-video" variant="top" src={card.img} /> : <video
                                    className="image-video"
                                    src={card.Video}
                                    controls

                                ></video>}
                                <Card.Body style={{ padding: "0px" }}>


                                    <Card.Text style={{ padding: " 0px", margin: "12px 0px 3px 0px" }} className="card-text">{card.content}</Card.Text>
                                    <Card.Link className="card-text" href={card.link} >
                                        Read full article here
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <Footer />

        </div>
    )
}

export default WomenSpecialHome