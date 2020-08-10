const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Shelter = mongoose.model("shelters");
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      console.log(jwt_payload);
      // console.log(User)
      // console.log(User.shelter_name)
      if (!jwt_payload.shelter_name) {
        User.findById(jwt_payload.id)
          .then((user) => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch((err) => console.log(err));
      } else {
        Shelter.findById(jwt_payload.id)
          .then((shelter) => {
            if (shelter) {
              return done(null, shelter);
            }
            return done(null, false);
          })
          .catch((err) => console.log(err));
      }
    })
  );
};
