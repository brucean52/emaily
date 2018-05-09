const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('testUsers');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=> {
    User.findById(id).then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        }, 
        async (accessToken, refreshToken, profile, done)=> {
            //console.log('profile', profile);
            const existingUser = await User.findOne({ googleId: profile.id })
                if (existingUser){
                    //existing user exists with profile id
                   return done(null, existingUser);
                }
                //user record doesn't exists
                const user = await new User({ 
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value

                }).save()
                done(null,user);
        }
    )
);