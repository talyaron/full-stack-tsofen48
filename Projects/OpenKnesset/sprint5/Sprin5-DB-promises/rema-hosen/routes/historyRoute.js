const express = require("express");
const router = express.Router();
const historyControllers = require("../controllers/historyControllers");

router
  .route("/")
  .get(historyControllers.getHISTORY)
  .post(historyControllers.createHISTORY);

router
  .route("/:id")
  .get(historyControllers.getHISTORYById)
  .patch(historyControllers.updateHISTORY)
  .delete(historyControllers.deleteHISTORY);

module.exports = router;