const express = require('express');
const router = express.Router();

const {createCustomer,getCustomer,deleteCustomer,login}= require("../controller/customerController")
const {createCard,getCard}= require("../controller/cardController")
const {authorization,authentication}=require("../middleware/mid")


router.post('/createCustomer',createCustomer )
router.post('/login',login)
router.get('/getCustomer',authentication, getCustomer)
router.delete('/deleteCustomer',authentication,authorization,deleteCustomer)

router.post('/createCard',authentication,authorization,createCard )
router.get('/getCard', authentication,getCard)


 module.exports= router
