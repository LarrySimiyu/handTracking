import './App.css';

import React, {useRef} from 'react';

import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam";

function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandPose = async () => {
    const net = await handpose.load();
    console.log("Handpose model successfully loaded")

    // loop and detect hands
  }

  const detect = async (net) => {

  }

  runHandPose();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
