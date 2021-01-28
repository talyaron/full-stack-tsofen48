const express = require("express");
const cookieParser = require('cookie-parser');
const parliamentaryToolsRouter = require('./routes/parliamentaryTools');

const app = express();

// MiddleWare
app.use(cookieParser())
app.use(express.static('public'));
// app.use(checkAdmin);
app.use('/parliamentaryTools', parliamentaryToolsRouter);


// function checkAdmin (req, res, next)  { //middleware
//   console.log(req.cookies);

//   if (req.cookies.role === 'admin') res.authorized = true;
//   else res.authorized = false;

//   res.authorized;
//   next();
// }

// app.get("/parliamentaryTools", (req, res) => {
//   res.cookie('role', user.role, { maxAge: 90000000000, httpOnly: true });
//   res.send(users);
// });
// app.get("/", (req, res) => {
//   console.log("test");
// });

// Server run
const port = process.env.PORT || 3000;
app.listen(port, () => `Server running on port ${port} 🔥`);