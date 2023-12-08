const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    email :{
        required: true,
        type: String
    },
    phoneNumber:{
        required:true,
        type:String
    },
    address:{
        required:true,
        type:String
    },
    dateOfBirth:{
        required:true,
        type:String
    },
    salary:{
        required:true,
        type:Number
    }

})

module.exports = mongoose.model('user', dataSchema)