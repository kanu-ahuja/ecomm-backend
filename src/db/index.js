import { Sequelize, DataTypes } from "sequelize"
import product from "../models/category.model.js";

//create connection   dbname,root,passwqord,host,
const sequelize = new Sequelize('product', 'root', '12345678', {
  host: 'localhost',
  dialect: "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

//authenticate connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

let db = {}

db.productModel = product(sequelize, DataTypes)
// db.productModel.sync({alter:true})

export default db;