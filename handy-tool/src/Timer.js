import React, { Component } from "react";

class Timer extends Component {

  timer = () => {
    if(this.props.timerRunning === true) {
      clearInterval(this.timer.timerId)
      this.props.setCurrentTime("25 : 00")
      this.props.setTimerRunning();
    }
    else {
      this.props.cycle === 'Session' ?
      this.props.startTimer(this.props.workTime) : 
      this.props.startTimer(this.props.breakTime)
    }
  }

  render() {
    return (
      <div>
        <span>TIMER</span>
        <span>Current Cycle</span>
      </div>
    );
  }
}

export default Timer;
