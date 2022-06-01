import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row } from "react-bootstrap";
// import {Button} from "react-bootstrap" 
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
// import SocialFollow from "../social/SocialFollow";
import ScrollToTop from "../ScrollToTop";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import axios from "axios";
import PersonalDetails from "./PersonalDetails";
import FinancialScore from "./FinancialScore";


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function IPO() {
  const mTop = {
    margin: "-2% 0% 4%",
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <div className="tw-text-center" style={{textAlign:"center"}}>
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
        <h1 style={mTop} className="contact-head">
          Your Details
        </h1>
        <div className={classes.root}>
      <AppBar position="static" color="default" className="ipo-tab">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          initialSelectedIndex={1}
        >
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Financial Score" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container>
          <Row>
          <PersonalDetails />
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Container>
              <Row>
              <FinancialScore />
              </Row>
            </Container>
      </TabPanel>
    </div>
      </Jumbotron>
      <Footer />
    </div>
    </div>
  );
}
