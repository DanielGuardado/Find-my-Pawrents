import React from "react";
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      signup: (user) => dispatch(signup(user)),
      otherForm: (
        <button
          className="modal-login-btn"
          type="button"
          onClick={() => dispatch(openModal("login"))}
        >
          Sign in
        </button>
      ),
      closeModal: () => dispatch(closeModal()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);