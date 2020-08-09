const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Shelter = require('../../models/Shelter');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateShelterSignupInput = require('../../validation/signup_shelter');
const validateLoginInput = require('../../validation/login_shelter');


router.post('/signup', (req, res) => {
  const {
    errors,
    isValid
  } = validateShelterSignupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Shelter.findOne({
      email: req.body.email
    })
    .then(shelter => {
      if (shelter) {
        return res.status(400).json({
          email: "That email address is already taken"
        })
      } else {
        const newShelter = new Shelter({
          email: req.body.email,
          password: req.body.password,
          shelter_name: req.body.shelter_name,
          address: req.body.address
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newShelter.password, salt, (err, hash) => {
            if (err) throw err;
            newShelter.password = hash;
            newShelter.save()
              .then((shelter) => {
                const payload = {
                  id: shelter.id,
                  email: shelter.email,
                  shelter_name: shelter.shelter_name,
                  address: shelter.address
                }
                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  { expiresIn: 3600},
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    })
                  }
                )
              })
              .catch((err) => console.log(err))
          })
        })
      }
    })
})

router.post("/login", (req, res) => {
  const {
    errors,
    isValid
  } = validateLoginInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  Shelter.findOne({
    email
  }).then((shelter) => {
    if (!shelter) {
      errors.handle = "This sheshelter does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, shelter.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: shelter.id,
          email: shelter.email,
          shelter_name: shelter.shelter_name
        };
        jwt.sign(
          payload,
          keys.secretOrKey, {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            })
          }
        )
      } else {
        errors.password = "Incorrect password"
        return res.status(400).json(errors)
      }
    })
  })
})

router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      shelter_name: req.user.shelter_name
    });
  }
);


module.exports = router;