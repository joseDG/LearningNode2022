const {Usuario} = require('../models/usuarios');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    //const userList = await Usuario.find();

    // if(!userList) {
    //     res.status(500).json({success: false})
    // } 
    res.send("usuarios");
})

module.exports =router;