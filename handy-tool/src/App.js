import "./App.css";

import React, { useRef, Component } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";

import Timer from "./Timer";
import Sound from "./Sound";
import TimerControllers from "./TimerController";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: "25 : 00",
      cycle: "Session",
      workTime: 25,
      breakTime: 5,
      sound: "on",
    };
  }


  setSound = (sound) => {
    this.setState({
      sound: sound
    })
  }

  incrementTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    })
  }

  decrementTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    })
  }

  incrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  decrementTime = () => {
    this.setState({
      breaktime: this.state.breakTime - 1
    })
  }

  setCurrentTime = () => {
    this.setState({
      currentTime: this.state.currentTime
    })
  }

  setTimerRunning = (timerRunning) => {
    this.setState({
      timerRunning: timerRunning
    })
  }

  render() {
    return (
      <div className="main">
        <h1>POMODORO CLOCK</h1>

        <Timer 
          currentTime ={this.state.currentTime} 
          cycle={this.props.cycle}
          />

        <TimerControllers 
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          incrementTime={this.state.incrementTime}
          decrementTime={this.state.decrementTime}
          incrementBreakTime={this.state.incrementBreakTime}
          decrementBreakTime={this.state.decrementBreakTime}
        />

        <Sound 
          setSound={this.setSound} 
          sound={this.state.sound} 
          />
      </div>
    );
  }
}

// function App() {
//   const webcamRef = useRef(null);
//   const canvasRef = useRef(null);

//   const runHandPose = async () => {
//     const net = await handpose.load();
//     console.log("Handpose model successfully loaded");

//     // loop and detect hands
//     setInterval(() => {
//       detect(net);
//     }, 100);
//   };

//   const detect = async (net) => {
//     // check if data is Available

//     if (
//       typeof webcamRef.current !== "undefined" &&
//       webcamRef.current !== null &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       // Get Video Properties
//       const video = webcamRef.current.video;
//       const videoWidth = webcamRef.current.video.videoWidth;
//       const videoHeight = webcamRef.current.video.videoHeight;

//       // Set video width
//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       // Set canvas height and width
//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;

//       // make detections
//       // grab neural network then estimate haßnd within the video frame
//       const hand = await net.estimateHands(video);
//       console.log(hand);

//       // Draw mesh
//       const ctx = canvasRef.current.getContext("2d");
//       drawHand(hand, ctx);
//     }
//   };

//   runHandPose();

//   // TODO:
//   //TIMER BUTTON - ENTER STUDY LENGTH
//   // START STOP
//   // Random Amount of Motivation Tips

//   // Hand Detection Timer - Triggered By Hand - Seconds to Minutes
//   // Warning Time (user input)
//   // Play warning audio

//   return (
//     <div className="App">
//       <h1>WOW THIS IS TOXIC</h1>
//       <header className="App-header">
//         <Webcam
//           ref={webcamRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />

//         <canvas
//           ref={canvasRef}
//           style={{
//             position: "absolute",
//             marginLeft: "auto",
//             marginRight: "auto",
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             zindex: 9,
//             width: 640,
//             height: 480,
//           }}
//         />
//       </header>

//       <div className="main">
//         <h1>Pomodo Clock</h1>
//         <Timer />
//         <Sound />
//       </div>
//     </div>
//   );
// }

// export default App;
