//Unsecured routes will be in this page
// eg: /login, /signup etc

const express = require('express')
const router = express.Router()
const User = require('../model/User')
const bCrypt = require('bcryptjs')
const passport = require('passport')

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
                    password,
                    password2
                })

                bCrypt.genSalt(10, (err, salt) => {
                    return bCrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err)
                            throw err
                        newUser.password = hash

                        newUser.save().then((e) => {
                            req.flash('success_msg', 'You are now registered!')
                            res.redirect('/users/login')
                        }).catch((e) => {
                            console.log(e)
                        })

                    })
                })
            }
        }).catch((e) => {
            console.log('error happened ....')
        })
    }
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local',  {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    req.logOut()
    req.flash('success_msg', 'You are now logged out!')
    res.redirect('/users/login')
})

module.exports = router;