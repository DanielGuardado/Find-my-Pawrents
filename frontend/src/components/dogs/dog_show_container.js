import { connect } from "react-redux";
import { fetchDog, deleteDog } from "../../actions/dog_actions";
import { createAppointment } from "../../actions/appointment_actions";
import { receiveErrors } from "../../actions/session_actions";
import { createLike, fetchDogLikes } from "../../actions/like_action";
import { openModal } from "../../actions/modal_actions";
import DogShow from "./dog_show";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.dogId;
  return {
    currentUser: state.session.user,
    dog: state.dogs[ownProps.match.params.dogId],
    id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
  createAppointment: (appt) => dispatch(createAppointment(appt)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  deleteDog: (dogId) => dispatch(deleteDog(dogId)),
  createLike: (like) => dispatch(createLike(like)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
