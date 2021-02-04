const express = require("express");
const router = express.Router();
const suggestionsControllers = require("../controllers/suggestionsControllers");
const { userType } = require("../controllers/rolesControllers");

router
  .route("/")
  .get(userType,suggestionsControllers.getSuggestions)
  .post(suggestionsControllers.createSuggestions);

router
  .route("/:id")
  .get(suggestionsControllers.getSuggestionsById)
  .patch(suggestionsControllers.updateSuggestions)
  .delete(suggestionsControllers.deleteSuggestions);

module.exports = router;