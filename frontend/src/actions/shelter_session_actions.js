import * as ShelterSessionAPIUtil from "../util/shelter_session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_SHELTER = "RECEIVE_CURRENT_SHELTER";
export const RECEIVE_SHELTER_SESSION_ERRORS = "RECEIVE_SHELTER_SESSION_ERRORS";
export const RECEIVE_SHELTER_LOGOUT = "RECEIVE_SHELTER_LOGOUT";
export const RECEIVE_SHELTER_SIGN_IN = "RECEIVE_SHELTER_SIGN_IN";

export const receiveCurrentShelter = (currentShelter) => ({
  type: RECEIVE_CURRENT_SHELTER,
  currentShelter,
});

export const receiveShelterSignIn = () => ({
  type: RECEIVE_SHELTER_SIGN_IN,
});

export const receiveShelterErrors = (errors) => ({
  type: RECEIVE_SHELTER_SESSION_ERRORS,
  errors,
});

export const logoutShelter = () => ({
  type: RECEIVE_SHELTER_LOGOUT,
});

//thunk

export const signup = (shelter) => (dispatch) =>
  ShelterSessionAPIUtil.signup(shelter).then(
    () => dispatch(receiveShelterSignIn()),
    (err) => dispatch(receiveShelterErrors(err.response.data))
  );

export const login = (shelter) => (dispatch) =>
  ShelterSessionAPIUtil.login(shelter)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      ShelterSessionAPIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentShelter(decoded));
    })
    .catch((err) => {
      dispatch(receiveShelterErrors(err.response.data));
    });

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  ShelterSessionAPIUtil.setAuthToken(false);
  dispatch(logoutShelter());
};
