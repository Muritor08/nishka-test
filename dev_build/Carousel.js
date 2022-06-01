import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import fd_banner from "../FD/assets/fd_banner.png"

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="custom-carousel"
        autoPlay={true}
        interval={2000}
        swipeable={true}
        infiniteLoop={true}

      >
       

        <div style={{backgroundColor:"white" , height:"630px", position:"relative"}}>
          

          <div  className="image" style={{position:"absolute" ,zIndex:"1", left:"4%"   , bottom:"10%" ,width:"45%"}}>
          <img src="image-removebg-preview (1) 1image new fd.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>



          <div  className="heading" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"0" ,height:"17%",width:"44%"}}>
          <h1 className=" headcontent" style={{fontSize:"92px" ,fontStyle:"normal" , fontWeight:"900"  , color:"#114034"}}>Fixed Deposit</h1>
          </div>

          <div  className="text" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"20%" ,height:"15%",width:"44%"}}>
          <h1 className=" textcontent" style={{fontSize:"26px" ,fontStyle:"normal" , fontWeight:"400"  , color:"#000000"}}>One of the most preferred investment instruments in India as it has potential to offer recurring return with capital protection and flexibility</h1>
          </div>

          <a href="https://www.nishkaera.com/FixedDeposits"  className="link" style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a>


          <div  className="image_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 104pl.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="image_bottom_2" style={{position:"absolute" ,zIndex:"1", left:"75%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 106res.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          


          <div style={{backgroundColor:"#B1EEDF"  ,width:"100%", height:"25%"  ,position:"absolute",top:"70%" }}>
          </div>
        </div>









        <div style={{backgroundColor:"white" , height:"630px", position:"relative"}}>
          

          <div  className="image" style={{position:"absolute" ,zIndex:"1", left:"2%"   , bottom:"0%" ,width:"45%"}}>
          <img src="19197296 1pl main.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>



          <div  className="heading" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"0" ,height:"17%",width:"44%"}}>
          <h1 className=" headcontent" style={{fontSize:"92px" ,fontStyle:"normal" , fontWeight:"900"  , color:"#114034"}}>Personal Loan</h1>
          </div>

          <div  className="text" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"20%" ,height:"15%",width:"44%"}}>
          <h1 className=" textcontent" style={{fontSize:"26px" ,fontStyle:"normal" , fontWeight:"400"  , color:"#000000"}}>A bank fixed deposit (FD) is also called as a term deposit, as it is a deposit account with a bank for a fixed period of time.</h1>
          </div>

          <a  className="link"  style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a>



          <div  className="image_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 103resco.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="image_bottom_2" style={{position:"absolute" ,zIndex:"1", left:"75%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 107ipoo.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          


          <div style={{backgroundColor:"#B1EEDF"  ,width:"100%", height:"25%"  ,position:"absolute",top:"70%" }}>
          </div>
        </div>









        <div style={{backgroundColor:"white" , height:"630px", position:"relative"}}>
          

          <div  className="image" style={{position:"absolute" ,zIndex:"1", left:"4%"   , bottom:"10%" ,width:"40%"}}>
          <img src="Group 120kun.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>



          <div  className="heading" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"0" ,height:"17%",width:"44%"}}>
          <h1 className=" headcontent_kn" style={{fontSize:"60px" ,fontStyle:"normal" , fontWeight:"900"  , color:"#114034"}}>Knowledge You Need</h1>
          </div>

          <div  className="text" id="text_kn" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"20%" ,height:"15%",width:"44%"}}>
          <h1 className=" textcontent" style={{fontSize:"26px" ,fontStyle:"normal" , fontWeight:"400"  , color:"#000000"}}>One of the most preferred investment instruments in India as it has potential to offer recurring return with capital protection and flexibility</h1>
          </div>
          <a className="link" id="link_kn" style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a>

          {/* <div  className="text" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"20%" ,height:"15%",width:"44%"}}>
          <button variant="success" >Learn more</button>
          </div> */}


          <div  className="image_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 107ipow.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="image_bottom_2" style={{position:"absolute" ,zIndex:"1", left:"75%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 142fd ku.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          


          <div style={{backgroundColor:"#B1EEDF"  ,width:"100%", height:"25%"  ,position:"absolute",top:"70%" }}>
          </div>
        </div>



        

        <div style={{backgroundColor:"white" , height:"630px", position:"relative"}}>
          

          <div  className="image" style={{position:"absolute" ,zIndex:"1", left:"4%"   , bottom:"10%" ,width:"40%"}}>
          <img src="19197351 1watch .png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>



          <div  className="heading" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"0" ,height:"17%",width:"44%"}}>
          <h1 className=" headcontent_kn" style={{fontSize:"60px" ,fontStyle:"normal" , fontWeight:"900"  , color:"#114034"}}>IPO Watch</h1>
          </div>

          <div  className="text" style={{position:"absolute" ,zIndex:"1", left:"50%"   , top:"20%" ,height:"15%",width:"44%"}}>
          <h1 className=" textcontent" style={{fontSize:"26px" ,fontStyle:"normal" , fontWeight:"400"  , color:"#000000"}}>One of the most preferred investment instruments in India as it has potential to offer recurring return with capital protection and flexibility</h1>
          </div>

          <a   className="link" style={{position:"absolute" ,zIndex:"1", left:"65%"   , top:"40%" ,height:"7%",width:"11%" , backgroundColor:"#3AD4AF" , display:"flex" ,alignItems:"center", justifyContent:"center" ,color:"white" , fontSize:"22px" , fontWeight:"600"}}> Learn More </a>



          <div  className="image_bottom_1" style={{position:"absolute" ,zIndex:"1", left:"50%"   , bottom:"7%" ,width:"17%"}}>
          <img src="Group 143fd watch.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="image_bottom_2" style={{position:"absolute" ,zIndex:"1", left:"75%"   , bottom:"9%" ,width:"17%"}}>
          <img src="Group 142pl ww.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>

          <div  className="image_bottom_3" style={{position:"absolute" ,zIndex:"1", left:"77%"   , bottom:"8%" ,width:"14%"}}>
          <img src="Personal Loanpl ww.png" style={{maxHeight:"100%",maxWidth:"100%" }} alt="nishkaera" />
          </div>


          


          <div style={{backgroundColor:"#B1EEDF"  ,width:"100%", height:"25%"  ,position:"absolute",top:"70%" }}>
          </div>
        </div>


      </Carousel>
    );
  }
}
