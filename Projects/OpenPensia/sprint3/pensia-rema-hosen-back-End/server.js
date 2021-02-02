const express = require("express");
const app = express();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const articleRouter = require("./routes/articlesRoute");
const usersRouter = require("./routes/usersRoute");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app routes
app.use("/article", articleRouter);
app.use("/users", usersRouter);

app.listen(
  process.env.PORT || 3000,
  () => `Server running on port ${process.env.PORT || 3000} `
);
