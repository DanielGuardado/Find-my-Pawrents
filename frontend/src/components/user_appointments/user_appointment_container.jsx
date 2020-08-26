import { connect } from "react-redux";
import { fetchUserAppointments } from "../../actions/appointment_actions";

import UserAppointmentIndex from "./user_appointment";
import { fetchDogs } from "../../actions/dog_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.user.id,
    dogs: Object.values(state.dogs),
    // appointments: state.appointments[ownProps.match.params.shelter_id],
    appointments: Object.values(state.appointments),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDogs: () => dispatch(fetchDogs()),
    // fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    fetchAppointments: (userId) => dispatch(fetchUserAppointments(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAppointmentIndex);
