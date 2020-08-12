import React from "react";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./navBar/navBar_container";
import Splash from "./splash/splash_container";
import AdoptionFormContainer from "./adoption/adoption_form_container";
import { Switch, Route } from "react-router-dom";
import Modal from "./modal/modal";
import DogIndex from "./dogs/dog_index_container";
import DogShow from "./dogs/dog_show_container";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/dogs/:dogId" exact component={DogShow} />
        <Route path="/dogs">
          <DogIndex />
        </Route>
        <Route path="/">
          <NavBarContainer />
          <Splash />
        </Route>
        <Route path="/adoption">
          <AdoptionFormContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
