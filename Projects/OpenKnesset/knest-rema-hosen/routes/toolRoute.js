const express = require("express");
const router = express.Router();
const toolControllers = require("../controllers/toolControllers");

router
  .route("/")
  .get(toolControllers.getTOOL)
  .post(toolControllers.createTOOL);

router
  .route("/:id")
  .get(toolControllers.getTOOLById)
  .patch(toolControllers.updateTOOL)
  .delete(toolControllers.deleteTOOL);

module.exports = router;