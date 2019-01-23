const express = require('express')
const indexRoutes = require('./routes/index')
const usersRoutes = require('./routes/users')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

require('./config/passport')(passport)

const app = express()
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

//express-session
app.use(session({
  secret: 'topSecret',
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash())

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})

const PORT = process.env.PORT || 5001

app.use('/', indexRoutes)
app.use('/users', usersRoutes)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})