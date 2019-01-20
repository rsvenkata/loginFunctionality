const mongu = require('mongoose')

mongu.connect('mongodb://yourdbconnection-here', { useNewUrlParser: true })   //local/mlab mongoDB server

let userSchema = new mongu.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    }
})

const User = mongu.model('User', userSchema)

module.exports = User
