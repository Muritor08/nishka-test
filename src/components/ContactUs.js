import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "./ContactUS.css";


export default class ContactUs extends Component {
  render() {
    return (
     
       

        <div className="outer" style={{backgroundColor:"white" , height:"858px", position:"relative"}}>
          

          


          <div  className="topic" style={{position:"absolute" ,zIndex:"2", left:"27%"   , top:"6%" ,height:"12%",width:"50%"}}>
          <h1 className="topic_content" style={{fontSize:"67px"    , color:"#114034"}}>Connect with us</h1>
          </div>
          
          <div className="bg_bottom tw-bg-blue-900" style={{position:"absolute" ,zIndex:"2", left:"5%"   , top:"32%" ,height:"67%",width:"85%"}}>

          </div>

          <div className="bg_upper tw-bg-blue-100" style={{position:"absolute" ,zIndex:"2", left:"8%"   , top:"19%" ,height:"73%",width:"87%" , }}>

          <div  className="text_1 tw-text-blue-900" style={{position:"absolute" ,zIndex:"1", left:"63%"   , top:"7%" ,height:"23%",width:"29%"}}>
          <h1  style={{fontSize:"25px" ,fontStyle:"normal" , fontWeight:"600" , textAlign:"center", lineHeight:"30px"}}>Enhance the reach and growth of your business multi-fold by joining us as channel partner or a DSA.</h1>
          </div>

          <div  className="link_1" style={{position:"absolute" ,zIndex:"1", left:"67%", top:"29%" ,height:"9%",width:"18%",borderRadius:"20px", backgroundColor:"#0B4FD3"}}>
          <a href="mailto:contact@nishkaera.com"><h1  style={{fontSize:"25px" ,fontStyle:"normal" , fontWeight:"500"  , color:"#FFFFFF", textAlign:"center", lineHeight:"57px"}}>Partner with Us</h1></a>
          </div>

          <div className="line tw--mt-2" style={{position:"absolute" ,zIndex:"1", left:"62%"   , top:"47%" ,height:"0.5%",width:"33%" , backgroundColor:"#524F4F"}}>

          </div>

          <div  className="text_2 tw-text-blue-900" style={{position:"absolute" ,zIndex:"1", left:"63%"   , top:"51%" ,height:"23%",width:"29%"}}>
          <h1  style={{fontSize:"25px" ,fontStyle:"normal" , fontWeight:"600" , textAlign:"center", lineHeight:"30px"}}>Nishkaera offers unique opportunities for career growth to youngsters and experienced professionals. Join us today for a rewarding career.</h1>
          </div>

          <div  className="link_2 lg:tw--mt-4" style={{position:"absolute" ,zIndex:"1", left:"70%"   , top:"82%" ,height:"9%",width:"14%",borderRadius:"20px", backgroundColor:"#0B4FD3"}}>
         <a href="/Careers"> <h1  style={{fontSize:"25px" ,fontStyle:"normal" , fontWeight:"500"  , color:"#FFFFFF", textAlign:"center", lineHeight:"57px"}}>Join Us</h1></a>
          </div>

          </div>

          <div  className="image_main" style={{position:"absolute" ,zIndex:"2", left:"12%"   , bottom:"3%" ,width:"50%"}}>
          <img src="connect.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>


         

          {/* <a href="/FixedDeposits"  className="link" id="link_fd" style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a> */}




          {/* <a href="/WomenSpecialHome"  className="link" style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a> */}


{/* 
          <div  className="image_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"9%" ,width:"17%"}}>
          <img src="Group 142carousel_fd_pl.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>
          <div  className="head_img_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"6%" ,width:"17%"}}>
          <h1 className="head_img_bottom_1_content" style={{fontSize:"34px" ,fontStyle:"normal" , fontWeight:"700"  , color:"#1D6A58"}}>Personal Loan</h1>
          </div>

          <div  className="image_bottom_2" style={{position:"absolute" ,zIndex:"1", left:"75%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 106res.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          


          <div style={{backgroundColor:"#B1EEDF"  ,width:"100%", height:"25%"  ,position:"absolute",top:"70%" }}>
          </div> */}
        </div>











  
    );
  }
}
