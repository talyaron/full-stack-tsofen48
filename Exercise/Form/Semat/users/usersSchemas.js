const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Semat:cacWBcNOZTuu1pEB@cluster0.7w7pv.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected to DB') });


const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true
    },
    password: String
}); //schema


module.exports = User;