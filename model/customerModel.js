const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    firstName : {
        type:String,
        require:true,
        tirm:true
    },
    lastName:{
        type:String,
        require:true,
        tirm:true
    },
    mobileNumber:{
        type:String,
        require:true,
        unique:true,
        maxlength:10,
        minlength:10

    },
    DOB:{
        type:Date,
        require:true
    },
    emailId:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    customerId:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        enum:["ACTIVE", "INACTIVE"]
    } 

}, {timestamps: true})
module.exports = mongoose.model('customer', customerSchema)