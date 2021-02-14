const router = require('express').Router();

const users = require("./login");

///////////// user route

//get all users
router
  .route("/login")
  .post(users.login);

router
  .route("/register")
  .post(users.register);


module.exports = router;