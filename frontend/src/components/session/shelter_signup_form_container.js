import { connect } from "react-redux";
import { signup } from "../../actions/shelter_session_actions";
import ShelterSignupForm from "./shelter_signup_form";

const mapStateToProps = (state) => ({
  signedIn: state.shelterSession.isSignedIn,
  errors: state.errors.shelter,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (shelter) => dispatch(signup(shelter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShelterSignupForm);
