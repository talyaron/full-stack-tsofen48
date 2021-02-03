const express = require("express");
const router = express.Router();
const navController = require("../controlers/navControler");

router.get('/get-nav',navController.getNav);

module.exports=router;