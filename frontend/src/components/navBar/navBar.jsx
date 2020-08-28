import React from "react";
import { Link } from "react-router-dom";
import logo from "./dogLogo2.png";
import { withRouter } from "react-router";

import "./navBar.scss";

// ({ currentUser, logout, openModal })

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  noUserNavBar() {
    return (
      <div>
        <div className="noUserNavBar-container">
          <div className="noUserNavBar-left-side-of-navbar">
            <a href="/">
              <img id="logo" src={logo} alt="logo" />
            </a>
            <div className="nav-about">
              <a href="#/about">Our Team</a>
              <Link to="/about" />
            </div>
            {/* <div className="nav-contact">
              <a href="#/contact">Contact</a>
              <Link to="/contact" />
            </div> */}
          </div>
          <div className="noUserNavBar-right-side-of-navbar">
            <a href="#/dogs">
              <button className="noUserNavBar-nav-dogs-button">Dogs</button>
            </a>

            <button
              className="noUserNavBar-nav-login-button"
              onClick={() => this.props.openModal("login")}
            >
              Log in
            </button>
            <button
              className="noUserNavBar-nav-signup-button"
              onClick={() => this.props.openModal("signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  currentUserNavBar() {
    if (this.props.currentUser.user.shelter_name) {
      return (
        <div>
          <div className="shelterUserNavBar-container">
            <div className="shelterUserNavBar-left-side-of-navbar">
              <a href="/">
                <img id="logo" src={logo} alt="logo" />
              </a>
              <h2 className="welcome-back">
                Welcome back {this.props.currentUser.user.shelter_name}
              </h2>
            </div>
            <div className="shelterUserNavBar-right-side-of-navbar">
              <a href="#/dogs">
                <button className="shelterUserNavBar-nav-normal-button">
                  Dogs
                </button>
              </a>
              <a href="#/my_dogs">
                <button className="shelterUserNavBar-nav-normal-button">
                  My Dogs
                </button>
              </a>
              <Link to="/my_likes">
                <button className="shelterUserNavBar-nav-appointment-button">
                  Favorites
                </button>
              </Link>
              <a href="#/appointments">
                <button className="shelterUserNavBar-nav-appointment-button">
                  Appointments
                </button>
              </a>
              <Link to="/new_dog">
                <button className="shelterUserNavBar-nav-appointment-button">
                  Add Dog
                </button>
              </Link>
              <a href="/">
                <button
                  className="shelterUserNavBar-nav-normal-button"
                  onClick={() => this.props.logout()}
                >
                  Log out
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="currentUserNavBar-container">
            <div className="currentUserNavBar-left-side">
              <a href="/">
                <img id="logo" src={logo} alt="logo" />
              </a>
              <h2 className="welcome">
                Welcome {this.props.currentUser.user.first_name}!
              </h2>
              {/* <input
                type="search"
                placeholder="Do not search"
                className="search-bar-input-field"
              /> */}
            </div>
            <div className="currentUserNavBar-right-side">
              <a href="#/dogs">
                <button className="currentUserNavBar-nav-dogs-button">
                  Dogs
                </button>
              </a>
              <Link to="/my_likes">
                <button className="currentUserNavBar-nav-favorite-button">
                  Favorites
                </button>
              </Link>
              <Link to="/user_appointments">
                <button className="currentUserNavBar-nav-appt-button">
                  My Appointments
                </button>
              </Link>
              <a href="/">
                <button
                  className="currentUserNavBar-nav-logout-button"
                  onClick={() => this.props.logout()}
                >
                  Log Out
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

  // const shelterUserNavBar = () => (
  //   <div>
  //     <h1>shelterUser</h1>
  //   </div>
  // );

  render() {
    if (this.props.loggedIn) {
      return this.currentUserNavBar();
      // } else if (shelterUser.shelter.id) {
      //   return shelterUserNavBar();
    } else {
      return this.noUserNavBar();
    }
  }
}

export default withRouter(NavBar);
