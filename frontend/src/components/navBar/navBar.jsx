import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  const noUserNavBar = () => (
    <div>
      <div>
        <p>About</p>
        <p>Contact</p>
        <button className="nav-login-button" onClick={() => openModal("login")}>
          Login
        </button>
        <button
          className="nav-signup-button"
          onClick={() => openModal("signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );

  const currentUserNavBar = () => (
    <div>
      <h1> USER </h1>
    </div>
  );

  // const shelterUserNavBar = () => (
  //   <div>
  //     <h1>shelterUser</h1>
  //   </div>
  // );

  // if (currentUser.user.id) {
  //   return currentUserNavBar();
  // } else if (shelterUser.shelter.id) {
  //   return shelterUserNavBar();
  // } else {
  //   return noUserNavBar();
  // }
};

export default NavBar;
