const customerModel = requrie("../model/customerModel")
const jwt = require("jsonwebtoken")
const mongoose = requrie("mongoose")


exports.createCustomer = async function (req, res) {
    try {
        const data = req.body;
        const createdata = await customerModel.create(data)
        return res.status(201).send({ status: true, data: createdata, message: "Customer created successfully" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

exports.login = async function (req, res) {
    try {
        let id = req.body.customerId

        let customer = await customerModel.findOne({ customerId: customerId })
        if (!customer) return res.send({ status: false, msg: "Customer not found by this id" })

        let token = jwt.sign({ userId: user._id.toString() }, "assignment2-secret-key", { expiresIn: '1h' })
        res.setHeader("x-auth-token", token)
        res.status(200).send({ status: true, token: token })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })

    }
}


exports.getCustomer = async function (req, res) {
    try {
        findCustomer = await customerModel.find({ status: 'ACTIVE' })
        return res.status(200).send({ status: true, data: findCustomer, message: "Found all customer with Active Status" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


exports.deleteCustomer = async function (req, res) {
    try {
        const id = req.params.customerId
        const DeleteCustomer = await customerModel.findOneandDelete({ _id: customerId }, { new: true })
        return res.status(200).send({ status: true, message: "Customer deleted succesfully." })


    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}