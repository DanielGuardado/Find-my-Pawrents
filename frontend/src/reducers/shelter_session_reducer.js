import {
  RECEIVE_CURRENT_SHELTER,
  RECEIVE_SHELTER_LOGOUT,
  RECEIVE_SHELTER_SIGN_IN,
} from "../actions/shelter_session_actions";

const initialState = {
  isAuthenticated: false,
  shelter: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_SHELTER:
      return {
        ...state,
        isAuthenticated: !!action.currentShelter,
        shelter: action.currentShelter,
      };
    case RECEIVE_SHELTER_LOGOUT:
      return {
        isAuthenticated: false,
        shelter: undefined,
      };
    case RECEIVE_SHELTER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    default:
      return state;
  }
}
