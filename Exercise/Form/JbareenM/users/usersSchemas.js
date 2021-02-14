const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://JbareenM:5s3KNgAvjVhdNkFV@cluster0.lvmro.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected to DB') });


const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true
    },
    password: String
}); //schema


module.exports = User;


