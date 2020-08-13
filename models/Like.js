const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const LikeSchema = new Schema({
  dog_id: {
    type: Schema.Types.ObjectId,
    ref: "dogs",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
});

const Like = mongoose.model("likes", LikeSchema);

module.exports = Like;