import { connect } from "react-redux";
import { fetchDog, deleteDog } from "../../actions/dog_actions";
import { createAppointment } from "../../actions/appointment_actions";
import { receiveErrors } from "../../actions/session_actions";
import { createLike, fetchDogLikeCount, fetchDogLikes } from "../../actions/like_action";
import { openModal } from "../../actions/modal_actions";
import DogShow from "./dog_show";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.dogId;
  return {
    count: Object.values(state.likes).length,
    currentUser: state.session.user,
    dog: state.dogs[ownProps.match.params.dogId],
    id,
    likes: state.likes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
  createAppointment: (appt) => dispatch(createAppointment(appt)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  deleteDog: (dogId) => dispatch(deleteDog(dogId)),
  createLike: (like) => dispatch(createLike(like)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchDogLikeCount: (dogId) => dispatch(fetchDogLikeCount(dogId)),
  fetchDogLikes: (dogId) => dispatch(fetchDogLikes(dogId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
