const mongu = require('mongoose')

mongu.connect('mongodb://raghu:raghu123@ds211504.mlab.com:11504/mlabdb', { useNewUrlParser: true }, {useMongoClient: true})

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
