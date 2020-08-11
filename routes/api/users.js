const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateSignupInput = require('../../validation/signup');
const validateLoginInput = require('../../validation/login');


router.get('/test', (req, res) => {
  res.json({
    msg: "This is the user route"
  })
})

router.post('/signup', (req, res) => {
  const {
    errors,
    isValid
  } = validateSignupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: "That email address is already taken"
        })
      } else {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          shelter_status: req.body.shelter_status,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          address: req.body.address,
          shelter_name: req.body.shelter_name
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then((user) => {
                const payload = {
                  id: user.id,
                  email: user.email
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

  User.findOne({
    email
  }).then((user) => {
    if (!user) {
      errors.handle = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          email: user.email
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
    });
  }
);


module.exports = router;