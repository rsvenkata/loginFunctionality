const mongu = require('mongoose')

mongu.connect('mongodb://yourdbconnection-here', { useNewUrlParser: true })   // mlab mongoDB server

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
    date: {
        type: Date,
        required: Date.now
    }
})
const User = mongu.model('User', userSchema)

module.exports = User
