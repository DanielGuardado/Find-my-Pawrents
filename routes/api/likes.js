const express = require("express");
const router = express.Router();
const passport = require("passport");

// const validateLikeInput = require("../../validation/likes");
const Like = require("../../models/Like");
const Dog = require("../../models/Dog")

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
    const newLike = new Like({
      user_id: req.user.id,
      dog_id: req.body.dog_id,
      dog_image: req.body.dog_image,
      dog_name: req.body.dog_name
    });

    newLike.save().then((like) => res.json(like))
      .catch((err) => res.status(400).json(err))
  }
);

router.get("/dog/:dog_id", (req, res) => {
  Like.find({
      dog_id: req.params.dog_id,
    })
    .then((likes) => res.json(likes))
    .catch((err) => res.status(400).json(err));
});

router.get("/dog/:dog_id/count", (req, res) => {
  Like.find({
      dog_id: req.params.dog_id,
    })
    .then((likes) => res.json(likes.length))
    .catch((err) => res.status(400).json(err));
});


router.get("/user/:user_id", (req, res) => {
  Like.find({
      user_id: req.params.user_id,
    })
    .then((likes) => res.json(likes))
    .catch((err) => res.status(400).json(err));
  });



router.delete(
  "/:id",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    let id = parseInt(req.params.id);

    Like.findByIdAndRemove(req.params.id, req.body, function (err, data) {
      if (!err) {
        res.json("Like has been removed");
      } else {
        res.status(400).json(err);
      }
    });
  }
);


module.exports = router;