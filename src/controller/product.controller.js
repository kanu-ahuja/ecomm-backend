import db from '../db/index.js'

const create = async (req, res) => {
    try {
        let data = await db.products.create(req.body);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

const read = async (req, res) => {
    try {
        let data = await db.products.findAll();
        res.status(200).send(data);
    }
    catch {
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}


const readDetails = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await db.products.findOne({ where: { id: id } });

        if(data === null){
            throw new Error("Product not found")
        }
        res.status(200).send(data);
    }
    catch(error) {
        res.status(500).send(error?.message)
    }
}

const getDetailsById = async (req, res) => {
    try {
        console.log(req.params)
        let response = await db.products.findOne({ where: { id: req.params.email } })
        if(response == null)
        {
            throw new Error("Product not found")
        }
           
        res.status(200).send(response)
    } catch (error) {
        console.log(error, "==error")
        res.status(404).send("product not found")
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        let updateproduct = await db.products.update({ title: req.body.title }, {
            where: {
                id: id
            }
        })
        res.status(200).send(updateproduct)
    }
    catch {
        console.log("==error")
        res.status(404).send("product not found")
    }
}
const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;

        let response = await db.products.destroy({
            where: {
                id: id
            }
        })
        res.sendStatus(200).send(response)
    }
    catch {
        console.log("error");
        res.status(400).send("user not found")
    }
}

const multerdetails = async (req, res) => {
    try {
        let data = await db.products.create(req.body);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}
const multipleproduct=async(req,res)=>{
    try {
        let multipleproduct = await db.products.create(req.body);
        console.log(multipleproduct,"===");
        res.status(200).send(multipleproduct)
    } catch (error) {
        res.status(500).send(error)
    }
}


export { create, read, readDetails, getDetailsById, update, deleteproduct,multerdetails,multipleproduct}