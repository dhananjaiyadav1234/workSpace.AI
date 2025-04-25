const express = require("express")
const route = express.Router()



const {read,Post,getById,Delete,Update} = require("./usercontroller")


route.get("/read",read)
route.get("/read/:id",getById)
route.post("/Post",Post)
route.delete("/Delete/:id",Delete)
route.put("/Update/:id",Update)


module.exports = route