import {combineReducers} from "redux";

function houses(state = [], action) { 
  if (action.type === "HOUSES_LOADED") {
    return [...state,action.value];
  }
  return state;
}

const rootReducer = combineReducers({
  houses,
});

export default rootReducer;
