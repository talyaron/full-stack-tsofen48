const express = require("express");
const router = express.Router();
const Login = require("../controlers/Login");
router.get("/Login", Login.LogIn);
router.get("/Login", Login.LogIn);
module.exports = router;
