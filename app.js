const express = require("express");
const app = express();
// const db = require("./config/keys").mongoURI;
const db = process.env.mongoURI
  ? process.env.mongoURI
  : require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const dogs = require("./routes/api/dogs");
// const likes = require("./routes/api/likes");
const appointments = require("./routes/api/appointments");


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/dogs", dogs);
app.use("/api/appointments", appointments);
// app.use("/api/likes", likes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
