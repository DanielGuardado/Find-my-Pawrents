import React from "react";
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        otherForm: (
            <button 
              className="modal-signup-btn" 
              type="button" 
              onClick={() => dispatch(openModal('signup'))}
            >
              Sign Up 
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        demoAction: demoUser => dispatch(login(demoUser)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);