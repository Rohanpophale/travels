const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('registration', signUpTemplate)