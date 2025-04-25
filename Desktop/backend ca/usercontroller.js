const mongoose = require("mongoose")
const inventory = require("./schema")


const read = async(req,res)=>{
    try{
        const display = await inventory.find()
        if(!display){
            return res.status(404).json({
                message: "no inventory found"
            })
        }

        res.status(200).json(display)

    }
    catch(err){
        res.status(500).json({
            message: "internal server error",err
        })
    }
}

const getById = async(req,res)=>{
    try{
        const id = req.params.id
        const data = inventory.findById(id)
        if(!data){
            res.status(404).json({
                message: "no inventory found by that id"
            })
        }

        res.status(200).json(data)


    }
    catch(err){
        res.status(500).json({
            message: "internal server error",err
        })
    }
}


const Delete = async(req,res)=>{
    try{
        const id = req.params.id
        const data = inventory.findByIdAndDelete(id)
        if(!data){
            res.status(400).json({
                message:"no inventory found by that id"
            })
        }

        res.status(201).json({
            message: "deleted succesfully"
        })


    }
    catch(err){
        res.status(500).json({
            message: "internal server error",err
        })
    }
}





const Post = async(req,res)=>{
    try{
        const {name,price,stock,description,category} = req.body

    if(!name || !price || !stock || !description || !category){
        return res.status(404).json({
            message: "all feilds are required"
        })
    }

    if(name.length < 4){
        return res.status(400).json({
            message:"enter a valid name"
        })
    }

    const newInventory = await inventory.create({
        name,
        price,
        stock,
        description,
        category
    })

    res.status(201).json({
        message: "new inventory created successfully"
    })


    }
    catch(err){
        res.status(500).json({
            message: 'internal server error',err
        })
    }
    

}




const Update = async(req,res) => {
    try{
        const id = req.params.id;
        const {name,price,stock,description,category} = req.body;
        
        const Inventory = await tasks.findById(id);

        if(!Inventory){
            return res.status(404).json({message : `no inventory with id :${id}`})
        }

        if(name){
            Inventory.name = name;
        }

        if(price){
            Inventory.price = price;
        }

        if(stock){
            Inventory.stock = stock;
        }

        if(description){
            Inventory.description = description;
        }

        if(category){
            Inventory.category = category;
        }


        await Inventory.save();
        res.status(201).json({message : "Updated",Task});

    }catch(err){
        res.status(500).json({message : "Server err",err})
    }
}

module.exports = {read,Post,getById,Delete,Update}