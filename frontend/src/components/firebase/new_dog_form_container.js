import { connect } from "react-redux";
import { createDog } from "../../actions/dog_actions";
import NewDogForm from "./new_dog_form";

const mapStateToProps = (state) => {
  return {
    // errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDog: (dog) => dispatch(createDog(dog)),
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDogForm);
