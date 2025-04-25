const express = require('express')
const app = express()
const port = 3000
const connect = require("./database")
const route = require("./route")


connect()

app.use(express.json())
app.use("/api",route)

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})


