import React, { Component } from "react";

class WorkController extends Component {

  handleWorkIncrement = () => {
    this.props.incrementTime();
    if(this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }

  };

  handleWorkDecrement = () => {
    this.props.decrementTime();
    if(this.props.timerRunning === false) {
      this.props.setCurrentTime(this.props.workTime)
    }
  };

  render() {
    return (
      <div className="controller">
        <p>SESSION</p>
        <button onClick={this.handleWorkIncrement}> + </button>
        <span> {this.props.workTime} </span>
        <button onClick={this.handleWorkDecrement}> - </button>
      </div>
    );
  }
}

export default WorkController;
