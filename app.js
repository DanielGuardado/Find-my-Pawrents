const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI
const users = require("./routes/api/users")
const dogs = require("./routes/api/dogs")


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Yay"));

app.use("/api/users", users);
app.use("/api/dogs", dogs);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
