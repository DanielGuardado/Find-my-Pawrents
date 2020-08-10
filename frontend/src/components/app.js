import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import  LoginFormContainer  from './session/login_form_container';
import  SignupFormContainer  from "./session/signup_form_container";
import { Switch } from "react-router-dom";
import Modal from './modal/modal';

const App = () => {
  return (
    <div className="App">
    <Modal />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
