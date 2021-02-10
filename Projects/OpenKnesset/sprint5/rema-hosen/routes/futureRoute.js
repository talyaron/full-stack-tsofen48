const express = require("express");
const router = express.Router();
const futureControllers = require("../controllers/futureControllers");

router
  .route("/")
  .get(futureControllers.getFUTURE)
  .post(futureControllers.createFUTURE);

router
  .route("/:id")
  .get(futureControllers.getFUTUREById)
  .patch(futureControllers.updateFUTURE)
  .delete(futureControllers.deleteFUTURE);

module.exports = router;