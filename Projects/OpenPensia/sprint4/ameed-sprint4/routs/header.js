const express = require("express");
const router = express.Router();
const headerController = require("../controlers/headerControler");

router.get('/get-header',headerController.getHeader);

module.exports=router;