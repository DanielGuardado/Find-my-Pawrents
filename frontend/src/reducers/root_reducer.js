import { combineReducers } from "redux";
import userSession from "./session_reducer";
import errors from "./errors_reducer";
import shelterSession from "./shelter_session_reducer";

const RootReducer = combineReducers({
  errors,
  userSession,
  shelterSession,
});

export default RootReducer;
