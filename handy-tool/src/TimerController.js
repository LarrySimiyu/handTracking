import React, { Component } from 'react';
import WorkController from './WorkControllers'
import BreakController from './BreakController'

class TimerControllers extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="timer-controllers">
                <WorkController />
                <BreakController />
            </div>
         );
    }
}
 
export default TimerControllers;