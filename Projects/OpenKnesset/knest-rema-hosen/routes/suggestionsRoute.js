const express = require("express");
const router = express.Router();
const suggestionsControllers = require("../controllers/suggestionsControllers");

router
  .route("/")
  .get(suggestionsControllers.getSuggestions)
  .post(suggestionsControllers.createSuggestions);

router
  .route("/:id")
  .get(suggestionsControllers.getSuggestionsById)
  .patch(suggestionsControllers.updateSuggestions)
  .delete(suggestionsControllers.deleteSuggestions);

module.exports = router;