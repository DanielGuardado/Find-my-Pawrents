import axios from "axios";

export const signup = (userData) => {
  return axios.post("/api/shelters/signup", userData);
};

export const login = (userData) => {
  return axios.post("/api/shelters/login", userData);
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
