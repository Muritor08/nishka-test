import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./nishka_socials.css";
import { Link } from 'react-router-dom';


export default class Nishka_socials extends Component {
  render() {
    return (


      <div>
        <div className="outer_social_heading tw-mt-16" style={{ backgroundColor: "white", height: "114px", position: "relative" }}>

          <div className="topic_social" style={{ position: "absolute", zIndex: "3", left: "20%", height: "80%", width: "60%" }}>
            <h1 className="topic_social_content" style={{ fontSize: "72px", color: "#114034" }}>Nishkaera on Socials</h1>
          </div>
        </div>



        <div class="row_top" style={{ paddingLeft: "130px", paddingBottom: "5px " }}>
          <div class="column_top">
            <Link to='/youtube'>
              <img src="youtube.png" alt="Snow" style={{ width: "100%" }} />
            </Link>
          </div>
          <div class="column_top">
            <Link to='/twitter'>
              <img src="twitter.png" alt="Forest" style={{ width: "100%" }} />
            </Link>
          </div>
          <div class="column_top">
            <Link to='/instagram'>
              <img src="instagram.png" alt="Mountains" style={{ width: "100%" }} />
            </Link>
          </div>
          <div class="column_top">
            <Link to='/facebook'>
              <img src="facebook.png" alt="Mountains" style={{ width: "100%" }} />
            </Link>
          </div>
        </div>



        <div className="top_icons" style={{ backgroundColor: "white", height: "114px", position: "relative" }}>


          <a href="/youtube">
            <div className="youtube" style={{ position: "absolute", zIndex: "3", left: "15%", top: "0%", width: "15%", height: "49%", backgroundColor: "#D9FFFA", borderRadius: "28px" }}>


              <div className="youtube_icon" style={{ position: "absolute", zIndex: "1", left: "18%", top: "20%", width: "16%", height: "66%" }}>
                <img src="youtube.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>
              <div className="youtube_text" style={{ position: "absolute", zIndex: "1", left: "36%", top: "20%", height: "66%" }}>
                <h1 className="yout_text" style={{ fontSize: "22px", color: "#009D81", lineHeight: "37px" }}>Youtube</h1>
              </div>

            </div>
          </a>


          <a href="/twitter">
            <div className="twitter" style={{ position: "absolute", zIndex: "3", left: "32%", top: "0%", width: "15%", height: "49%", backgroundColor: "#D9FFFA", borderRadius: "28px" }}>


              <div className="twitter_icon" style={{ position: "absolute", zIndex: "1", left: "18%", top: "20%", width: "16%", height: "66%" }}>
                <img src="twitter.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>
              <div className="twitter_text" style={{ position: "absolute", zIndex: "1", left: "36%", top: "20%", height: "66%" }}>
                <h1 className="twit_text" style={{ fontSize: "22px", color: "#009D81", lineHeight: "37px" }}>Twitter</h1>
              </div>

            </div>
          </a>

          <a href="/instagram">
            <div className="instagram" style={{ position: "absolute", zIndex: "3", left: "49%", top: "0%", width: "15%", height: "49%", backgroundColor: "#D9FFFA", borderRadius: "28px" }}>


              <div className="instagram_icon" style={{ position: "absolute", zIndex: "1", left: "18%", top: "20%", width: "16%", height: "66%" }}>
                <img src="instagram.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>
              <div className="instagram_text" style={{ position: "absolute", zIndex: "1", left: "36%", top: "20%", height: "66%" }}>
                <h1 className="inst_text" style={{ fontSize: "22px", color: "#009D81", lineHeight: "37px" }}>Instagram</h1>
              </div>

            </div>
          </a>


          <a href="/facebook">
            <div className="facebook" style={{ position: "absolute", zIndex: "3", left: "66%", top: "0%", width: "15%", height: "49%", backgroundColor: "#D9FFFA", borderRadius: "28px" }}>


              <div className="facebook_icon" style={{ position: "absolute", zIndex: "1", left: "18%", top: "20%", width: "16%", height: "66%" }}>
                <img src="facebook.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
              </div>
              <div className="facebook_text" style={{ position: "absolute", zIndex: "1", left: "36%", top: "20%", height: "66%" }}>
                <h1 className="face_text" style={{ fontSize: "22px", color: "#009D81", lineHeight: "37px" }}>Facebook</h1>
              </div>

            </div>
          </a>

        </div>


        {/* // following are the divs where the respective latest posts have to be displayed */}

        <div className="tw-w-full tw-flex tw-gap-2 tw-flex-row tw-mb-4">
          <div className="tw-w-1/4">
            <Link to='/youtube'>
            <img src="youtubeframe.png" alt="Snow" className="tw-w-full" />
            </Link>
          </div>
          <div className="tw-w-1/4">
            <Link to='/twitter'>
            <img src="twitterframe.png" alt="Forest" className="tw-w-full" />
            </Link>
          </div>
          <div className="tw-w-1/4">
            <Link to='/instagram'>
            <img src="instagramframe.png" alt="Mountains" className="tw-w-full" />
            </Link>
          </div>
          <div className="tw-w-1/4">
            <Link to='/facebook'>
            <img src="facebookframe.png" alt="Mountains" className="tw-w-full" />
            </Link>
          </div>
        </div>


        {/* </div> */}
      </div>
    );
  }
}
