import {
  RECEIVE_SHELTER_SESSION_ERRORS,
  RECEIVE_CURRENT_SHELTER,
} from "../actions/shelter_session_actions";

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHELTER_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_SHELTER:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
