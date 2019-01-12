//Secured Routes  will be in this file - meaning after authentication

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('welcome')
})

module.exports = router;