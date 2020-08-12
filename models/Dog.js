const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  shelter_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  strengths: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  adoption_status: {
    type: String,
    default: "Available",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Dog = mongoose.model("dog", DogSchema);

module.exports = Dog;
