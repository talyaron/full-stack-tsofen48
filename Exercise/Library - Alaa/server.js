const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alaa:Hqd4WuQHYcpIfsLszXVr@cluster0.wvoxj.mongodb.net/books', { useNewUrlParser: true, useUnifiedTopology: true });

// const cookieParser = require('cookie-parser');
// applicationCache.use(cookieParser);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
});

const bookSchema = new mongoose.Schema({
    name: String,
    year: Number,
    author: String,
});
const Book = mongoose.model('bookSchema', bookSchema);

app.post('/add-book', (req, res) => {
    try {
        const { bookInfo } = req.body;
        Book.find({ name: bookInfo.name, author: bookInfo.author })
            .then(row => {
                if (row.length > 0) {
                    res.send({ error: 'book already Exists' });
                    return;
                }
                if (typeof bookInfo.year != 'number') {
                    console.log(typeof bookInfo.year)
                    console.log( bookInfo.year)
                    res.send({ error: 'the year is not a number' });
                    return;
                }
                const newBook = new Book({ name: bookInfo.name, year: bookInfo.year, author: bookInfo.author });
                newBook.save().then(() => console.log("book added successfully!"));
                res.send({ success: true, err: '', data: bookInfo });

            });
    } catch (e) {
        res.send({ error: e })
    }
});


app.post('/get-books', (req, res) => {
    try {
        //get from DB
        const { bookName } = req.body;
        Book.find({ name: bookName })
            .then(BooksData => {
                let books = [...BooksData].map((book) => ({ name: book.name, year: book.year, author: book.author }))
                console.log(books);
                res.send({ success: true, err: "not found!", books: books });
            })
    } catch (e) {
        res.send({ error: e })
    }
})

// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`\x1b[36m Server running on port ${port}  🔥`) });