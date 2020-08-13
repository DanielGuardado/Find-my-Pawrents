import React from "react";
import "../App.css";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import NavBarContainer from "./navBar/navBar_container";
import Splash from "./splash/splash_container";
import { Switch, Route } from "react-router-dom";
import Modal from "./modal/modal";
import DogIndex from "./dogs/dog_index_container";
import DogShow from "./dogs/dog_show_container";
import ReactFirebase from "./firebase/new_dog_form_container";
<<<<<<< HEAD
import AppointmentContainer from './appointment/appointment_container'
=======
import MyDogsIndex from "./shelter_dogs/shelter_my_dogs_container";
>>>>>>> my_dogs_feature

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/dogs/:dogId" exact component={DogShow} />
        <Route path="/my_dogs" exact component={MyDogsIndex} />
        <ProtectedRoute path="/new_dog" exact component={ReactFirebase} />
        <ProtectedRoute path="/appointments" exact component={AppointmentContainer} />
        <Route path="/dogs">
          <DogIndex />
        </Route>
        <Route path="/">
          <NavBarContainer />
          <Splash />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
