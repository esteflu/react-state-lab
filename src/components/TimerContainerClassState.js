import React, { Component } from 'react';
import './TimerContainer.css';

class TimerContainerClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      isStarted: false,
      intervalId: undefined
    };
  }

  handleResetClick = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
    })
  }

  handleButtonClick = () => {
    this.setState({isStarted: !this.state.isStarted})
    if (!this.state.isStarted) {
      this.setState({intervalId: this.startTimer()})
    } else {
      this.stopTimer(this.state.intervalId)
    }
  }

  startTimer = () => {
    function handleTimer() {
      this.setState({seconds: this.state.seconds + 1});
      if (this.state.seconds === 60) {
        this.setState({seconds: 0});
        this.setState({minutes: this.state.minutes + 1});
      }
    }

    return setInterval(() =>
            handleTimer.call(this)
        , 1000);
  }

  stopTimer = (id) => {
    clearInterval(id);
  }

  setTimerLabel = () => {
    return this.state.isStarted ? 'Stop timer' : 'Start timer'
  }

  render() {
    return (
        <React.Fragment>
          <div id='timer-container' className='timer-container'>
            <div className='timer-label-container'>
              <div className='timer-label'>State with class</div>
              <div onClick={this.handleResetClick} className='timer-reset'>Reset</div>
            </div>
            <button onClick={this.handleButtonClick} className='timer-button'>{this.setTimerLabel()}</button>
            <div className='timer-value'>{this.state.minutes} : {this.state.seconds}</div>
          </div>
        </React.Fragment>
    )
  }
}

export default TimerContainerClassState