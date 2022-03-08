const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    address: String,
    age: String,
     
    balance: {
        type: Number,
        default: 100
    },

    gender: {
        type: String,
        enum:["female","male","other"]
    },

    isfreeAppUser:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('USER', userSchema) 
