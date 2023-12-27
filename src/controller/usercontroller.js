import { Op } from 'sequelize';
import db from '../db/index.js'

const getUsers = async (req, res) => {
    try {
        let data = await db.productModel.findAll();
        res.status(200).send(data);
    }
    catch {
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}

const saveUsers = async (req, res) => {
    try {
        console.log("==hii i am here");
        let data = req.body;
        let result = await db.userModel.create(data);
        res.status(200).send(result)
    }
    catch {
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}
const useAndoperators = async (req, res) => {
    try {
        const { id } = req.params;
        let numberequal = await db.userModel.findAll({
            where: {
                [Op.and]: [                 // Logical AND Operator
                    { id: 1 },
                    { name: "kanu" }
                ]
            }
        })
        res.status(200).send(numberequal)
    }
    catch {
        console.log("error");
        res.status(400).send("user not found")
    }
}
const useOroperators = async (req, res) => {
    try {
        const { id } = req.params;
        let numberequal = await db.userModel.findAll({
            where: {
                [Op.or]: [                 // Logical OR Operator
                    { id: 1 },
                    { id: 4 }
                ]
            }
        })
        res.status(200).send(numberequal)
    }
    catch {
        console.log("error");
        res.status(400).send("user not found")
    }
}
const useNotoperators = async (req, res) => {
    try {
        const { id } = req.params;
        let numberequal = await db.userModel.findAll({
            where: {
                [Op.not]: [                 // Logical NOT Operator
                    { id: 1 },
                    { id: true }
                ]
            }
        })
        res.status(200).send(numberequal)
    }
    catch {
        console.log("error");
        res.status(400).send("user not found")
    }
}
const useGreateroperators = async (req, res) => {
    try {
        const { id } = req.params;
        let greater = await db.userModel.findAll({
            where: {
                obtainedmarks: {
                    // [Op.gt]:90     // [greater than]
                    // [Op.gte]:90     // [greater than or equal to]
                    // [Op.lt]:90       // [less than]
                    // [Op.lte]:90      // [less than or equal to]
                    // [Op.between]: [50,70]  // [between Obtained marks First & Second]
                    [Op.notBetween]: [40, 60],  // [Not between Obtained marks First & Second]
                }
            }
        })
        res.status(200).send(greater)
    }
    catch {
        console.log("error");
        res.status(400).send("user not found")
    }
}
const updateuser=async(req,res)=>{
    try{
        const {id} = req.params;
        let updateUser = await db.userModel.update({class : req.body.class},{
                where : {
                    id : id
                    }
        })
        res.status(200).send(updateUser)
    }
    catch{
        console.log("error");
        res.status(400).send("user not found")
    }
}

const deleteUser=async(req,res)=>{
     try{
        const {id} = req.params;

        let response= await db.userModel.destroy( {
            where: {
              id: id
            }
        })
        
        res.sendStatus(200).send(response)
    }
    catch{
        console.log("error");
        res.status(400).send("user not found")
    }
}

export { getUsers, saveUsers, useAndoperators, useOroperators, useNotoperators, useGreateroperators,updateuser,deleteUser}