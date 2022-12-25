const jwt = require('jsonwebtoken')
const customerModel = require('../models/customerModels') 
const { isValidObjectId } = require('mongoose')


exports.authentication = async (req, res, next) => {

    try {

        const token = req.headers['x-api-key']

        if (!token) {
            return res.status(400).send({ status: false, message: "Token is required." })
        }

        const decodedToken = jwt.verify(token, 'assignment2-secret-key', function (err, decodedToken) {
            if (err) {
                console.log("Authentication Failed!!")
                return res.status(401).send({ status: false, message: err.message })
            }
            else {
                req.token = decodedToken
                console.log("Authentication Successful")
            }

            next()
        })
    }

    catch (error) {

        return res.status(500).send({ status: false, message: error.message })
    }
}


exports.authorization = async (req, res, next) => {

    try {
        const customerId = req.params.customerId

        if (!isValidObjectId(customerId)) {
            return res.status(400).send({ status: false, message: "Please provide valid customerId" })
        }

        const customerData = await customerModel.findById(customerId)

        if (!customerData) {
            return res.status(404).send({ status: false, message: "Customer is not found by this customerId" })
        }

        const userId = customerData._id.toString()

        const DecodedToken = req.token.userId

        if (userId !== DecodedToken) {
            console.log("Authorization Failed")
            return res.status(403).send({ status: false, message: "Unauthorized" })
        }
        
        console.log("Authorization Successful")
        next()
    }

    catch (error) {
        
        return res.status(500).send({ status: false, message: error.message })
    }
}