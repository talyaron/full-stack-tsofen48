<<<<<<< Updated upstream
const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.static("public"));

app.use(checkAdmin);

const users = [
  { name: "Mohamad", role: "admin" },
  { name: "Tal", role: "public" },
];

app.get("/login", (req, res) => {
  const { name } = req.query;
  const elment = users.find((elm) => elm.name === name);
  res.cookie("role", elment.role, { maxAge: 90000000000, httpOnly: true });
  res.send({ messege: "good" });
});

app.get("/get-users", (req, res, next) => {
  if (req.cookies.role === "admin") {
    res.send({ users: users, index: 1 });
  } else {
    res.send({ messege: "you are not Admin", index: 0 });
  }

  res.send({ ok: true, users });
});

function isAdmin(req, res, next) {
  console.log(req.cookies + "asdasdasd");

  if (req.cookies.role !== "admin") {
    res.send({ ok: "not so good" });
  } else {
    next();
  }
}

function checkAdmin(req, res, next) {
  //middleware
  console.log(req.cookies);

  if (req.cookies.role === "admin") res.authorized = true;
  else res.authorized = false;

  res.authorized;
  next();
}

app.listen(3000, () => {
  console.log("listen on port 3000");
});
=======
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(req.cookies)

  if (req.cookies.role === 'admin') res.authorized = true;
  else res.authorized = false;
  res.authorized
  next();
})

const users = [1, 2, 3, 4, 5, 7]

app.get('/get-users', (req, res, next) => {

  // res.cookie('cookieName', 'admin', { maxAge: 90000000000, httpOnly: true });
  
  if (res.authorized) {
    res.send({ ok: true, users });
  } else {
    res.send({ ok: false });
  }
  
})






app.listen(3000, () => { console.log('listen on port 3000') });
>>>>>>> Stashed changes
