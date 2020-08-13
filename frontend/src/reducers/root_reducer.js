import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import modal from "./modal_reducer";
import dogs from "./dog_reducer";
import appointments from "./appointments_reducer";
import likes from "./like_reducer";
const RootReducer = combineReducers({
  errors,
  session,
  modal,
  dogs,
  appointments,
  likes,
});

export default RootReducer;
