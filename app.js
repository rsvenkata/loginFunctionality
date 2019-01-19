const express = require('express')
const indexRoutes = require('./routes/index')
const usersRoutes = require('./routes/users')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))
const PORT = process.env.PORT || 5001

app.use('/', indexRoutes)
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})