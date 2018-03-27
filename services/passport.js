const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// single argument on model means we are trying to fetch something out of mongoose
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
   User.findById(id)
    .then(user => {
        done(null, user);
    }) 
});


// Creates a new instance of Google Passport Strategy to authenticate users through google
// console.developers.google.com
// if anyone attempts to authenticate with the string 'google' it kicks off this strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
        .then ((existingUser) => {
            if (existingUser) {
                // we already have a record with the given profileId
                done(null, existingUser);
            } else {
                // we don't have a user record with this id, so make a new record
                new User ({ googleId: profile.id })
                .save()
                .then(user => done(null, user))
            }
        })

        
    })
);

