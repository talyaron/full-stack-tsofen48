const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alaa:Hqd4WuQHYcpIfsLszXVr@cluster0.wvoxj.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

// const cookieParser = require('cookie-parser');
// applicationCache.use(cookieParser);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});

const candidateSchema = new mongoose.Schema({
    name: String,
    id: String,
});
const Candidate = mongoose.model('candidateSchema', candidateSchema);

app.post('/add-candidates', (req, res) => {
    console.log("in server!!!!");
    try {
        const { candidateNames } = req.body;
        candidateNames.map((name) => {
            let Newcandidate = new Candidate({ name: name, id: generateUniqueID() });
            Newcandidate.save().then(() => console.log("candidate added successfully!"));
        });
        res.send({ ok: candidateNames });
    } catch (e) {
        res.send({ error: e })
    }
});


app.get('/get-selected-candidates', (req, res) => {
    try {
        //get from DB
        Candidate.find({})
            .then(candidatesData => {
                if (candidatesData.length <= 2) {
                    res.send({ success: true, err: "not found!", candidates: candidatesData });
                }
                res.send({ success: true, err: "not found!", candidates: getRandomFromArray(candidatesData, 2) });
            })
    } catch (e) {
        res.send({ error: e })
    }
})

// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });

function getRandomFromArray(arr, elementsNumber) {
    if (elementsNumber >= arr.length) {
        return arr
    }
    let selected = [];
    for (let i = 0; i < elementsNumber; i++) {
        let randomNumber = Math.floor(Math.random() * arr.length);
        selected.push(arr[randomNumber]);
    }
    return selected;
}

function generateUniqueID() {
    return Math.random().toString(16).slice(2);
}