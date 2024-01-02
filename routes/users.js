const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

userSchema.plugin(plm);

// Create the User model
module.exports = mongoose.model("User", userSchema);
