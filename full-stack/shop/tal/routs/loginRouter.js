const express = require("express");
const router = express.Router();
const LoginControler = require("../controlers/loginControler");

router.get('/login',LoginControler.login);

router.get('/signup',LoginControler.signUp);

module.exports = router;
