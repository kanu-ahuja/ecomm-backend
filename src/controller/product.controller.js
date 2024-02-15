import db from "../db/index.js";

const create = async (req, res) => {
  try {
    let data = await db.productModel.create(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const read = async (req, res) => {
  try {
    let data = await db.productModel.findAll();
    console.log("fd");

    res.status(200).send(data);
  } catch {
    console.log(error, "==error");
    res.status(404).send("User not found");
  }
};

const readDetails = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await db.productModel.findOne({ where: { id: id } });
    res.status(200).send(data);
  } catch {
    console.log(error, "==error");
    res.status(404).send("User not found");
  }
};
const multerProduct = async (req, res) => {
    try {
        let data = await db.productModel.create(req.body);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    let deleteUser = await db.productModel.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(200).send(deleteUser);
  } catch {
    console.log("error");
    res.status(400).send("user not found");
  }
};

export { create, read, readDetails, deleteproduct,multerProduct };
