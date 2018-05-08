const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, //cookie lasts for 30 days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

// app.get('/', (req, res)=>{  
//     res.send({ bye: 'buddy'});
// });

//passport has internal identifier 'google'
//scope - google internal list for what I am requesting


const PORT = process.env.PORT || 5000;

app.listen(PORT);   