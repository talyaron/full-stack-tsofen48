const userControler = require("../Controller/user");
const router = require("express").Router();
router.get("/users", userControler.getUser);
router.post("/add-user", userControler.addUser);
router.post("/check-user", userControler.checkUser);
router.post("/add-forms", userControler.addForm);

module.exports = router;
