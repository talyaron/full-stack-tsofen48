const express = require("express");
const router = express.Router();
const directorsControllers = require("../controllers/directorsControllers");
const { userType } = require("../controllers/rolesControllers");

// 
router
  .route("/")
  .get( directorsControllers.getDirectorById)
//   .get(directorsControllers.getDirectors)

  .post(directorsControllers.createDirector);

router
  .route("/:id")
  .get(directorsControllers.getDirectorById)
  .patch(directorsControllers.updateDirector)
  .delete(directorsControllers.deleteDirector);
  router
  .route("/:name")
  .get(directorsControllers.getDirectorByName)
  .patch(directorsControllers.updateDirector)
  .delete(directorsControllers.deleteDirector);

module.exports = router;
