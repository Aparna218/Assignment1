const cardModel = requrie("../model/cardModel")
const mongoose = require("mongoose")
const customerModel = require("../model/customerModel")

exports.createCard = async function (req, res) {
    try {
        const data = req.body;
        let findId = await customerModel.findOne({ _id: customerID })
        if (!findId) {
            return res.status(400).send({ status: false, msg: "Customer not found by this Id" })
        }
        const createdata = await cardModel.create(data)
        return res.status(201).send({ status: true, data: createdata, message: "Card created successfully" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

exports.getCard = async function (req, res) {
    try {
        const cardList = await cardModel.find()
        return res.status(200).send({ status: true, data: cardList, message: "CardList found" })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

