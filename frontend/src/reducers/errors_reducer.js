import { combineReducers } from "redux";
import ShelterSessionErrorReducer from "./shelter_session_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  shelter: ShelterSessionErrorReducer,
});
