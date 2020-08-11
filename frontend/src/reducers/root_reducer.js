import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import modal from "./modal_reducer";
import dogs from "./dog_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  modal,
  dogs,
});

export default RootReducer;
