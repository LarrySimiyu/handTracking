import React, { Component } from "react";
import './App.css';




class Sound extends Component {

 toggleSound = () => {
     this.props.sound === "on" ?
     this.props.setSound("off") :
     this.props.setSound("on");
 }


  render() {
    return <button className="soundButton" onClick={this.toggleSound}>Sound</button>;
  }
}

export default Sound;
