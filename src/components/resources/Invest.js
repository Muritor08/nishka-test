import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import SocialFollow from "../social/SocialFollow";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import TabComponent from "./TabComponent";

export default function Invest() {
  const mTop = {
    marginTop: "3%",
  };

  const details = [
    {
      id: 1,
      title: "Loans",
      img: "Loan.jpg",
      text: "A loan is essentially money borrowed with a promise to return within a specific time period. The lender of the loan.",
      link: "/Loans",
    },
    {
      id: 2,
      title: "Mutual Funds",
      img: "MutualFund.jpg",
      text: "A mutual fund is a trust that pools the savings of a number of investors who share a common financial goal and investments.",
      link: "/MutualFunds",
    },
    {
      id: 3,
      title: "Provident Fund",
      img: "PPF_240_F_123181896.jpg",
      text: "The objective of the PPF is to provide a long-term retirement planning option to those individuals",
      link: "/ProvidentFund",
    },
    {
      id: 4,
      title: "Fixed Deposit",
      img: "FD_240_F_174864214.jpg",
      text: "A bank fixed deposit (FD) is also called as a term deposit, as it is a deposit account with a bank for a fixed period of time.",
      link: "/FixedDeposit",
    },
    {
      id: 5,
      title: "Insurance",
      img: "Insurance_240_F_270761637.jpg",
      text: "Insurance is a basic form of risk management which provides protection against the loss of the economic benefits",
      link: "/Insurance",
    },
    {
      id: 6,
      title: "Credit Card",
      img: "CC_240_F_285891990.jpg",
      text: "Credit card is a form of credit - a substitute for money in the form of a plastic card enabling you to buy now but pay later.",
      link: "/CreditCard",
    },
    {
      id: 7,
      title: "Real Estate",
      img: "RE_240_F_314720793.jpg",
      text: "Real Estate is one of the key investment option for investors. Investment in real sector is done keeping in view the.",
      link: "/RealEstate",
    },
    {
      id: 8,
      title: "Stocks",
      img: "Stocks240_F_315299714.jpg",
      text: "When you talk about investment options then you can’t complete any discussion without talking about investment in shares..",
      link: "/Stocks",
    },
    {
      id: 9,
      title: "Gold",
      img: "Gold_240_F_41342163.jpg",
      text: "In India, gold is seen as an asset that is suitable for long term wealth creation. It is also used as a collateral for loans .",
      link: "/Gold",
    },
    {
      id: 10,
      title: "Crypto Currency",
      img: "CrCu-240_F_421631999.jpg",
      text: "A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to.",
      link: "/CryptoCurrency",
    },
    {
      id: 11,
      title: "IPO",
      img: "IPO.jpg",
      text: "An initial public offering (IPO) refers to the process of offering shares of a private company to the public in a new stock issuance",
      link: "/IPO",
    },
    {
      id: 12,
      title: "Alternate Investment",
      img: "AltInv.jpg",
      text: "An alternative investment is a financial asset that does not fall into one of the conventional investment categories.",
      link: "/AltInvestment",
    },
  ];

  const [detail, setDetail] = useState();
  const [searchVal, setSearchVal] = useState("");
  const [searchSuccess, setSearchSuccess] = useState(false);
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchVal);
    setSearchVal("");
    var detail = details.filter(
      (d) => d.title.toLowerCase() === searchVal.toLowerCase()
    );
    if (detail.length > 0) {
      setDetail(detail);
      setSearchSuccess(true);
    } else {
      alert("Not found :(");
    }
  };

  return (
    <div className="App">
      
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <div className="marginTopLearn">
          <form onSubmit={handleSearchSubmit}>
            <InputGroup
              className="mb-3"
              style={{ width: "40%", marginLeft: "auto" }}
            >
              <FormControl
                placeholder="Mutual Funds"
                aria-label="Search Content"
                aria-describedby="basic-addon2"
                value={searchVal}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
                style={{ marginLeft: "-2px" }}
              >
                Search
              </Button>
            </InputGroup>
          </form>
        </div>
        <h1 style={mTop}> Invest</h1>
        <p style={{ width: "80%", margin: "0 auto 2%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consectetur ullamcorper auctor. Quisque eleifend, ante nec vestibulum
          pulvinar, velit mauris venenatis velit, sed vestibulum arcu purus ac
          neque. Pellentesque maximus lectus sit amet orci vestibulum gravida.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat
          dui vitae nisl volutpat pellentesque. Aenean et elit mauris. Morbi in
          diam tellus. Aliquam pretium lacus erat, non facilisis enim trist
        </p>
        {searchSuccess && (
          <Card className="mb-3" style={{ width: "50%", margin: "auto" }}>
            <Card.Body>
              <Card.Img variant="bottom" src={detail[0].img} />
              <Card.Title className="mt-3">{detail[0].title}</Card.Title>
              <Card.Text>{detail[0].text}</Card.Text>
              <Card.Link href={`${detail[0].link}`}>
                <Link to={`${detail[0].link}`}>Read More</Link>
              </Card.Link>
            </Card.Body>
          </Card>
        )}
        <TabComponent activeTab="invest" details={details} />
      </Jumbotron>
      <Footer />
      <SocialFollow />
    </div>

  );
}
