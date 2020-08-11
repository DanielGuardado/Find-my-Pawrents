import React from "react";
import { Link } from "react-router-dom";
import logo from "./dogLogo2.png";
import "./navBar.scss";

// ({ currentUser, logout, openModal })

class NavBar extends React.Component {
  noUserNavBar() {
    return (
      <div>
        <div className="noUserNavBar-container">
          <div className="noUserNavBar-left-side-of-navbar">
<<<<<<< HEAD
            <a href="/">
              <img id="logo" src={logo} />
            </a>
            <div className="nav-about">
              About
              <Link to="/about" />
            </div>
            <div className="nav-contact">
              Contact
              <Link to="/contact" />
            </div>
          </div>
          <div className="noUserNavBar-right-side-of-navbar">
            <button
              className="noUserNavBar-nav-login-button"
              onClick={() => this.props.openModal("login")}
            >
              Login
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
          <div className="currentUserNavBar-container">
            <h1>{this.props.currentUser.user.shelter_name}</h1>
            <button
              className="currentUserNavBar-nav-logout-button"
              onClick={() => this.props.logout()}
            >
              logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="currentUserNavBar-container">
            <h1>{this.props.currentUser.user.first_name}</h1>
=======
            <img id="logo" src={logo} />
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="noUserNavBar-right-side-of-navbar">
            <button
              className="noUserNavBar-nav-login-button"
              onClick={() => this.props.openModal("login")}
            >
              Login
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
            <h1>{this.props.currentUser.user.shelter_name}</h1>
            <button
              className="shelterUserNavBar-nav-logout-button"
              onClick={() => this.props.logout()}
            >
              logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="currentUserNavBar-container">
            <div className='currentUserNavBar-left-side'>
                <h1>Welcome back {this.props.currentUser.user.first_name}</h1>
                <input type="search"
                    placeholder='Do Not Search'
                    className= 'search-bar-input-field'
                />
            </div>
>>>>>>> Navbar3-Logic
            <button
              className="currentUserNavBar-nav-logout-button"
              onClick={() => this.props.logout()}
            >
              logout
            </button>
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

export default NavBar;
