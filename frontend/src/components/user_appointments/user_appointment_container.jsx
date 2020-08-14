import { connect } from "react-redux";
import { fetchUserAppointments } from "../../actions/appointment_actions";

import UserAppointmentIndex from "./user_appointment";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.user.id,
    // appointments: state.appointments[ownProps.match.params.shelter_id],
    appointments: Object.values(state.appointments),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    fetchAppointments: (userId) => dispatch(fetchUserAppointments(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAppointmentIndex);
