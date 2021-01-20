const initialState = {
  seconds: 0,
  minutes: 0
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER_SECONDS':
      return {
        ...state,
        seconds: state.seconds + 1
      }
    case 'START_TIMER_MINUTES':
      return {
        ...state,
        minutes: state.minutes + 1
      }
    case 'RESET_TIMER_SECONDS':
      return {
        ...state,
        seconds: 0
      }
    case 'RESET_TIMER':
      return {
        ...state,
        seconds: 0,
        minutes: 0
      }
    default:
        return state
  }
}

export default timerReducer;