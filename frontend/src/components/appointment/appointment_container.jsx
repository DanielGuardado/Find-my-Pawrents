import { connect } from "react-redux";
import { fetchAppointments, updateAppointment } from "../../actions/appointment_actions";
import { fetchDogs } from "../../actions/dog_actions";


import Appointments from "./appointment";

const mapStateToProps = (state, ownProps) => {
  return {
    shelterId: state.session.user.id,
    // appointments: state.appointments[ownProps.match.params.shelter_id],
    appointments: Object.values(state.appointments),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    updateAppointment: appointment => dispatch(updateAppointment(appointment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
