import React, { Component } from "react";



export default class Trending_heading extends Component {
    render() {
      return (

        <div className="outer_trend_heading tw-mt-10" style={{backgroundColor:"white" , height:"114px", position:"relative"}}>

        <div  className="topic_trending" style={{position:"absolute" ,zIndex:"3", left:"33%"    ,height:"80%",width:"34%"}}>
          <h1 className="topic_trend_content" style={{fontSize:"72px"  , color:"#114034"}}>Trending News</h1>
          </div>
</div>
);
}
}


