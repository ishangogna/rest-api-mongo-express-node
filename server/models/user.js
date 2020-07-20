const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create user schema and model

const UserSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    age : {
        type : Number,
        required : [true, 'Age is required']
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User;
