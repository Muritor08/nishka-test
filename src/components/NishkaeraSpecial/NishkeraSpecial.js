import React, { Component } from "react";
import "./NishkeraSpecial.css";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function NishkeraSpecial() {

  return (



    <div class="special_main" style={{ backgroundColor: "white", position: "relative" }}>

      <div className="heading" style={{ position: "absolute", zIndex: "2", left: "33%", top: "5%" }}>
        <h1 className=" headcontent tw-mt-6 md:tw-mt-0" style={{ fontSize: "70px", fontStyle: "normal", fontWeight: "700", color: "#1D6A58" }}>Nishkaera's Special</h1>
      </div>
      <div className="image" style={{ position: "absolute", zIndex: "2", left: "-50px", bottom: "0px", width: "47%" }}>
        <img src="Group 122special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
      </div>

      <div className="div1" style={{ position: "absolute", zIndex: "2", left: "46%", top: "13%", width: "25%", height: "36%" }}>

        <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "0px", top: "0px", width: "61%", height: "59%" }}>
          <img src="Frame 30daily digest.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
        </div>

        <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "59%", top: "7%", height: "28%", width: "28%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Daily Digest</h1>
        </div>

        <div className="text1" style={{ position: "absolute", zIndex: "1", left: "6px", top: "68%", height: "17%", width: "91%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58", textAlign: "left" }}>Get Top Global and Local Business news</h1>
        </div>

      </div>







      <div className="div2" style={{ position: "absolute", zIndex: "2", left: "73%", top: "13%", width: "25%", height: "36%" }}>

        <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "0px", top: "0px", width: "61%", height: "59%" }}>
          <img src="Frame 33ipo special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
        </div>

        <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "59%", top: "7%", height: "28%", width: "28%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>IPO Watch</h1>
        </div>

        <div className="text1" style={{ position: "absolute", zIndex: "1", left: "6px", top: "68%", height: "17%", width: "91%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58", textAlign: "left" }}>Comprehensive and un-biased analysis of IPOs</h1>
        </div>

      </div>


      <div className="div3" style={{ position: "absolute", zIndex: "2", left: "46%", top: "51%", width: "25%", height: "36%" }}>

        <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "0px", top: "0px", width: "61%", height: "59%" }}>
          <img src="Frame 31result special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
        </div>

        <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "59%", top: "7%", height: "28%", width: "28%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Financial Results Analysis</h1>
        </div>

        <div className="text1" style={{ position: "absolute", zIndex: "1", left: "6px", top: "68%", height: "17%", width: "91%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58", textAlign: "left" }}>Quarterly Financial Results Analysis: Detailed analysis of Quarterly results of the Companies</h1>
        </div>

      </div>

      <div className="div4" style={{ position: "absolute", zIndex: "2", left: "73%", top: "51%", width: "25%", height: "36%" }}>

        <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "0px", top: "0px", width: "61%", height: "59%" }}>
          <img src="Frame 32sector special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
        </div>

        <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "59%", top: "7%", height: "28%", width: "28%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Sector Analysis</h1>
        </div>

        <div className="text1" style={{ position: "absolute", zIndex: "1", left: "6px", top: "68%", height: "17%", width: "91%" }}>
          <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58", textAlign: "left" }}>Analysis and updates on developments in the core sectors of Indian Economy</h1>
        </div>

      </div>




      <div className="caraa" style={{ paddingTop: "150px" }}>





        <Carousel
          className="custom-carousel"
          autoPlay={true}
          interval={2000}
          swipeable={true}
          infiniteLoop={true}

        >
          <div style={{ backgroundColor: "white", height: "500px", position: "relative" }}>

            <div className="image_car" style={{ backgroundColor: "#ECFBF7", position: "absolute", zIndex: "2", left: "0px", bottom: "0px", width: "100%" }}>
              <img src="Group 122special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
            </div>



          </div>



          <div style={{ backgroundColor: "white", height: "500px", position: "relative" }}>

            <div style={{ backgroundColor: "#B1EEDF", position: "absolute", zIndex: "2", width: "100%", height: "18%", position: "absolute", top: "0px" }}>
            </div>

            <div className="div1car" style={{ position: "absolute", zIndex: "2", left: "0%", top: "5%", width: "100%", height: "100%" }}>

              <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "15%", top: "15%", width: "61%", height: "59%" }}>
                <img src="Frame 30daily digest.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>

              <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "28%", top: "0%", height: "14%", width: "50%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Daily Digest</h1>
              </div>

              <div className="text1car" style={{ position: "absolute", zIndex: "1", left: "7%", top: "75%", height: "5%", width: "85%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58" }}>Get Top Global and Local Business news</h1>
              </div>

            </div>
          </div>


          <div style={{ backgroundColor: "white", height: "500px", position: "relative" }}>

            <div style={{ backgroundColor: "#B1EEDF", position: "absolute", zIndex: "2", width: "100%", height: "18%", position: "absolute", top: "0px" }}>
            </div>
            <div className="div2car" style={{ position: "absolute", zIndex: "2", left: "0%", top: "5%", width: "100%", height: "100%" }}>

              <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "15%", top: "16%", width: "61%", height: "59%" }}>
                <img src="Frame 33ipo special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>

              <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "28%", top: "0%", height: "14%", width: "50%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>IPO Watch</h1>
              </div>

              <div className="text1car" style={{ position: "absolute", zIndex: "1", left: "7%", top: "70%", height: "5%", width: "85%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58" }}>Comprehensive and un-biased analysis of IPOs</h1>
              </div>

            </div>
          </div>


          <div style={{ backgroundColor: "white", height: "500px", position: "relative" }}>

            <div style={{ backgroundColor: "#B1EEDF", position: "absolute", zIndex: "2", width: "100%", height: "18%", position: "absolute", top: "0px" }}>
            </div>


            <div className="div3car" style={{ position: "absolute", zIndex: "2", left: "0%", top: "5%", width: "100%", height: "100%" }}>

              <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "15%", top: "16%", width: "61%", height: "59%" }}>
                <img src="Frame 31result special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>

              <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "2%", top: "0%", height: "14%", width: "100%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Financial Results Analysis</h1>
              </div>

              <div className="text1car" style={{ position: "absolute", zIndex: "1", left: "7%", top: "70%", height: "5%", width: "85%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58" }}>Quarterly Financial Results Analysis: Detailed analysis of Quarterly results of the Companies</h1>
              </div>

            </div>
          </div>



          <div style={{ backgroundColor: "white", height: "500px", position: "relative" }}>

            <div style={{ backgroundColor: "#B1EEDF", position: "absolute", zIndex: "2", width: "100%", height: "18%", position: "absolute", top: "0px" }}>
            </div>

            <div className="div4car" style={{ position: "absolute", zIndex: "2", left: "0%", top: "5%", width: "100%", height: "100%" }}>

              <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "15%", top: "16%", width: "61%", height: "59%" }}>
                <img src="Frame 32sector special.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>

              <div className="heading1" style={{ position: "absolute", zIndex: "1", left: "22%", top: "0%", height: "14%", width: "75%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#1D6A58", textAlign: "left" }}>Sector Analysis</h1>
              </div>

              <div className="text1car" style={{ position: "absolute", zIndex: "1", left: "7%", top: "72%", height: "5%", width: "85%" }}>
                <h1 className=" headcontent_1" style={{ fontSize: "20px", fontStyle: "normal", fontWeight: "400", color: "#1D6A58" }}>Analysis and updates on developments in the core sectors of Indian Economy</h1>
              </div>

            </div>
          </div>











        </Carousel>





      </div>









    </div>

  )

}
