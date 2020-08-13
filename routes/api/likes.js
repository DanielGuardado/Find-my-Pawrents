const express = require("express");
const router = express.Router();
const passport = require("passport");

// const validateLikeInput = require("../../validation/dogs");
const Like = require("../../models/Like");

router.get("/test", (req, res) => {
  res.json({
    msg: "This is the like route",
  });
});


router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    const { isValid, errors } = validateDogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newLike = new Like({
      user_id: req.user.id,
      dog_id: req.body.dog_id,
    });

    newLike.save().then((like) => res.json(like))
    .catch((err) => console.log(err))
  }
);


module.exports = router;