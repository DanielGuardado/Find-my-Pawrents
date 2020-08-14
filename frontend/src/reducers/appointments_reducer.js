import { RECEIVE_APPT } from "../actions/appointment_actions";
import { RECEIVE_APPTS } from "../actions/appointment_actions";

const appointmentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPT:
      return Object.assign(
        {},
        {
          [action.appt.data._id]: action.appt.data,
        }
      );
    case RECEIVE_APPTS:
      let obj = {};
      action.appts.data.forEach((appt) => {
        obj[appt._id] = appt;
        // Object.assign(obj, { [dog._id]: dog });
      });

      return obj;
    default:
      return state;
  }
};

export default appointmentReducer;
