const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateShelterSignupInput(data) {
  let errors = {};
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.shelter_name = validText(data.shelter_name) ? data.shelter_name : "";
  data.address = validText(data.address) ? data.address : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "email cant be empty";
  }

  if (Validator.isEmpty(data.shelter_name)) {
    errors.shelter_name = "Shelter name cant be empty";
  }
  
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address cant be empty";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

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
