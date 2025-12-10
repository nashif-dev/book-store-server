const mongoose = require('mongoose')
//get connection string from .env file
const connectionString = process.env.AtlasDbConnection

mongoose.connect(connectionString).then(res=>{
    console.log("mongo db connection successful");    
}).catch(err=>{
    console.log("database connection failed");
    console.log(err);    
})