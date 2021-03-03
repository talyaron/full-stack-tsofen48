const express = require("express");
const router = express.Router();
const bookController = require("../controlers/bookController");

router.post("/add_book", bookController.add_book);
router.get("/get_books", bookController.get_books);
router.post("/find_books", bookController.find_books);
router.delete("/delete_book/:id", bookController.delete_book);
module.exports = router;
