const express = require("express");
const router = express.Router();
const passport = require("passport");

const validateAppointmentInput = require("../../validation/appointments");
const Appointment = require("../../models/Appointment");

router.get("/test", (req, res) => {
  res.json({
    msg: "This is the appointment route",
  });
});

router.get("/shelter/:shelter_id", (req, res) => {
  Appointment.find({
    shelter_id: req.params.shelter_id,
  })
    .then((appts) => res.json(appts))
    .catch((err) => res.status(400).json(err));
});

router.get("/user/:user_id", (req, res) => {
  Appointment.find({
    user_id: req.params.user_id,
  })
    .then((appts) => res.json(appts))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Appointment.findById(req.params.id)
    .then((appt) => res.json(appt))
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/:id/update",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    const { isValid, errors } = validateAppointmentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Appointment.findByIdAndUpdate(
      req.params.id,
      {
        user_id: req.body.user_id,
        appt_time: req.body.appt_time,
        appt_date: req.body.appt_date,
        comments: req.body.comments,
        phone_number: req.body.phone_number,
        shelter_id: req.body.shelter_id,
        dog_id: req.body.dog_id,
        appt_status: req.body.appt_status,
        image: req.body.image,
        dog_name: req.body.dog_name,
      },
      {
        new: true,
      },
      function (err, appt) {
        if (!err) {
          res.json(appt);
        } else {
          res.status(400).json(err);
        }
      }
    );
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    let id = parseInt(req.params.id);

    Appointment.findByIdAndRemove(req.params.id, req.body, function (
      err,
      data
    ) {
      if (!err) {
        res.json("Dog has been removed");
      } else {
        res.status(400).json(err);
      }
    });
  }
);

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    const { isValid, errors } = validateAppointmentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newAppointment = new Appointment({
      user_id: req.user.id,
      appt_time: req.body.appt_time,
      appt_date: req.body.appt_date,
      comments: req.body.comments,
      phone_number: req.body.phone_number,
      shelter_id: req.body.shelter_id,
      dog_id: req.body.dog_id,
      appt_status: req.body.appt_status,
      image: req.body.image,
      dog_name: req.body.dog_name,
    });

    newAppointment
      .save()
      .then((appt) => res.json(appt))
      .catch((err) => res.status(400).json(err));
  }
);

module.exports = router;
