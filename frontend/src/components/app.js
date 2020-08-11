import React from "react";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./navBar/navBar_container";
import Splash from "./splash/splash_container";
import { Switch, Route } from "react-router-dom";
import Modal from "./modal/modal";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/">
          <NavBarContainer />
          <Splash />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
