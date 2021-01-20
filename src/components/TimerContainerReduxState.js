import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {startTimerMinutes, startTimerSeconds, resetTimerSeconds} from '../actions/TimerActions'
import {isStarted} from '../actions/TimerActions'
import './TimerContainer.css';
import store from "../store/store";

function TimerContainerReduxState() {
  const [intervalId, setIntervalId] = useState(undefined);
  const timer = useSelector(state => state.timer)
  const started = useSelector(state => state.started)
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    dispatch(isStarted())
    if (!started) {
      setIntervalId(startTimer())
    } else {
      stopTimer()
    }
  }

  const startTimer = () => {
    function handleTimer() {
      dispatch(startTimerSeconds())
      if (store.getState().timer.seconds === 60) {
        dispatch(resetTimerSeconds())
        dispatch(startTimerMinutes())
      }
    }

    return setInterval(() =>
            handleTimer.call(this)
        , 1000);
  }

  const stopTimer = () => {
    clearInterval(intervalId)
  }

  const setTimerLabel = () => {
    return started ? 'Stop timer' : 'Start timer'
  }

  return (
      <React.Fragment>
        <div id='timer-container' className='timer-container'>
          <button onClick={() => handleButtonClick()} className='timer-button'>{setTimerLabel()}</button>
          <div className='timer-value'>{timer.minutes} : {timer.seconds}</div>
        </div>
      </React.Fragment>
  )
}

export default TimerContainerReduxState