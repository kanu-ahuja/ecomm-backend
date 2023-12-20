import db from '../db/index.js'

const getUsers = async(req,res)=>{
    try{
        let data = await  db.productModel.findAll();
        res.status(200).send(data);
    }
    catch{
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}

const saveUsers = async(req,res)=>{
    try{
        console.log("==hii i am here");
        let data = req.body;
        let result = await db.userModel.create(data);
        res.status(200).send(result)
    }
    catch{
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}

export {getUsers,saveUsers}