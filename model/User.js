const mongu = require('mongoose')

// mongu.connect('mongodb://localhost:27017/DB0311', { useNewUrlParser: true })   // Local mongoDb server
mongu.connect('mongodb://raghu:raghu1@ds211504.mlab.com:11504/mlabdb', { useNewUrlParser: true })   // mlab mongoDB server

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