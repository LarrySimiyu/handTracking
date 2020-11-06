import "./App.css";

import React, { useRef } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandPose = async () => {
    const net = await handpose.load();
    console.log("Handpose model successfully loaded");

    // loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

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
      // grab neural network then estimate haßnd within the video frame
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  // runHandPose();

  // TODO:
  //TIMER BUTTON - ENTER STUDY LENGTH
  // START STOP
  // Random Amount of Motivation Tips

  // Hand Detection Timer - Triggered By Hand - Seconds to Minutes
  // Warning Time (user input)
  // Play warning audio

  let isClockRunning = false;

  let workSessionDuration = 1500;
  let currentTimeLeftInSession = 1500;
  let breakSessionDuration = 300;
  let pomodoroTimer = document.querySelector('#pomodoroTimer');

  const startTimer = () => {
    toggleClock();
  };

  const pauseTimer = () => {
    toggleClock();
  };

  const stopTimer = () => {
    toggleClock(true);
  };

  const toggleClock = (reset) => {
    if (reset) {
      //STOP THE TIMER
    } else if (isClockRunning === true) {
      // PAUSE THE Timer
      // clearInterval(clockTimer);
      isClockRunning = false;
    } else {
      //START THE Timer
      isClockRunning = true;

      const clockTimer = setInterval(() => {
        // decrease time left / increase time spent
        currentTimeLeftInSession--;
        displayCurrentTimeLeftInSession();
      }, 1000);
    }
  };
  const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = ''
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600)
    // add leading zeroes if its less than 10

    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time
    }
    if (hours > 0) result += `{hours}:`
    result += `${addLeadingZeroes(minutes)}:{addLeadingZeroes(seconds)}`
    pomodoroTimer.innerText = result.toString();

  };

  let timer = "poop";
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
          <div className="pomodoroTimer"> <h1>{timer}</h1></div>
      

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default App;
