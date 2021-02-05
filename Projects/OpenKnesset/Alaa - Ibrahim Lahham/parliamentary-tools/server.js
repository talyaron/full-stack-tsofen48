const express = require('express');

const cookieParser = require('cookie-parser');
const parliamentaryToolsRouter = require('./routes/parliamentaryTools');

const app = express();
app.use(express.json());
// MiddleWare
app.use(cookieParser());
app.use(express.static('public'));





app.use('/parliamentaryTools', parliamentaryToolsRouter);


// Server run
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });