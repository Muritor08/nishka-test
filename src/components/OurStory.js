import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import { Card, CardDeck } from "react-bootstrap";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
// import SocialFollow from "./social/SocialFollow";
import ScrollToTop from "../components/ScrollToTop";
// import OurTeam from "./OurTeam/OurTeam";

// const backgroundImage =
//     'Women.jpg?auto=format&fit=crop&w=1400&q=80';

// const styles = (theme) => ({
//     root: {
//         color: theme.palette.common.white,
//         position: 'relative',
//         display: 'flex',
//         alignItems: 'center',
//         [theme.breakpoints.up('sm')]: {
//             height: '80vh',
//             minHeight: 500,
//             maxHeight: 1300,
//         },
//     },
//     container: {
//         marginTop: theme.spacing(3),
//         marginBottom: theme.spacing(14),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     backdrop: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundColor: theme.palette.common.black,
//         opacity: 0.5,
//         zIndex: -1,
//     },
//     background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         zIndex: -2,
//     },
//     arrowDown: {
//         position: 'absolute',
//         bottom: theme.spacing(4),
//     },
//     h3: {
//         color: 'black',
//         align: 'left',
//     }
// });

export default function OurStory() {
  return (
    <div className="App">
      
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1> Our Story</h1>
        <p style={{ width: "80%", margin: "40px  auto 2% auto" }}>
          Our country once known as <strong> Sone ke Chirya </strong>, was on
          the peak of trade and commerce, and were the limelight of globe, but
          over past centuries this pride has been lost.
        </p>

        <p style={{ width: "80%", margin: "0 auto 2%" }}>
          India is again at world stage to elevate economic development but
          there is still a lot that can be done in terms of bridging the gap of
          economic disparity and ensure the financial well-being of all. Though
          there are many Investment products and Risk coverage options
          available, the lack of awareness hurts the economic progress of
          individuals. One way to address this issue is to provide proper
          knowledge and robust financial platform to invest and grow.
        </p>

        <p style={{ width: "80%", margin: "0 auto 2%" }}>
          With a passion to be able to provide equal opportunity, we a group of
          individuals from distinguished fields of Business, Finance,
          Engineering and Technology have joined hands to build a much needed
          platform to offer seamless financial services.
        </p>

        <p style={{ width: "80%", margin: "0 auto 2%" }}>
          Nishkaera <strong>representing a golden era</strong> is an attempt to
          bring back those special virtues of our golden age, by blending
          best-in-class Technology with Financial knowhow, and providing a
          one-stop platform that can address diverse population, especially the
          women in-need of our society.{" "}
        </p>
        <CardDeck style={{ width: "80%", margin: "auto" }}>
          <Card>
            <Card.Body>
              <Card.Img variant="bottom" src="Mission.png" />
              <Card.Title className="mt-3">Our Mission </Card.Title>
              <Card.Text>
                To bring back the sense of golden-era, by provide an equal
                opportunity platform to people from all walks of life, and help
                address their financial needs and enable them in shaping a
                strong and sustainable future.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="bottom" src="Vision.png" />
              <Card.Title className="mt-3">Our Vision </Card.Title>
              <Card.Text>
                We foresee a future where every individual of our society is
                fully enabled through Nishkaera platform to be able to make
                fit-for-purpose financial decisions based on the comprehensive
                knowledgebase and tools.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck style={{ width: "80%", margin: "auto" }}>
          <Card>
            <Card.Body>
              <Card.Img variant="bottom" src="HowtoAchive.png" />
              <Card.Title className="mt-3">
                How we are achieving it?{" "}
              </Card.Title>
              <Card.Text>
                We are achieving this by bringing our expertise in technology,
                financial services and customer focus to provide our customers
                with best-in-class and hassle-free financial platform to learn
                about various financial products and buy them as per their
                choice.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="bottom" src="WomenStory.png" />
              <Card.Title className="mt-3">
                Specialised Women oriented service platform{" "}
              </Card.Title>
              <Card.Text>
                We aspire to bridge the age old gap between women and investment
                by providing them specialised financial services with the aim to
                enable them to achieve their financial freedom through mix of
                learning, seasoned advice and providing a platform to buy
                women-oriented financial products.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      {/* <OurTeam /> */}
      </Jumbotron>
      <Footer />
      {/* <SocialFollow /> */}
      {/* <div className="h3">How we are achieving it?</div>
            <div className="p">We are achieving this by bringing our expertise in technology, financial services and customer focus to provide our customers with best-in-class and hassle-free financial platform to learn about various financial products and  buy them as per their choice.</div>
            <div className="h3">WomenSpecial: </div>
            <div className="p">Nishkaera also aspire to bridge the age old gap between women and investment by providing them specialised financial services with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and providing a platform to buy women-oriented financial products.</div> */}
    </div>

  );
}
