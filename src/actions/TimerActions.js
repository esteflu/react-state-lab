export const startTimerSeconds = () => {
  return {
    type: 'START_TIMER_SECONDS'
  }
}

export const startTimerMinutes = () => {
  return {
    type: 'START_TIMER_MINUTES'
  }
}

export const resetTimerSeconds = () => {
  return {
    type: 'RESET_TIMER_SECONDS'
  }
}

export const isStarted = () => {
  return {
    type: 'IS_TIMER_STARTED'
  }
}

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER'
  }
}