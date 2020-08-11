const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateSignupInput(data) {
  let errors = {};
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.first_name = validText(data.first_name) ? data.first_name : "";
  data.last_name = validText(data.last_name) ? data.last_name : "";
  data.shelter_status = validText(data.shelter_status) ? data.shelter_status : "";
  data.shelter_name = validText(data.shelter_name) ? data.shelter_name : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "email cant be empty";
  }

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "First name cant be empty";
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = "Last name cant be empty";
  }

  // if(Validator.isEmpty(data.shelter_status)) {
  //   errors.shelter_status = "Shelter status can't be empty";
  if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "Password must be 6 to 20 characters long";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
