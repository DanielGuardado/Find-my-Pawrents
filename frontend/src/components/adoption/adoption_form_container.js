import React from "react";
import { connect } from "react-redux";
import AdoptionForm from "./adoption_form";

const mapStateToProps = (state) => {
  return {
    // errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdoptionForm);
