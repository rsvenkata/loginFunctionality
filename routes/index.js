//Secured Routes  will be in this file - meaning after authentication

const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../config/authenticated')

router.get('/', (req, res) => {
    console.log('I am called....')
    res.render('welcome')
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    })
})

module.exports = router;