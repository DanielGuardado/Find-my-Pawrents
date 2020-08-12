import axios from "axios";


export const fetchAppointment = (appointmentId) => axios.get(`/api/appointments/${appointmentId}`);

export const createAppointment = (appointment) => axios.post("/api/appointments/", appointment);