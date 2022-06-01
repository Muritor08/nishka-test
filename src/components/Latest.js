// import axios from 'axios';
import React from 'react';
import { Jumbotron} from 'react-bootstrap'
// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import LatestPost from './Latestpost';

export default function Latest() {
    

    return (
        <div className="container-latest" id="Latest" >
            <Jumbotron className="container-fluid" style={{ backgroundColor: "30AB8A" }}>

                <h1 className="sectionHeading" style={{ color: "black", fontWeight: "bold", marginTop: "1.5rem" }}> NishkaEra on Socials</h1>
                {/* <h3 className="sectionParagraph" style={{ color: "black", textShadow: "white -2px -1px" }}>Get the latest news and developments on financial matters here.</h3> */}
                <div className="column">
                   

                        
                        <LatestPost />
                                        

                    <div className="container-fluid">
                        <br></br>
                        <br></br>
                        {/* <h3 ><Link to="/SocialPost"><Button className="btn btn-primary btn-lg btn-block" >Our Latest Posts</Button></Link></h3> */}
                        {/* <SocialPostEmbedded /> */}
                    </div>
                </div>

            </Jumbotron>
        </div>
    );
}