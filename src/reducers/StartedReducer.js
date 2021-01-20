const initalState = false

const startedReducer = (state = initalState, action) => {
  switch(action.type) {
    case 'IS_STARTED':
      return !state
    default:
        return state
  }
}

export default startedReducer