import React, { Component } from "react";
import "./special_heading.css";



export default class Special_heading extends Component {
    render() {
      return (

        <div className="outer_special_heading tw-mt-12" style={{backgroundColor:"white" , height:"114px", position:"relative"}}>

        <div  className="topic_special" style={{position:"absolute" ,zIndex:"3", left:"28%"    ,height:"80%"}}>
          <h1 className="topic_special_content" style={{fontSize:"72px"  , color:"#114034"}}>Nishkaera's Special</h1>
          </div>
</div>
);
}
}


