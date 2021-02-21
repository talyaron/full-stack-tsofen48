const express = require("express");
const app = express();

exports.login = (req, res) => {
  res.send({ ok: true, message: "login ok" });
};
