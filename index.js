//import express, dotenv, cors
require('dotenv').config() //loads .env file contents into process.env by default
const express = require('express')
const cors = require('cors')
const router = require('./routes/routing')//import router

//create server using express
const bookstoreServer = express()
//enable cors in express server
bookstoreServer.use(cors())
//add json parser to server
bookstoreServer.use(express.json())
//use router in server
bookstoreServer.use(router)
//create a port no where server should listen in web
const PORT = 3030

//server listen in that port
bookstoreServer.listen(PORT,()=>{
    console.log("bookstore server started..waiting for client request !")
}) 

//resolve http get request to http://localhost:3030/ using server
bookstoreServer.get('/',(req,res)=>{
    res.status(200).send(`<h2> bookstore server started..waiting for client request ! </h2>`)
})