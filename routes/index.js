var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const LocalStrategy = require("passport-local");
passport.authenticate(new LocalStrategy(userModel.authenticate()));
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/createuser", async function (req, res) {
  const createduser = await userModel.create({
    username: "bipin",
    email: "bj@gmail.com",
    posts: [],
    fullname: "bjoshi",
    password: "abx",
  });
  res.send(createduser);
});
router.get("/postuser", async function (req, res) {
  let postuser = await postModel.create({
    postText: "holo hola",
    user: "6592da5324116c369d4a214b",
  });
  let user = await userModel.findOne({ _id: "6592da5324116c369d4a214b" });
  user.posts.push(postuser._id);
  await user.save();
  res.send("done");
});

module.exports = router;
