const express = require("express");
const router = express.Router();
const articlesControllers = require("../controllers/articlesControllers");
const { userType } = require("../controllers/rolesControllers");

router
  .route("/")
  .get(userType, articlesControllers.getArticles)
  .post(articlesControllers.createArticle);

router
  .route("/:id")
  .get(articlesControllers.getArticleById)
  .patch(articlesControllers.updateArticle)
  .delete(articlesControllers.deleteArticle);

module.exports = router;
