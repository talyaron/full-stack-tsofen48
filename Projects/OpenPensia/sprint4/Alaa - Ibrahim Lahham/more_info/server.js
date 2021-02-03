const express = require("express");
app = express();
const cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
app.use(bodyParser.json());

const moreInfoRouter = require('./routes/moreInfo');

app.use(cookieParser());
app.use('/articles', moreInfoRouter);
app.use('/navTabs', moreInfoRouter);
app.use('/candidate', moreInfoRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});
