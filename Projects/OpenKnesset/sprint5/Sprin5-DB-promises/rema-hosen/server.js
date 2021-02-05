const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("react/build"));

// var cookieParser = require("cookie-parser"); 
const toolRouter = require("./routes/toolRoute"); 
const takanonRoute = require("./routes/takanonRoute"); 
const futureRoute = require("./routes/futureRoute"); 
const historyRoute = require("./routes/historyRoute"); 
const suggestionsRoute = require("./routes/suggestionsRoute"); 

// app.use(cookieParser());


// app routes
app.use("/get-tool", toolRouter);
app.use("/get-takanon", takanonRoute);
app.use("/get-future", futureRoute);
app.use("/get-history", historyRoute);
app.use("/post-suggestion", suggestionsRoute);


       


const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})