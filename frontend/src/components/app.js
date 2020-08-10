import React from "react";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import ShelterLoginFormContainer from "./session/shelter_login_form_container";
import ShelterSignupFormContainer from "./session/shelter_signup_form_container";
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
        {/* <Route path="/" exact component={<div>Hello</div>} /> */}
      </Switch>
    </div>
  );
};

export default App;
