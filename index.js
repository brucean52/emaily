const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();
authRoutes(app);

// app.get('/', (req, res)=>{  
//     res.send({ bye: 'buddy'});
// });

//passport has internal identifier 'google'
//scope - google internal list for what I am requesting


const PORT = process.env.PORT || 5000;

app.listen(PORT);