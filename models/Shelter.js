const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterSchema = new Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    shelter_name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  }, {
    timestamps: true,
  }

);

const Shelter = mongoose.model('shelters', ShelterSchema);
module.exports = Shelter;

