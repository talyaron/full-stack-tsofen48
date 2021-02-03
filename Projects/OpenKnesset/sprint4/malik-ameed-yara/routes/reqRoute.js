
const express = require("express");
const router = express.Router();
const usersController = require("./../controllers/reqController");


router.route("/").get(usersController.getAllPosts);

module.exports = router;
