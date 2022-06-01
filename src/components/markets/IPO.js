import React  , {useState,useEffect} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Container, Image, Row, Card , Modal,Button, CardDeck, CardGroup  } from "react-bootstrap";
// import {Button} from "react-bootstrap" 
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollToTop from "../ScrollToTop";
import "./IPO.css";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";


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
  const [modalShow, setModalShow] = React.useState(false);
  const [title, setTitle] = useState("");
  const [ppt, setPpt] = useState("");
  const [upcoming, setUpcoming] = useState([])
  const [ongoing, setOngoing] = useState([])
  const [recent, setRecent] = useState([])
  const mTop = {
    margin: "-2% 0% 4%",
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchIPO = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_APIURL}/api/ipo`)
 
      let result = res.data.results
      let upcomings = result.filter(item => item.status === "upcoming")
      upcomings.sort((a, b) => a.position - b.position)
      setUpcoming(upcomings)

      let ongoings = result.filter(item => item.status === "ongoing")
      ongoings.sort((a, b) => a.position - b.position)
      setOngoing(ongoings)
      let recents = result.filter(item => item.status === "recent")
      recents.sort((a, b) => a.position - b.position)
      setRecent(recents)
    } catch (error) {

    }


  }
  useEffect(() => {
    fetchIPO()
  }, [])
  // const upcoming  = [
  
    
    
  //   {
  //     id:1,
  //     name:"Medi Assist",
  //     img:"mediAssist.png"
  //   },
  
   
  //   {
  //     id:2,
  //     name:"Paras",
  //     img:"paras.jpg"
  //   },
    
  //   {
  //     id:3,
  //     name:"Penna Cement",
  //     img:"pennaCement.png"
  //   },
  //   {
  //     id:4,
  //     name:"Fincare",
  //     img:"fincare.png"

  //   },
  //   {
  //     id:5,
  //     name:"Shriram",
  //     img:"shriram.png"
  //   }
  // ]
  // const recent = [
  //   {
  //     id:1,
  //     name:"Car Trade Tech",
  //     link:"https://drive.google.com/file/d/1DW365K722UZ1ZmAyNfJN0IuUYN9eQEEe/preview",
  //     img:"carTrade.png"

  //   },
  //   {
  //     id:2,
  //     name:"Nuvoco",
  //     link:"https://drive.google.com/file/d/18AKwoRrX1jOcC0vrbMb9BRp1cCsZyvHQ/preview",
  //     img:"nuvoco.png"
  //   },
  //   {
  //     id:3,
  //     name:"Devyani",
  //     link:"https://drive.google.com/file/d/1vObrOXey5kLfvtDg7Deb7DUQiMLtxr-N/preview",
  //     img:"Devyani.png"
  //   },
  //   {
  //     id:4,
  //     name:"Exxaro",
  //     link:"https://drive.google.com/file/d/1bwoAUMhlgjA4IXSusaggfs1ETilV2Wxt/preview",
  //     img:"Exxaro.png"
  //   },
  //   {
  //     id:5,
  //     name:"Glenmark Life Sciences",
  //     link:"https://drive.google.com/file/d/1Mrtyykkr87cdugqp70RmS6GIw6v5wcLm/preview",
  //     img:"glenmark.png"
  //   },
  //   {
  //     id:6,
  //     name:"Rolex Rings",
  //     link:"https://drive.google.com/file/d/1Wo1YxJS0s4xen6U0G1rMS723cdhCRJ-o/preview",
  //     img:"rolexRings.jpg"
  //   },
  //   {
  //     id:7,
  //     name:"Zomato",
  //     link:"https://drive.google.com/file/d/1fp4W-9RfRN6QFuh0qtBNVpi8wVhsAUIz/preview",
  //     img:"zomato.png"
  //   },
  //   {
  //     id:8,
  //     name:"Tatva Chintan",
  //     link:"https://drive.google.com/file/d/17rlMRnT2oQnxZJFHwOtitE1VZiOcwJeG/preview",
  //     img:"tatvaChintan.png"
  //   },
  //   {
  //     id:9,
  //     name:"KIMS (healthcare)",
  //     link:"https://drive.google.com/file/d/1tYqXsk_D-maPpenakABdQVDDGk_8TAK-/preview",
  //     img:"kims.png"
  //   },
  //   {
  //     id:10,
  //     name:"India Pesticides Limited",
  //     link:"https://drive.google.com/file/d/1ztbFF28OwoH8DyvgF89sC2SFn77qMhM7/preview",
  //     img:"IPL.png"
  //   },
  //   {
  //     id:11,
  //     name:"GR Infra",
  //     link:"https://drive.google.com/file/d/1yPQ73Ra7PhGCdmAPW7qIsYrPxvq_b6ap/preview",
  //     img:"grill.jpeg"
  //   },
  //   {
  //     id:12,
  //     name:"Dodla Dairy",
  //     link:"https://drive.google.com/file/d/18qJ3pjBAoz9abXQ2us1rjW_xZI0RHdfy/preview",
  //     img:"dodla.png"
  //   },
        
  //   {
  //     id:13,
  //     name:"Clean Science",
  //     link:"https://drive.google.com/file/d/1VlGg_CcRUR6r6K60JazhFb1RNGtJnmfb/preview",
  //     img:"cleanScience.png"
  //   },
  //   {
  //     id:14,
  //     name:"Windlas Biotech",
  //     link:"https://drive.google.com/file/d/1DdzykPtMUkYUjLGpRYBAu9JSx_uU1VCJ/preview",
  //     img:"windlasBiotech.png"
  //   },
 
  //   {
  //     id:15,
  //     name:"Krsnaa Diagnostic",
  //     link:"https://drive.google.com/file/d/18R2RYSQ2MGFPCoj4WwxUpJOedWsn2_ZK/preview",
  //     img:"Krsnaa.png"
  //   }
    
  






  
  // ]
  // const ongoing = [
  //   {
  //     id:1,
  //     name:"AMI Organics Limited",
  //     link:"https://drive.google.com/file/d/1hTs8j5XrqniJsCYVbILXNKbfA-4GZYZu/preview",
  //     img:"AMI.png",
  //   },
   
  //   {
  //     id:2,
  //     name:"Vijaya Diagnostic Centre",
  //     link:"https://drive.google.com/file/d/1KedKkaCKKAYkfkrUXVG9jacjVLA7DHlJ/preview",
  //     img:"vijayaDiag.png"
  //   },
  //   {
  //     id:3,
  //     name:"Aptus",
  //     link:"https://drive.google.com/file/d/1TJxgRKmEsHJPQb1kCpPIGhu1st5aj8i_/preview",
  //     img:"aptus.png"
  //   },
  //   {
  //     id:4,
  //     name:"Sanmar",
  //     link:"https://drive.google.com/file/d/1k87r3vGXWDYugCPfosY0B7YR0hKP1RO4/preview",
  //     img:"sanmar.jpg"
  //   }
    
   
  
    
  // ]
  const handleClick = (title,ppt) => {
    setTitle(title);
    setPpt(ppt);
    setModalShow(true);
  }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
            <iframe
              src={ppt}
              frameborder="0"
              allowfullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              className="ppt-el"
              title="ipo-ppt"
              allow="autoplay"
            ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Go Back</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="App">
      
      <ScrollToTop />
      <Header />
      <Jumbotron className="container-fluid">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <h1 style={mTop} className="contact-head">
          IPO Watch
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
          <Tab label="Upcoming" {...a11yProps(0)} />
          <Tab label="Ongoing" {...a11yProps(1)} />
          <Tab label="Recent" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container className="tw-w-full">
          <Row>
          {upcoming.length > 0 ? 
                    upcoming.map(item=>(
                      <Col lg={4} md={6} sm={12} key={item.id}>
                      <Card className="ipo-card">
                        <Image src={item.logo} alt={item.name} className="ipo-img"/>
                        <p className="ipo-card-title">{item.name}</p>
                        {item.video !== "NA" && <p className="ipo-card-link" onClick={()=>handleClick(item.name,item.video)}>Know more</p>}
                      </Card>
                    </Col>
        )) : <p>No results found. You can come back later</p>}
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Container className="tw-w-full">
              <Row>
              {ongoing.length > 0 ? 
                    ongoing.map(item=>(
                      <Col lg={4} md={6} sm={12} key={item.id}>
                      <Card className="ipo-card">
                        <Image src={item.logo} alt={item.name} className="ipo-img"/>
                        <p className="ipo-card-title">{item.name}</p>
                        {item.video !== "NA" && <p className="ipo-card-link" onClick={()=>handleClick(item.name,item.video)}>Know more</p>}
                      </Card>
                    </Col>
        )) : <p>No results found. You can come back later</p>}
              </Row>
            </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
                <Container className="tw-w-full">
                  <Row>
                      {recent.length > 0 ? 
                    recent.map(item=>(
                      <Col lg={4} md={6} sm={12} key={item.id}>
                      <Card className="ipo-card">
                        <Image src={item.logo} alt={item.name} className="ipo-img"/>
                        <p className="ipo-card-title">{item.name}</p>
                        { item.video !== "NA" && <p className="ipo-card-link" onClick={()=>handleClick(item.name,item.video)}>Know more</p>}
                      </Card>
                    </Col>
        )) : <p>No results found. You can come back later</p>}
                  </Row>
                </Container>
      </TabPanel>
    </div>
    <h1 className="text-center text-bold my-5">IPO Knowledge Series</h1>
      <img src="IPOKnowledgeSeries.jpg" alt="IPO KNOWLEDGE SERIES" className="ipo-series-img" />
      <CardGroup>
          <CardDeck style={{width:"100%",margin:"3% auto"}}>
            <Card className="p-3">
              <iframe src="https://drive.google.com/file/d/1cPYBvedbIzrgJ1tMsraNsbldvtxDmDWj/preview" className="videoEl" title="ipo watch"/>
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <iframe src="https://drive.google.com/file/d/17KauHS7xm5I8f_uiCst6H0b47Bbny4vt/preview" className="videoEl" title="ipo watch"/>
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <iframe
                src="https://drive.google.com/file/d/1-H2AM4oneDkr6gqDqA7mHTyB5b3m1hBo/preview"
                className="videoEl"
                title="ipo watch"
              />
              <Card.Body>
              </Card.Body>
            </Card>
          </CardDeck>
        </CardGroup>
      </Jumbotron>
      <Footer />
    </div>

  );
}
