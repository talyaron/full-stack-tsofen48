const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let candidates = [];
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
app.post('/add-candidates', (req, res) => {
    const { candidateNames } = req.body;
    candidateNames.map((name) => {
        if (!candidates.find((n) => n === name)) {
            candidates.push(name);
        }

    });
    res.send({ ok: candidates });
})

app.get('/get-selected-candidates', (req, res) => {
    if (candidates.length <= 2) {
        res.send(candidates);
    }
    res.send(getRandomFromArray(candidates, 2));
})

// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });