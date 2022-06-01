import {
  AppBar,
  Box,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Header from "../Layout/Header";
import ScrollToTop from "../ScrollToTop";
import PropTypes from "prop-types";

import "./webinar.css";
import WebinarCardUpcoming from "./WebinarCardUpcoming";
import Footer from "../Layout/Footer";
import { Card, Col, Jumbotron, Row } from "react-bootstrap";
import axios from "axios";

// const response = [
//   {
//     title: "Hello world",
//     description: "This is the description",
//     date: "24th August, 2021",
//     time: "10:00 am to 11:00 am",
//     ageLimit: "All age groups",
//     speaker: {
//       name: "Mr. Speaker",
//       url: "https://www.linkedin.com/in/nimishjn",
//       organization: "Nishkaera",
//       designation: "CEO",
//       description: "This is the description of the speaker.",
//     },
//   },
//   {
//     title: "Hello world",
//     description: "This is the description",
//     date: "24th August, 2021",
//     time: "10:00 am to 11:00 am",
//     ageLimit: "All age groups",
//     speaker: {
//       name: "Mr. Speaker",
//       url: "https://www.linkedin.com/in/nimishjn",
//       organization: "Nishkaera",
//       designation: "CEO",
//       description: "This is the description of the speaker.",
//     },
//   },
// ];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Webinar() {
  // const {token}=React.useContext(AppContext)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [upcoming, setUpcoming] = React.useState([]);
  const [speakers, setSpeakers] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchwebinar = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/webinar/`
      );
      let result = res.data.results;
      let upcoming = result.filter((item) => item.status === "upcoming");
    
      setUpcoming(upcoming);
    } catch (error) {
     
    }
  };

  const fetchSpeakers = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_APIURL}/api/webinar/speaker`
      );
      let result = res.data.results;

       setSpeakers(result);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchwebinar();
    fetchSpeakers();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1 class="webinar-header">WEBINARS</h1>
        <p class="text-md-start">
          Our LEARN initiative is aimed at increasing the financial literacy
          among Indians which is a must to achieve the overall objective of
          financial inclusion. Currently, a lot of information is flowing all
          around. However, finding the right information and timely guidance is
          key to ensure that one makes the right financial decisions and achieve
          the financial goals. To fulfill the current gap, Nishkaera has created
          a unique platform to impart financial education through our website
          namely www.nishkaera.com, our social media platforms and also through
          webinars to achieve its broad-based financial inclusion objectives.
        </p>
        <h3 className="webinar-subheader">WHOM WE CATER TO</h3>
        <div
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <video
            style={{
              width: "90%",
              maxWidth: "30rem",
            }}
            src="Webinar Video.mp4"
            title="Webinar Video"
            controls
          />
        </div>

        <div className="cater-cards-wrap">
          <Row>
            <Col lg={6} sm={12}>
              <Card style={{ width: "80%", margin: "10px auto" }}>
                <Card.Img variant="top" src="./webinar1.png" />
                <Card.Body style={{ margin: 0 }}>
                  <Card.Title>ACADEMIC INSTITUTES</Card.Title>
                  <Card.Text>
                    Develop the right kind of approach in your students towards
                    personal finance and investment at an early stage of their
                    life. Teaching and non-teaching staff can gain immensely on
                    various aspects of personal finance and investment by live
                    interaction with subject-matter experts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} sm={12}>
              <Card style={{ width: "80%", margin: "10px auto" }}>
                <Card.Img variant="top" src="./webinar2.jpg" />
                <Card.Body style={{ margin: 0 }}>
                  <Card.Title>NON-GOVERNMENTAL ORGANISATIONS</Card.Title>
                  <Card.Text>
                    Let’s join our hands in our endeavour to bring a more
                    respectful and a more sustainable life for those in need.
                    Whether it’s the employees who are working for you or it’s
                    the people that you are working for, financial literacy is
                    equally important to ensure a sustainable future for them.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} sm={12}>
              <Card style={{ width: "80%", margin: "10px auto" }}>
                <Card.Img variant="top" src="./webinar3.jpg" />
                <Card.Body style={{ margin: 0 }}>
                  <Card.Title>WOMEN FOCUSSED GROUPS</Card.Title>
                  <Card.Text>
                    Are you an organisation or a focussed group working for the
                    upliftment of women in the society? Join hands with us to
                    make them financial literate and financial independence as
                    well. Without financial freedom all other accomplishments
                    may not be enough for a sustainable and respectful life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} sm={12}>
              <Card style={{ width: "80%", margin: "10px auto" }}>
                <Card.Img variant="top" src="./webinar3.jpg" />
                <Card.Body style={{ margin: 0 }}>
                  <Card.Title>CORPORATES</Card.Title>
                  <Card.Text>
                    Financial stability and well-being of employees can directly
                    impact their performance in professional life. Employees
                    having strong financial status are likely to stay longer
                    with the organization as they would not change organization
                    just to add more to their current incomes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <h3 className="webinar-subheader">CHECK THE LATEST ON WEBINARS</h3>
        <div className="webinar-container">
          <div className={classes.root}>
            <AppBar position="static" color="default" className="webinar-tab">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Upcoming" />
                <Tab label="Recent" />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Row>
                {upcoming.map((e) => {
                  return <WebinarCardUpcoming e={e} speakers={speakers} />;
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <WebinarCardRecent /> */}
            </TabPanel>
          </div>
        </div>
        <h3 className="webinar-subheader">OUR BROCHURE</h3>
        <div className="webinar-brochure">
          <a
            href="brochureWebinars.pdf"
            target="_blank"
            class="btn btn-primary"
          >
            View
          </a>
          <a
            href="brochureWebinars.pdf"
            target="_blank"
            download="Nishkaera Webinar Brochure"
            class="btn btn-primary"
          >
            Download
          </a>
        </div>
      </Jumbotron>
      <Footer />
    </>
  );
}
