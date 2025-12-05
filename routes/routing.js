//import express
const express = require('express')
const userController = require('../controller/userController')

//creating Router object
const router = new express.Router()

//define path for client api requests
//register 
router.post('/register',userController.registerController) 


module.exports = router