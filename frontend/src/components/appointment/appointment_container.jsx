import { connect } from "react-redux";
import { fetchAppointments } from "../../actions/appointment_actions";
import { fetchDog } from "../../actions/dog_actions";

import Appointments from "./appointment";

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        shelterId: state.session.user.id,
        // appointments: state.appointments[ownProps.match.params.shelter_id],
        appointments: Object.values(state.appointments),
        dog: Object.values(state.dogs),
        // dog: state.dogs[ownProps.match.params.dogId],


    };
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return{
    // fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    fetchAppointments: (shelterId) => dispatch(fetchAppointments(shelterId)),
    fetchDog: (dogId) => dispatch(fetchDog(dogId)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);