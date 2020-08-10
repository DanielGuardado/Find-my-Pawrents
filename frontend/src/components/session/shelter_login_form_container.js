import { connect } from "react-redux";
import { login } from "../../actions/shelter_session_actions";
import ShelterLoginForm from "./shelter_login_form";

const mapStateToProps = (state) => ({
  errors: state.errors.shelter,
});

const mapDispatchToProps = (dispatch) => ({
  login: (shelter) => dispatch(login(shelter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShelterLoginForm);
