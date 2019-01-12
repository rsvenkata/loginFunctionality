//Unsecured routes will be in this page
// eg: /login, /signup etc

const express = require('express')
const router = express.Router()
const User = require('../model/User')
const bCrypt = require('bcryptjs')

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body

    let errors = []

    if (!name || !email || !password || !password2) {
        errors.push({ message: 'Pls fill in the detals!!!' })
    }

    if (password !== password2) {
        errors.push({ message: 'Passwords do not match..' })
    }

    if (password.length < 6) {
        errors.push({ message: 'Passwords should be of min 6 chars' })
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2

        })
    } else {
        // res.send('pass')
        User.findOne({
            email
        }).then((user) => {
            if (user) {
                errors.push({ message: 'Email already registred!' })

                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                })

            } else {
                const newUser = new User({
                    name,
                    email,
                    password
                })
               
                newUser.save().then((user) => {
                console.log(user)
                
                    res.send(user)
                })
                
                
            }
        })
    }

})

module.exports = router;