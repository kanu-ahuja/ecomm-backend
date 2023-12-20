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
        const {id} = req.params;
        let data = await db.products.findOne({where : {id : id}});
        res.status(200).send(data);
    }
    catch {
        console.log(error, "==error")
        res.status(404).send("User not found")
    }
}

export { create, read, readDetails }