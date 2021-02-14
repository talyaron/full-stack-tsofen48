const router = require('express').Router();

const questions = require("./questionsControler");

///////////// user route

//get all users
router
  .route("/add")
  .post(questions.add);




module.exports = router;