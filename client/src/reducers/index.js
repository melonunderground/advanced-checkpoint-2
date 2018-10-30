// * Create reducer for the state
// * care about the action THINGS_LOADED


import { combineReducers } from "redux";

function houses(state = [], action) {
  if (action.type === "HOUSES_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  houses
});

export default rootReducer;


