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
            <a href="#/dogs">
                <button className="noUserNavBar-nav-login-button">
                    DOGS
                </button> 
            </a>
    
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
<<<<<<< HEAD
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
=======
            <div className="shelterUserNavBar-container">
                <h1>{this.props.currentUser.user.shelter_name}</h1>
            </div>
            <button className="shelterUserNavBar-nav-logout-button" onClick={() => this.props.logout()}>
              logout
            </button>
          </div>
        
>>>>>>> f189894ffcd53d831e5fa528c7eabf2fe51f9a16
      );
    } else {
      return (
        <div>
          <div className="currentUserNavBar-container">
<<<<<<< HEAD
            <h1>{this.props.currentUser.user.first_name}</h1>
=======
            <div className='currentUserNavBar-left-side'>
                <h1>Welcome {this.props.currentUser.user.first_name}</h1>
                    <input
                        type="search"
                        placeholder='Do not search'
                        className='search-bar-input-field'/>
            </div>
>>>>>>> f189894ffcd53d831e5fa528c7eabf2fe51f9a16
            <button
              className="currentUserNavBar-nav-logout-button"
              onClick={() => this.props.logout()}>
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
