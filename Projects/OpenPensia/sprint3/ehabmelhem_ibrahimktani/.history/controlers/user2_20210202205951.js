import p1 from "../ibraheem"
// import p1 from "./ibraheem/src/p1.PNG";
// import p2 from "./ibraheem/src/p2.PNG";
// import p3 from "./ibraheem/src/p3.PNG";
const express = require("express");
const app = express();
// const p1 = require("../ibraheem/src/p1.PNG");
const user = {
  company: "בנק הפועלים",
  perception: 18.3,
};

const directors = [
  {
    img: "p1",
    name: "רונית אברמוזון רוקח",
    unlikeColor: false,
    likeColor: true,
  },
  { img: "p2.PNG", name: "עיסאווי פריג", unlikeColor: true, likeColor: false },
  { img: "p3.PNG", name: " דליה לב", unlikeColor: false, likeColor: true },
];

exports.sendHeaderInformation = (req, res, next) => {
  res.send(user);
};

exports.sendDirectorInformation = (req, res, next) => {
  res.send(directors);
};
