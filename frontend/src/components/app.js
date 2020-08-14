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
import AppointmentContainer from "./appointment/appointment_container";
import UserAppointmentContainer from "./user_appointments/user_appointment_container";
import MyDogsIndex from "./shelter_dogs/shelter_my_dogs_container";
import AboutPageContainer from "./About/about_container";
<<<<<<< HEAD
import ContactPageContainer from "./Contact/contact_container";
=======
import Likes from "./likes/likes_container";
>>>>>>> 3509a43a17d6b5df3ca3da390aa553b468764c8b

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/dogs/:dogId" exact component={DogShow} />
        <Route path="/my_dogs" exact component={MyDogsIndex} />
        <Route path="/about" exact component={AboutPageContainer} />
        <Route path="/contact" exact component={ContactPageContainer} />
        <ProtectedRoute path="/new_dog" exact component={ReactFirebase} />
        <ProtectedRoute path="/my_likes" exact component={Likes} />
        <ProtectedRoute
          path="/appointments"
          exact
          component={AppointmentContainer}
        />
        <ProtectedRoute
          path="/user_appointments"
          exact
          component={UserAppointmentContainer}
        />
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
