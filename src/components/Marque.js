import axios from 'axios';
import React, { Component } from 'react'

export default class Marque extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      id:"",
      text:""
      // sessionStorage.getItem("banner") || true
    }
    // this.handleClick=this.handleClick.bind(this);
    this.fetchmarque=this.fetchmarque.bind(this);
  }
  // componentDidMount(){
  //   sessionStorage.setItem("banner",true);
  // }
  // handleClick = () => {
  //   this.setState({
  //     show:false
  //   });
  //   sessionStorage.setItem("banner",false)
  // }
 fetchmarque=async()=>{
   try{
     const res=await axios.get(`${process.env.REACT_APP_APIURL}/api/marque/`)
    
     this.setState({
       text:res.data.results[0].text
     })
     
   }catch(error){
    
   }


  }
  componentDidMount=()=>{
    this.fetchmarque()
  }
  render() {
    return (
      <>
        {this.state.show ?
          < div className="marque-container">

            <p className="marquee">{this.state.text}</p>
          </div>


          /* <div className="marque">
            <p></p>
            <i className="fas fa-times" onClick={this.handleClick}></i>  
          </div>   */


          : <div></div>

        }



      </>
    )
  }
}

