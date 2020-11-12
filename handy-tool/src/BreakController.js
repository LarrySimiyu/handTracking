import React, { Component } from "react";

class BreakController extends Component {
  handleBreakIncrement = () => {
    this.props.incrementBreak();
  };

  handleBreakDecrement = () => {
    this.props.decrementTime();
  };

  render() {
    return (
      <div className="controller">
        <p>BREAK</p>
        <button onClick={this.handleBreakIncrement}> + </button>
        <span> {this.props.breakTime} </span>
        <button onClick={this.handleBreakDecrement}> - </button>
      </div>
    );
  }
}

export default BreakController;
