import timerReducer from "./TimerReducer";
import startedReducer from "./StartedReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  timer: timerReducer,
  started: startedReducer
})

export default rootReducer;