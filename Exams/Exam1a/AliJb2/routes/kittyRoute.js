const express = require("express");
const router = express.Router();
const kittyControllers = require("../controllers/kittyControllers");

router.route("/").get(kittyControllers.getKitty);
// .post(kittyControllers.createkitty);

// router
//   .route("/:id")
//   .get(kittyControllers.getkittyById)
//   .patch(kittyControllers.updatekitty)
//   .delete(kittyControllers.deletekitty);

module.exports = router;
