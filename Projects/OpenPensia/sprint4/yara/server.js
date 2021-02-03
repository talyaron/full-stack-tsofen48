const express=require('express')
const app = express();
var cookieParser = require('cookie-parser');
const voting = require('./routs/vote');

app.use(cookieParser())

app.use(express.static('rct/build'));
app.use('/vote', voting)



 


const port = process.env.PORT || 3200;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });



