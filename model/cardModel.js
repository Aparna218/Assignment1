const mongoose = require('mongoose')
const customerModel = require('./customerModel')


const cardSchema = new mongoose.Schema({
    cardNumber : {
        type:String,
        require:true,
        unique:true
    },
    cardType:{
        type:String,
        enum:["REGULAR","SPECIAL"]
    },
    customerNumber:{
        type:String,
        require:true,
        unique:true
    },
    status:{
        type:String,
        enum:["ACTIVE", "INACTIVE"],
        default:"ACTIVE"
    },
    vision:{
        type:String
    },
    customerId:{
        type:String,
        require:true,
        unique:true,
        ref:customerModel
    }

}, {timestamps: true})
module.exports = mongoose.model('card', cardSchema)