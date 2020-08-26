import { connect } from "react-redux";
import { fetchDog, updateDog } from "../../actions/dog_actions";
import EditDogForm from "./edit_dog_form";
import { clearErrors, receiveErrors } from "../../actions/session_actions";
import React from 'react';


class EditDogFormContainer extends React.Component {

  componentDidMount() {
    this.props.fetchDog(this.props.id)
  }

  render() {
    // DO NOT MODIFY THIS FUNCTION
    const { updateDog, dog, receiveErrors, clearErrors } = this.props;

    // Hint: The post will not exist on the first render - what do we need to do
    // to get it?
    if (!dog) return null;
    return (
      <EditDogForm
        updateDog={updateDog}
        dog={dog}
        receiveErrors={receiveErrors}
        clearErrors={clearErrors} />
    );
  }
}

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
    updateDog: (dog) => dispatch(updateDog(dog)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDogFormContainer);
