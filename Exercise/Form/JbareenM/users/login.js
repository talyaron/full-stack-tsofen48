const { mongoose } = require('../server');
const User = require('./usersSchemas');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    // const newUser = new User({username, password});
    // newUser.save().then(()=>{console.log('user saved')})

    const user = await User.findOne({ username });
    console.log('user:', user)

    if (user === null) {
        res.send({ ok: false, message:'couldnt find such a user'})
    } else {

        if(user.password === password){
            res.send({login:true})
        } else {
            res.send({login:false, message: 'Password is incorrect'})
        }

    }

}

exports.register = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    //check if user exists
    const user = await User.findOne({ username });


    if (user !== null) {
        res.send({ ok: false, message: 'user with such user name already exists' })
    } else {

        const newUser = new User({ username, password });
        const user = await newUser.save().then(() => { console.log('user saved') })
        res.send({ ok: true, user });

    }
}
