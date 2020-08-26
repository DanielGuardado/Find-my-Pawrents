import { connect } from "react-redux";
import { fetchDog, createDog } from "../../actions/dog_actions";
import EditDogForm from "./edit_dog_form";
import { clearErrors, receiveErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.dogId;
  return {
    count: state.likes.count,
    currentUser: state.session.user,
    dog: state.dogs[ownProps.match.params.dogId],
    id,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchDog: (dogId) => dispatch(fetchDog(dogId)),    
    createDog: (dog) => dispatch(createDog(dog)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDogForm);
