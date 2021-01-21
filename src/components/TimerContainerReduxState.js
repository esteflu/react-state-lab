import React, { useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import {startTimerMinutes, startTimerSeconds, resetTimerSeconds, resetTimer, isStarted} from '../actions/TimerActions'
import './TimerContainer.css';
import store from "../store/store";

function TimerContainerReduxState() {
  const [intervalId, setIntervalId] = useState(undefined);
  const timer = useSelector(state => state.timer)
  const dispatch = useDispatch()

  const handleResetClick = () => {
    dispatch(resetTimer())
  }

  const handleButtonClick = () => {
    dispatch(isStarted())
    if (getCurrentStateFromStore().started) {
      setIntervalId(startTimer())
    } else {
      stopTimer()
    }
  }

  const startTimer = () => {
    function handleTimer() {
      dispatch(startTimerSeconds())
      if (getCurrentStateFromStore().seconds === 60) {
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
    return getCurrentStateFromStore().started ? 'Stop timer' : 'Start timer'
  }

  const getCurrentStateFromStore = () => {
    return {
      seconds: store.getState().timer.seconds,
      minutes: store.getState().timer.minutes,
      started: store.getState().started
    }
  }

  return (
      <React.Fragment>
        <div id='timer-container' className='timer-container'>
          <div className='timer-label-container'>
            <div className='timer-label'>State with redux</div>
            <div onClick={() => handleResetClick()} className='timer-reset'>Reset</div>
          </div>
          <button onClick={() => handleButtonClick()} className='timer-button'>{setTimerLabel()}</button>
          <div className='timer-value'>{timer.minutes} : {timer.seconds}</div>
        </div>
      </React.Fragment>
  )
}

export default TimerContainerReduxState