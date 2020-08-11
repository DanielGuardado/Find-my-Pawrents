const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};

  data.adoption_status = validText(data.adoption_status) ? data.adoption_status : "";
  data.name = validText(data.name) ? data.name : "";
  data.gender = validText(data.gender) ? data.gender : "";
  data.breed = validText(data.breed) ? data.breed : "";
  data.age = validText(data.age) ? data.age : "";
  data.description = validText(data.description) ? data.description : "";
  data.strengths = validText(data.strengths) ? data.strengths : "";

  console.log(data.adoption_status)

  if (Validator.isEmpty(data.name)) {
    errors.text = 'Name is a required field'
  }


  // if (!Validator.isIn(data.adoption_status, ['Available', 'Adopted'])) {
  //   errors.text = "Adoption status must be Available or Adopted"
  // }



  if (Validator.isEmpty(data.gender)) {
    errors.text = 'Gender is a required field'
  }

  if (!Validator.isIn(data.gender, ['Male', 'Female'])) {
    errors.text = 'Gender must be Male or Female'
  }

  if (Validator.isEmpty(data.breed)) {
    errors.text = 'Breed is a required field'
  }

  if (Validator.isEmpty(data.age)) {
    errors.text = 'Age is a required field'
  }

  if (!Validator.isInt(data.age)) {
    errors.text = 'Age must be a valid number'
  }

  if (Validator.isEmpty(data.description)) {
    errors.text = 'Description is a required field'
  }

  if (Validator.isEmpty(data.strengths)) {
    errors.text = 'Strengths is a required field'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}