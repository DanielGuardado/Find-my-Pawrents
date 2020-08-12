import { connect } from "react-redux";
import { fetchDog } from "../../actions/dog_actions";
import { createAppointment } from "../../actions/appointment_actions";
import { receiveErrors } from "../../actions/session_actions"
import DogShow from "./dog_show";

const mapStateToProps = (state, ownProps) => {
  return {
    dog: state.dogs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
  createAppointment: appt => dispatch(createAppointment(appt)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
