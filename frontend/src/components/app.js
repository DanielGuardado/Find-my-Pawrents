import React from "react";
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
import { Switch, Route } from "react-router-dom";
import ShelterLoginFormContainer from "./session/shelter_login_form_container";
import ShelterSignupFormContainer from "./session/shelter_signup_form_container";
import Splash from "./splash/splash_container";
import NavBarContainer from "./navBar/navBar_container";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <AuthRoute
          exact
          path="/shelter-login"
          component={ShelterLoginFormContainer}
        />
        <AuthRoute
          exact
          path="/shelter-signup"
          component={ShelterSignupFormContainer}
        />
        {/* <Route path="/" exact component={<dßiv>Hello</dßiv>} /> */}
        <Route path="/" exact component={Splash} />
        <Route path="/" exact component={NavBarContainer} />
      </Switch>
    </div>
  );
};

export default App;
