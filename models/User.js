const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

//collection
const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String
});

mongoose.model('testUsers', userSchema);