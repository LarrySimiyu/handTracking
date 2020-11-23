import "./App.css";

import React, { useRef, useState, Component } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // const [timer, setTimer] = useState(0);
  // const [isActive, setIsActive] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  // const countRef = useRef(null);

  const runHandPose = async () => {
    const net = await handpose.load();
    console.log("Handpose model successfully loaded");

    // loop and detect hands
    setInterval(() => {
      detect(net);
    }, 1000);
  };

  runHandPose()


  const detect = async (net) => {
    // check if data is Available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // make detections
      // grab neural network then estimate hand within the video frame
      const hand = await net.estimateHands(video);
     
      console.log(hand.length)
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandPose()



  // const handleStart = () => {
  //   // start button logic here
  //   setIsActive(true);
  //   setIsPaused(true);
  //   countRef.current = setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000);
  // };

  // const handlePause = () => {
  //   // Pause button logic here
  //   clearInterval(countRef.current);
  //   setIsPaused(false);
  // };

  // const handleResume = () => {
  //   // Resume button logic here
  //   setIsPaused(true);
  //   countRef.current = setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000);
  // };

  // const handleReset = () => {
  //   // Reset button logic here
  //   clearInterval(countRef.current);
  //   setIsActive(false);
  //   setIsPaused(false);
  //   setTimer(0);
  // };

  // const formatTime = () => {
  //   const getSeconds = `0${timer % 60}`.slice(-2);
  //   const minutes = `${Math.floor(timer / 60)}`;
  //   const getMinutes = `0${minutes % 60}`.slice(-2);
  //   const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  //   return `${getHours} : ${getMinutes} : ${getSeconds}`;
  // };



  // TODO: Check if the length of the hand array < 1. if it is then start the timer
  // TODO: If the length of the hand is > 1 then stop the timer
  // TODO: Once you get to the set limit of distraction then donate - minimum a dollar
  // TODO: Timer's only reset once you have reached your study goal

  // TODO:
  //TIMER BUTTON - ENTER STUDY LENGTH
  // START STOP
  // Random Amount of Motivation Tips

  // Hand Detection Timer - Triggered By Hand - Seconds to Minutes
  // Warning Time (user input)
  // Play warning audio

  return (
    <div className="App">
      <h1>WOW THIS IS TOXIC</h1>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
      <div className="main">
        <h1>Pomodo Clock</h1>
      </div>
      {/* <p>{formatTime()}</p> {/* here we will show timer */}
      {/* <div className="buttons">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button> 
      </div> */}
    </div>
  );
}

export default App;
