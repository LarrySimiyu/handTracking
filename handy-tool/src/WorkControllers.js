import React, { Component } from "react";

class WorkController extends Component {
  handleWorkIncrement = () => {
    this.props.incrementTime();
  };

  handleWorkDecrement = () => {
    this.props.decrementTime();
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
