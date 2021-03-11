const express = require("express");
const app = express();
var Book = require("../Books/BookSchema");

exports.add_book = (req, res) => {
  try {
    const { book } = req.body;
    console.log(book);
    const temp = new Book({
      name: book.name,
      author: book.author,
      year: book.year,
      img: book.img,
    });
    temp.save().then(() => console.log("Book was saved in DB!"));
    res.send({ ok: true, book: temp });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
};

exports.get_books = (req, res) => {
  try {
    //get from DB
    Book.find({}).then((docs) => {
      console.log(docs);
      res.send({ books: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
};

exports.find_books = (req, res) => {
  try {
    const { txt } = req.body;
    console.log(txt);
    //get from DB
    // , { year: search }, { author: search }
    Book.find({
      $or: [{ name: txt }, { year: txt }, { author: txt }],
    }).then((docs) => {
      console.log(docs);
      res.send({ books: docs });
    });
  } catch (e) {
    res.send({ error: e });
  }
};

exports.delete_book = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    Book.findByIdAndDelete(id, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
      res.send({ delete: "ok" });
    });
  } catch (error) {
    console.log(error);
  }
};
