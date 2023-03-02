const {Orden} = require('../models/ordenes');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const orderList = await Orden.find();

    if(!orderList) {
        res.status(500).json({success: false})
    } 
    res.send(orderList);
})

module.exports =router;