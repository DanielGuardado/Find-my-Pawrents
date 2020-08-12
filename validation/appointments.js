const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateAppointmentInput(data) {
  let errors = {};

  data.appt_time= validText(data.appt_time) ? data.appt_time : "";
  data.appt_date = validText(data.appt_date) ? data.appt_date : "";
  data.comments = validText(data.comments) ? data.comments : "";

  if (Validator.isEmpty(data.appt_time)) {
    errors.text = "Appointment time is a required field";
  }

  if (Validator.isEmpty(data.appt_date)) {
    errors.text = "Appointment date is a required field";
  }

  if (Validator.isEmpty(data.comments)) {
    errors.text = "Comments is a required field";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};