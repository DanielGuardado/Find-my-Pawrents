import { connect } from "react-redux";
import { fetchAppointments } from "../../actions/appointment_actions";
import Appointments from "./appointment";

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        shelterId: state.session.user.id,
        appointments: state.appointments[ownProps.match.params.shelter_id],

    };
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return{
    fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);