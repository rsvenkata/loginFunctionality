const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bCrypt = require('bcryptjs')
const User = require('../model/User')

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'That email is not registered!' })
      }

      bCrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Password does not match!' })
        }
      })
    }).catch((error) => {
      console.log(error)
    })
  }))

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

}