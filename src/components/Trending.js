import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Trending.css";


export default class Trending extends Component {
  render() {
    return (

      <div className="outer_trend tw-mt-4" style={{backgroundColor:"white" , height:"670px", position:"relative"}}>
        {/* <div  className="topic_trending" style={{position:"absolute" ,zIndex:"3", left:"33%"   , top:"6.5%" ,height:"9%",width:"34%"}}>
          <h1 className="topic_trend_content" style={{fontSize:"72px"  , color:"#114034"}}>Trending News</h1>
          </div> */}

          {/* <div className="carousel" style={{backgroundColor:"white" , height:"627px", position:"absolute" , zIndex:"3", top:" 22%"}}> */}
      
      <Carousel
        className="custom-carousel"
        autoPlay={true}
        interval={2000}
        swipeable={true}
        infiniteLoop={true}

      >
       

       <div className="carousel_1" style={{backgroundColor:"#EDFCF8" , height:"670px", position:"relative"}}>
          

          <div  className="bg_image" style={{position:"absolute" ,zIndex:"2", left:"7%"   , top:"4%" ,width:"87%" , height:"570px"}}>
          <img src="image 4trend.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="news_box" style={{backgroundColor:"white", position:"absolute" ,zIndex:"2", left:"49%"   , top:"12%" ,width:"35%" , height:"460px"}}>

          <div  className="news_heading" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"15%" ,height:"31%",width:"87%"}}>
          <h1 className="news_head_content" style={{fontSize:"40px" ,lineHeight:" 48px", fontStyle:"normal" , fontWeight:"900"  , color:"#1D6A58" , textAlign:"left"}}>One Stop Solution to Your Financial Problem?</h1>
          </div>

          <div  className="news" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"55%" ,height:"31%",width:"87%"}}>
          <h1 className="news_content" style={{fontSize:"18px" ,lineHeight:" 21px", fontStyle:"normal" , fontWeight:"400"  , color:"#000000" , textAlign:"left"}}>Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the ...</h1>
          </div>

          </div>


     </div>

     <div className="carousel_1" style={{backgroundColor:"#EDFCF8" , height:"670px", position:"relative"}}>
          

          <div  className="bg_image" style={{position:"absolute" ,zIndex:"2", left:"7%"   , top:"4%" ,width:"87%" , height:"570px"}}>
          <img src="image 4trend.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="news_box" style={{backgroundColor:"white", position:"absolute" ,zIndex:"2", left:"49%"   , top:"12%" ,width:"35%" , height:"460px"}}>

          <div  className="news_heading" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"15%" ,height:"31%",width:"87%"}}>
          <h1 className="news_head_content" style={{fontSize:"40px" ,lineHeight:" 48px", fontStyle:"normal" , fontWeight:"900"  , color:"#1D6A58" , textAlign:"left"}}>One Stop Solution to Your Financial Problem?</h1>
          </div>

          <div  className="news" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"55%" ,height:"31%",width:"87%"}}>
          <h1 className="news_content" style={{fontSize:"18px" ,lineHeight:" 21px", fontStyle:"normal" , fontWeight:"400"  , color:"#000000" , textAlign:"left"}}>Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the ...</h1>
          </div>

          </div>


     </div>


     <div className="carousel_1" style={{backgroundColor:"#EDFCF8" , height:"670px", position:"relative"}}>
          

          <div  className="bg_image" style={{position:"absolute" ,zIndex:"2", left:"7%"   , top:"4%" ,width:"87%" , height:"570px"}}>
          <img src="image 4trend.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="news_box" style={{backgroundColor:"white", position:"absolute" ,zIndex:"2", left:"49%"   , top:"12%" ,width:"35%" , height:"460px"}}>

          <div  className="news_heading" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"15%" ,height:"31%",width:"87%"}}>
          <h1 className="news_head_content" style={{fontSize:"40px" ,lineHeight:" 48px", fontStyle:"normal" , fontWeight:"900"  , color:"#1D6A58" , textAlign:"left"}}>One Stop Solution to Your Financial Problem?</h1>
          </div>

          <div  className="news" style={{position:"absolute" ,zIndex:"1", left:"6.5%"   , top:"55%" ,height:"31%",width:"87%"}}>
          <h1 className="news_content" style={{fontSize:"18px" ,lineHeight:" 21px", fontStyle:"normal" , fontWeight:"400"  , color:"#000000" , textAlign:"left"}}>Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the Is this the ...</h1>
          </div>

          </div>


     </div>










       

      </Carousel>
      </div>
      // </div>
    );
  }
}
