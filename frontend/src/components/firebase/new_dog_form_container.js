import { connect } from "react-redux";
import { createDog } from "../../actions/dog_actions";
import NewDogForm from "./new_dog_form";
import { clearErrors, receiveErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.session,
    // dogs: state.dogs[ownProps.match.params.dogId],
    dogId: Object.keys(state.dogs)[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDog: (dog) => dispatch(createDog(dog)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDogForm);
