import { combineReducers } from "redux";
import itemReducer from "./itemSlice";

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
