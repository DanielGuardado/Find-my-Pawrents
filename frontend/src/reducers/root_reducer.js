import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import shelterSession from "./shelter_session_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  shelterSession,
});

export default RootReducer;
