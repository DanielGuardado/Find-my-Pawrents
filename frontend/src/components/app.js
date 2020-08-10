import React from "react";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import ShelterLoginFormContainer from "./session/shelter_login_form_container";
import ShelterSignupFormContainer from "./session/shelter_signup_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./navBar/navBar_container";
import Splash from "./splash/splash_container";
import { Switch, Route } from "react-router-dom";
import Modal from "./modal/modal";

const App = () => {
  return (
    <div className="App">
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
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
        <Route path="/">
          <NavBarContainer />
          <Splash />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
