import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import {
  RiWhatsappFill,
  // RiYoutubeFill,
  // RiLinkedinBoxFill,
} from "react-icons/ri";
// import { SiFacebook } from "react-icons/si";
// import { BiRadioCircleMarked } from "react-icons/bi";
// import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Logo from "./assets/WhiteLogo.png";

import { Button, Alert, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import twitter from './assets/twitter.png';
import linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import youtube from './assets/youtube.png';


import dotenv from "dotenv";
import axios from "axios";
import "./Footer.css";

dotenv.config();
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      show: false,
      message: "",
      err: false,
      showUnsubscribe: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { show, message, err, showUnsubscribe, ...rest } = this.state;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/newsletter`,
        rest
      );
      this.setState({
        email: "",
        show: true,
        err: false,
        message: "Thankyou for subscribing to our newsletter.",
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          this.setState({
            showUnsubscribe: true,
          });
        }
        error.response &&
          this.setState({
            show: true,
            err: true,
            message: error.response.data.message,
          });
      }
    }
  };
  closePopup = () => {
    this.setState({
      show: false,
      showUnsubscribe: false,
    });
  };
  onUpdate = () => {
    const { email } = this.state;
    console.log(email);
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/newsletter/unsubscribe`, {
        email: email,
      })
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          message: "Your email has been unsubscribed successfully!",
          showUnsubscribe: false,
        })
      );
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-bg-navgreen-700 tw-text-white tw-items-center tw-p-3 tw-pt-6">
            <div className="md:tw-w-2/5 tw-p-2">
              <div className="tw-text-xl lg:tw-text-2xl xl:tw-text-3xl tw-font-semibold">
                SUBSCRIBE TO OUR REPORTS
              </div>
              <div className="tw-pt-3 lg:tw-text-lg tw-text-nishyellow-400 tw-font-bold">
                {" "}
                Learn <span className="tw-text-white">•</span> Invest <span className="tw-text-white">•</span> Grow <span></span>{" "}
              </div>
            </div>
            <div className="md:tw-w-2/5 tw-p-2 tw-flex tw-flex-col tw-items-center tw-text-white">
              <div className="lg:tw-w-3/4 md:tw-w-4/5">
                <input
                  required
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  className="tw-text-white tw-w-full tw-shadow-4xl tw-outline-none tw-pl-2 tw-p-1.5 tw-drop-shadow-md tw-m-2 tw-bg-navgreen-900 tw-opacity-50 tw-rounded-xl"
                />
              </div>
              {/* <div className="tw-flex lg:tw-text-lg tw-gap-1.5 tw-pt-3 md:tw-pt-0 tw-text-xs lg:tw-gap-4 tw-items-center ">
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                Daily Digest
              </div>
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                IPO Watch
              </div>
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                Financial Reports
              </div>
            </div> */}
            </div>
            <div className="md:tw-w-1/5 lg:tw-w-1/6 xl:tw--ml-20 tw-mt-2 md:tw-mt-0">
              <button
                type="submit"
                className="tw-shadow-xl tw-border-none tw-text-lg tw-text-white tw-rounded-3xl tw-px-8 tw-font-semibold tw-py-1 tw-bg-nishyellow-400">
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.closePopup}
        >
          <Modal.Header className="tw-bg-navgreen-600" closeButton></Modal.Header>
          <Modal.Body className="tw-bg-navgreen-700 tw-text-white">
            <Alert>
              {this.state.showUnsubscribe ? (
                <>
                  <h4>This email address is already subscribed.</h4>
                  <p>
                    To unsubscribe, click on <b>Unsubscribe</b> button below or{" "}
                    <b>Cancel</b> button to keep subscribed.
                  </p>
                  <Button
                    variant={this.state.err ? "danger" : "success"}
                    onClick={this.onUpdate}
                  >
                    Unsubscribe
                  </Button>
                </>
              ) : (
                <h4>{this.state.message}</h4>
              )}
            </Alert>
          </Modal.Body>
          <Modal.Footer className="tw-bg-navgreen-600 tw-text-center">
            <Button className="tw-bg-white hover:tw-bg-nishblue-400 tw-mx-auto tw-w-2/4" onClick={this.closePopup} variant="outline-primary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="tw-bg-navgreen-800 tw-text-white md:tw-text-left tw-h-16 "> 
          <img src={Logo} className="tw--mt-28 xl:tw--mt-32 tw--ml-12 xl:tw--ml-14 lg:tw-w-1/4 md:tw-w-1/3 md:tw-w-48 tw-h-80 xl:tw-h-96" />
        </div>

        <div className="tw-items-center tw-flex tw-flex-col md:tw-flex-row tw-bg-navgreen-800 tw-text-white xl:tw--mt-0 tw-pb-10 lg:tw--mt-20  xl:tw--mt-2">
          <div className="tw-flex tw-flex-col md:tw-w-1/5 tw-items-center xl:tw--ml-8 lg:tw-ml-2 md:tw--mt-24 lg:tw--mt-5 xl:tw--mt-24">
            <div className="tw-text-footer-100 tw-font-bold md:tw--mt-10 lg:tw--mt-0 tw-text-lg lg:tw-text-2xl">
              Company
            </div>
            <div className="tw-flex tw-flex-col tw-text-sm lg:tw-text-lg md:tw-text-left">
              <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/OurStory">Our Story </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Careers">Careers </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Disclaimer">Disclaimer </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/PrivacyPolicy">Privacy Policy </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/TermsOfUse">Terms Of Use </Link></p>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw--mt-10 md:tw-w-1/4 lg:tw-w-1/5 xl:tw-w-1/4  xl:tw-mt-8 lg:tw-mt-28 tw-items-center lg:tw-ml-4 xl:tw--ml-10 xl:tw-mr-16">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
              Products
            </div>
            <div className="tw-flex tw-flex-row tw-gap-3 lg:tw-gap-8 xl:tw-gap-12 lg:tw-text-lg">
              <div className="tw-flex tw-flex-col tw-text-sm md:tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/FixedDeposits">Fixed Deposit </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/PersonalLoan">Personal Loan </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/BL">Business Loan</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Insurance">Insurance</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">Bonds</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">NCD</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">PMS</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">Home Loans</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/MutualFunds">Mutual Funds</Link></p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw--mt-36 lg:tw--mt-0 md:tw-w-1/4 lg:tw-w-2/5 xl:tw-w-1/4 md:tw-ml-2 lg:tw--mt-20 xl:tw--mt-40 tw-items-center xl:tw--ml-10 xl:tw-mr-16">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl  lg:tw--ml-4 xl:tw--ml-0">
              Services
            </div>
            <div className="tw-flex tw-flex-row tw-gap-3 lg:tw-gap-5 xl:tw-gap-12 lg:tw-text-lg">
              <div className="tw-flex tw-flex-col tw-text-sm tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/Learn">Learn </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">Daily Digest </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/IPOWatch">IPO Watch </Link></p>
              </div>
              <div className="tw-flex tw-flex-col tw-text-sm tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/Score">Financial Pulse</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Blogs">Blogs </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/WomenSpecialHome">Women Special</Link></p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col xl:tw-pt-0 tw-pt-6 md:tw-pt-6 xl:tw--mt-16 md:tw-mt-2 lg:tw-pt-20 md:tw-w-1/3 tw-items-center md:tw-mr-6">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl tw--mt-2 md:tw--mt-8 ">
              Our Offices
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2 lg:tw-gap-5 tw-ml-5 lg:tw-ml-8">
              <div className=" tw-w-1/2 tw-flex tw-flex-col tw-text-left tw-ml-5">
                <p className="tw-font-semibold tw-mt-5 lg:tw-text-lg">
                  Registered Office
                </p>
                <p className="tw-text-sm tw--mt-2 tw-flex">
                  <span className="tw-mr-3 tw--ml-7 md:tw-hidden lg:tw-block">
                    <HiLocationMarker />
                  </span>
                  <a target="_blank" className="tw-text-white" style={{ textDecoration: "none" }} href="https://goo.gl/maps/CFiyQnsDRXCQWgQc8">Flat no. 2, <br />A-wing, <br />Shyamsmruti CHS,<br />Nerul, Sec-19,<br />Navi Mumbai,
                    Maharashtra-400706</a>
                </p>
              </div>
              <div className="tw-w-1/2 tw-flex tw-flex-col tw-text-left">
                <p className="tw-font-semibold tw-mt-5 lg:tw-text-lg">
                  Gurugram Office
                </p>
                <p className="tw-text-sm  tw--mt-2 tw-flex">
                  <span className="tw-mr-3 tw--ml-7 md:tw-hidden lg:tw-block">
                    <HiLocationMarker />
                  </span>
                  <a target="_blank" className="tw-text-white" style={{ textDecoration: "none" }} href="https://goo.gl/maps/JQr8SdsnNnCk6jLw6">Unit 125, <br />1st Floor,<br />Vipul Trade Center, Sohna Road,<br />Gurugram,<br />
                    Haryana-122018</a>
                </p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw-w-1/4 lg:tw--mt-4 xl:tw--mt-24 md:tw--mt-28 tw-items-center tw-mr-2">
            <div>
              <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
                Contact Us
              </div>
              <div className="md:tw-text-left tw-mt-5">
                <p className="tw-text-sm">
                  <span className="tw-text-sm lg:tw-mr-3 lg:tw-text-lg">
                    <IoIosMail />
                  </span>
                  <a style={{ textDecoration: 'none' }} className="tw-text-white" href="mailto:contact@nishkaera.com">contact@nishkaera.com</a>
                </p>
                <p className="tw--mt-3 tw-text-sm">
                  <span className="tw-text-sm lg:tw-mr-3 lg:tw-text-lg">
                    <RiWhatsappFill />
                  </span>
                  <a style={{ textDecoration: 'none' }} className="tw-text-white" href="https://wa.me/+919320174124">+91 9320174124</a>
                </p>
              </div>
            </div>
            <div>
              <div className="tw-mt-3 tw-mb-6 tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
                Follow Us
              </div>
              <div className="tw-flex tw-flex-row tw-gap-4 md:tw-gap-2 lg:tw-gap-6">
                <a href="https://www.facebook.com/nishkaera/" className="tw-w-7 tw-h-7 hover:tw-text-white tw-text-white">
                  <span className="tw-w-14 tw-h-14"><img className="tw-w-full tw-h-full" src={facebook} /> </span>
                </a>
                <a href="https://www.youtube.com/channel/UCboiaf0to-PrBpvPFXlqimQ" className="tw-w-7 hover:tw-text-white tw-text-white tw-h-7">
                  <span className="tw-w-14 tw-h-14"><img className="tw-w-full tw-h-full" src={youtube} /> </span>
                </a>
                <a href="https://www.instagram.com/nishkaera/" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <span className="tw-w-14 tw-h-14"><img className="tw-w-full tw-h-full" src={instagram} /> </span>
                </a>
                <a href="https://www.linkedin.com/company/nishkaera/" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <span className="tw-w-14 tw-h-14"><img className="tw-w-full tw-h-full" src={linkedin} /> </span>
                </a>
                <a href="https://www.twitter.com/nishkaera" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <img className="tw-w-full tw-h-full" src={twitter} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-bg-navgreen-800 tw-gap-2 tw-text-white md:tw--mt-6 tw-justify-center">
          <span className="tw-h-6 tw-w-6">
            <AiOutlineCopyrightCircle className="tw-h-full tw-w-full" />
          </span>
          <p>2022 All Rights Reserved</p>
        </div>
      </>
    );
  };
}