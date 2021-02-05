const express = require("express");
const router = express.Router();
const LoginController = require("../controlers/LoginControler");

router.get('/get-login',LoginController.getLogin);

module.exports=router;