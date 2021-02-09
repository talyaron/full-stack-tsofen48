const express = require("express");
const router = express.Router();
const loginControler = require("../controlers/LoginControler");

router.get("/login", loginControler.login);

module.exports = router;
