import changeTheNum from "./updown";
// import { combineReducers } from "react-redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNum: changeTheNum,
});

export default rootReducer;
