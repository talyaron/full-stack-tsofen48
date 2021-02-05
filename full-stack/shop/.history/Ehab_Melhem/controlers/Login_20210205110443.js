const express = require("express");
const app = express();

exports.LogIn = (req, res) => {
  res.send({ ok: "Login" });
};

exports.SignUp = (req, res) => {
  res.send({ ok: "signUp" });
};
