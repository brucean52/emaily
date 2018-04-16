const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);

// app.get('/', (req, res)=>{  
//     res.send({ bye: 'buddy'});
// });

//passport has internal identifier 'google'
//scope - google internal list for what I am requesting


const PORT = process.env.PORT || 5000;

app.listen(PORT);   