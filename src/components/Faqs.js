import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import {Accordion,Card} from "react-bootstrap";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import SocialFollow from "./social/SocialFollow";
import ScrollToTop from "../components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import './components.css'

export default function Faqs() {
  const mTop = {
    margin: "4% 0% 2%",
  };
  function ContextAwareToggle({ children, eventKey, callback }) {
    // const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    // const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <p
        // type="button"
        style={{ color:'#3AD4AF',fontWeight:"500", textAlign:"left",cursor:"pointer" }}
        onClick={decoratedOnClick}
      >
        {children}
      </p>
    );
  }

  const faq = [
    {
      id: 0,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 1,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 2,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 3,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 4,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 5,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 6,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 7,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 8,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
    {
      id: 9,
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus leo nec quam vulputate auctor. Donec sed urna tincidunt, venenatis elit in, pulvinar nibh",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex sit amet nulla pellentesque consectetur. Sed ullamcorper tellus quis mattis vehicula. Nam bibendum, neque at rhoncus laoreet, lorem est tempor ex, vel laoreet orci sapien eget nulla. Praesent interdum nisl sit amet felis congue convallis.",
    },
  ];

  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1 style={mTop}>Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
{faq.map(f=>(
          <Card key={f.id} className="m-2 faqCard">
          <Card.Header>
            <ContextAwareToggle eventKey={`${f.id}`}>{f.q}</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${f.id}`}>
            <Card.Body style={{textAlign:"left"}}>{f.a}</Card.Body>
          </Accordion.Collapse>
        </Card>
))}
    </Accordion>

      </Jumbotron>
      <Footer />
      <SocialFollow />
      {/* <div className="h3">How we are achieving it?</div>
            <div className="p">We are achieving this by bringing our expertise in technology, financial services and customer focus to provide our customers with best-in-class and hassle-free financial platform to learn about various financial products and  buy them as per their choice.</div>
            <div className="h3">WomenSpecial: </div>
            <div className="p">Nishkaera also aspire to bridge the age old gap between women and investment by providing them specialised financial services with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and providing a platform to buy women-oriented financial products.</div> */}
    </div>
    </div>
  );
}
