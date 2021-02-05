const express = require("express");
const router = express.Router();
const takanonControllers = require("../controllers/takanonControllers");

router
  .route("/")
  .get(takanonControllers.getTAKANON)
  .post(takanonControllers.createTAKANON);

router
  .route("/:id")
  .get(takanonControllers.getTAKANONById)
  .patch(takanonControllers.updateTAKANON)
  .delete(takanonControllers.deleteTAKANON);

module.exports = router;