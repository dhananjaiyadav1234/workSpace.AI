const mongoose = require('mongoose')
require("dotenv").config()
const connect = async()=>{
    try{
        await mongoose.connect(process.env.DB_url)
        console.log("connected to db")


    }
    catch(err){
        console.log("error while connecting to the db",err)
    }
}

module.exports = connect