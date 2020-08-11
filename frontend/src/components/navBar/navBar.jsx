import React from "react";
import { Link } from "react-router-dom";
import logo from './dogLogo2.png'
import './navBar.scss'

// ({ currentUser, logout, openModal })

class NavBar extends React.Component{
    noUserNavBar() {

        return(
            <div>
                <div className='noUserNavBar-container'>
                    <div className='noUserNavBar-left-side-of-navbar'>
                        <img id='logo' src={logo}/>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='noUserNavBar-right-side-of-navbar'>
                        <button className="noUserNavBar-nav-login-button" onClick={() => this.props.openModal("login")}>
                            Login
                        </button>
                        <button className="noUserNavBar-nav-signup-button" onClick={() => this.props.openModal("signup")}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        )};

   currentUserNavBar() {
       debugger
       return(
            <div>
               <div className='currentUserNavBar-container'>
                    <h1> {this.props.currentUser} </h1>
                   <button className="currentUserNavBar-nav-logout-button" onClick={()=> this.props.logout()}>logout</button>
               </div>
            </div>
        )};

  // const shelterUserNavBar = () => (
  //   <div>
  //     <h1>shelterUser</h1>
  //   </div>
  // );

        render(){

            if (this.props.loggedIn) {
              return this.currentUserNavBar();
            // } else if (shelterUser.shelter.id) {
            //   return shelterUserNavBar();
            } else {
              return this.noUserNavBar();
            }
          };

        }

export default NavBar;
