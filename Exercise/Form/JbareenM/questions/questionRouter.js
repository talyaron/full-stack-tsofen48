const router = require('express').Router();

const questions = require("./questions");

///////////// user route

//get all users
router
  .route("/add")
  .post(questions.add);


module.exports = router;