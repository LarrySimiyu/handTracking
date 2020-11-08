import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Timer from './Timer';
import TimerControllers from './TimerController'
import WorkController from './WorkControllers'
import BreakController from './BreakController'
import Sound from './Sound';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <h1 />
        <Timer />
        <div>
          <span> /TIMER/ </span>
          <span>/CURRENT SESSION/</span>
        </div>
        <TimerControllers />
        <div>
          <WorkController />
          <div>
            <button> + </button>
            <span> /BREAKTIME/ </span>
            <button> - </button>
          </div>
          <BreakController />
          <div>
            <button> + </button>
            <span> /WORKTIME/ </span> 
            <button> - </button>
          </div>
        </div>
        <Sound />
          <button>/SOUND ICON/</button>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
