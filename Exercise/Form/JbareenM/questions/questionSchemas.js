const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JbareenM:5s3KNgAvjVhdNkFV@cluster0.lvmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected to DB') });


const Question = mongoose.model('Question', {
    question: String
}); //schema


module.exports = Question;


