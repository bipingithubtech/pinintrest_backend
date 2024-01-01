const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the post schema
const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  currentDateAndTime: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

// Create the Post model
module.exports = mongoose.model("Post", postSchema);
