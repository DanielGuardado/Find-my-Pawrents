import { RECEIVE_APPT } from "../actions/appointment_actions";

const appointmentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPT:
      return action.appt.data;
    default:
      return state;
  }
};


export default appointmentReducer;
