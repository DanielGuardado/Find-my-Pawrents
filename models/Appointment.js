const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  shelter_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  dog_id: {
    type: Schema.Types.ObjectId,
    ref: "dogs",
  },
  user_id: {
    type: Schema.Types.ObjectId,
      ref: "users",
  },
  appt_time: {
    type: String,
    required: true,
  },
  appt_date: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("appointment", AppointmentSchema);

module.exports = Appointment;