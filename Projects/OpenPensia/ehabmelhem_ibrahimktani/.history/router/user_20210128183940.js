const userControler = require("../controlers/users");
const router = require("express").Router();

router.get("/get-user", userControler.getUser);
module.
