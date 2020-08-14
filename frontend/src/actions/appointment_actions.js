import * as ApptAPIUtil from "../util/appointment_api_util";

export const RECEIVE_APPTS = "RECEIVE_APPTS";
export const RECEIVE_APPT = "RECEIVE_APPT";
export const REMOVE_APPT = "REMOVE_APPT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_APPT_ERRORS"



export const receiveAppt = (appt) => ({
  type: RECEIVE_APPT,
  appt,
});

export const receiveAppts = appts => ({
  type: RECEIVE_APPTS,
  appts
})

export const receiveApptErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});



export const fetchAppointment = (appointmentId) => (dispatch) =>
  ApptAPIUtil.fetchAppointment(appointmentId).then((appointment) => dispatch(receiveAppt(appointment)));

export const createAppointment = (appointment) => (dispatch) =>
 ApptAPIUtil.createAppointment(appointment).then((appointment) => dispatch(receiveAppt(appointment)));

 export const fetchAppointments = shelterId => (dispatch) => 
 ApptAPIUtil.fetchAppointments(shelterId).then(appointments => dispatch(receiveAppts(appointments)))

 export const updateAppointment = appointment => dispatch => 
 ApptAPIUtil.updateAppointment(appointment).then(appointment => dispatch(receiveAppt(appointment)), errors => dispatch(receiveApptErrors(errors)))