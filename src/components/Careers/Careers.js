import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
// import SocialFollow from "../social/SocialFollow";
import { Jumbotron } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop";
import "./Careers.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

export default function Careers() {
  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1 style={{ margin: "-1% 0% 2%" }} className="contact-head">
          Get In Touch
        </h1>
        <p style={{ width: "80%", margin: "auto" }}>
          {" "}
          We are looking for passionate people to join our incredible team and
          work with us to create best-in-class products and services. If this
          excites you send us your resume at{" "}
          <a href="mailto:careers@nishkaera.com">careers@nishkaera.com</a>
        </p>
        <img
          width="600"
          height="350"
          alt="Careers at Nishkaera"
          src="Careers.png"
          style={{ margin: "2%" }}
          className="career-img"
        />
        <h1 style={{ margin: "1% 0% 2%" }} className="career-head">
          Open Positions
        </h1>
        <p style={{ width: "80%", margin: "auto" }}>
          We are looking for interns for internship with us for a period of
          minimum 4 to 6 months on immediate basis. One position is for our
          Gurgaon location and second position is for Mumbai Location. This is a
          great opportunity for those who want to gain experience of working in
          a Fintech start-up company.
        </p>
        <div className="positions-career">
          <div>
            <div className="positions-title" style={{ paddingTop: "3%" }}>
              <h4>Finance Intern</h4>
              <p>
                <LocationOnIcon /> Gurgaon
              </p>
            </div>
            <div className="position-responsibilities">
              <h5>
                <EmojiPeopleIcon /> Key Responsibilities
              </h5>
              <hr />
              <ul>
                <li>
                  Work on the analysis of IPO and Companies Financial Results.{" "}
                </li>
                <li>Attend the investors call and various other reports. </li>
                <li>Work on financial modelling. </li>
                <li>
                  Work on the preparation of various financial reports /
                  presentations etc.{" "}
                </li>

                <li>
                  Work with the Co-founder of the company and assist him in the
                  daily activities.{" "}
                </li>

                <li>
                  Managing meetings and calls with various stakeholders, HR,
                  accounts and admin related work.{" "}
                </li>

                <li>
                  Co-ordination with other senior members of the team and
                  employees, finance and accounts related work.{" "}
                </li>
              </ul>
            </div>
            <div className="position-responsibilities">
              <h5>
                <CheckBoxIcon /> Qualifications
              </h5>
              <hr />
              <ul>
                <li>
                  Intern should ideally have previous experience of working with
                  Founder, CEO of a start-up company.{" "}
                </li>

                <li>
                  Interns should be minimum a graduate in the field of commerce,
                  finance or management and should have 6-12 months of corporate
                  experience as intern.{" "}
                </li>

                <li>
                  Intern should be good at finance and should have worked on
                  areas like IPO analysis, financial result analysis, financial
                  modelling, valuation etc.{" "}
                </li>
              </ul>
            </div>
            <p>
                  Intern should be based out of Gurgaon only an would be
                  required to work from our office in Gurgaon. Suitable
                  compensation would be given to selected candidates.{" "}
                </p>
                <button><a href="mailto:careers@nishkaera.com?subject=Finance Intern - Gurgaon Role ID - 101">Appy Now</a></button>
          </div>
          <div>
            <div className="positions-title" style={{ paddingTop: "3%" }}>
              <h4>Social Media Intern</h4>
              <p>
                <LocationOnIcon /> Navi Mumbai
              </p>
            </div>
            <div className="position-responsibilities">
              <h5>
                <EmojiPeopleIcon /> Key Responsibilities
              </h5>
              <hr />
              <ul>
                <li>
                  Working with the Founder of the company and assist him in
                  daily activities.{" "}
                </li>

                <li>
                  Key work area includes social media management, content
                  writing, branding, marketing, Sales and promotions.{" "}
                </li>

                <li>
                  Work on all new initiatives / launches of the companies from
                  concept to go market level.
                </li>

                <li>
                  Preparation of presentation for all external stakeholder.{" "}
                </li>

                <li>
                  Identifying business opportunities for product market and
                  advisory business.{" "}
                </li>

                <li>
                  Market research to understand the development in the fintech
                  space, regulatory matters and competitors’ analysis.{" "}
                </li>

                <li>
                  Managing regular meetings and calls with various stakeholders,{" "}
                </li>
                <li>
                  To handle all HR and admin related work of the company.{" "}
                </li>
                <li>
                  Co-ordination with other senior members of the team and
                  employees, finance and accounts related work.
                </li>
              </ul>
            </div>
            <div className="position-responsibilities">
              <h5>
                <CheckBoxIcon /> Qualifications
              </h5>
              <hr />
              <ul>
                <li>
                  Intern should have previous experience of working with
                  Founder, CEO of a start-up company.
                </li>

                <li>
                  Interns should be minimum a graduate in the field of commerce,
                  finance or management and should have 6-12 months of corporate
                  experience as intern.
                </li>

                <li>
                  Intern should have strong inclination to work for a fintech
                  start-up company.
                </li>
                <li>
                  Person should be a go-getter and multi-tasker who is able to
                  comprehend thing faster and turnaround things as per the
                  timelines.{" "}
                </li>
              </ul>
            </div>
            <p>
                  Intern should be based out of Mumbai, preferably Navi Mumbai.
                  Intern for Navi Mumbai location would initially work from home
                  and would be required to work from office as and when required
                  by management. Suitable compensation would be given to
                  selected candidates.
                </p>
                <button><a href="mailto:careers@nishkaera.com?subject=Social Media Intern - Navi Mumbai Role ID - 102">Appy Now</a></button>
          </div>
        </div>
      </Jumbotron>
      <Footer />

    </div>
    </div>
  );
}
