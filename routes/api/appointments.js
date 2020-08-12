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

// router.get("/", (req, res) => {
//   Dog.find()
//     .sort({
//       date: -1,
//     })
//     .then((dogs) => res.json(dogs))
//     .catch((err) => res.status(400).json(err));
// });

// router.get("/user/:shelter_id", (req, res) => {
//   Dog.find({
//     shelter_id: req.params.shelter_id,
//   })
//     .then((dogs) => res.json(dogs))
//     .catch((err) => res.status(400).json(err));
// });

router.get("/:id", (req, res) => {
  Appointment.findById(req.params.id)
    .then((appt) => res.json(appt))
    .catch((err) => res.status(400).json(err));
});

// router.post(
//   "/:id/update",
//   passport.authenticate("jwt", {
//     session: false,
//   }),
//   (req, res) => {
//     const { isValid, errors } = validateDogInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     Dog.findByIdAndUpdate(
//       req.params.id,
//       {
//         shelter_id: req.user.id,
//         adoption_status: req.body.adoption_status,
//         name: req.body.name,
//         gender: req.body.gender,
//         breed: req.body.breed,
//         age: req.body.age,
//         description: req.body.description,
//         strengths: req.body.strengths,
//       },
//       {
//         new: true,
//       },
//       function (err, dog) {
//         if (!err) {
//           res.json(dog);
//         } else {
//           res.status(400).json(err);
//         }
//       }
//     );

//   }
// );

// router.delete(
//   "/:id",
//   passport.authenticate("jwt", {
//     session: false,
//   }),
//   (req, res) => {
//     let id = parseInt(req.params.id);

//     // Dog.de(id: id)
//     // .then(() => 'Dog has been removed')
//     // .catch(err => res.status(400).json(err)

//     Dog.findByIdAndRemove(req.params.id, req.body, function (err, data) {
//       if (!err) {
//         res.json("Dog has been removed");
//       } else {
//         res.status(400).json(err);
//       }
//     });
//   }
// );

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
    });

    newAppointment.save().then((appt) => res.json(appt))
    .catch( err => console.log("there is an error"));
  }
);

module.exports = router;
