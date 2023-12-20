
const category=(sequelize,DataTypes)=>{
    return sequelize.define("Product",{
        image : {
            type : DataTypes.STRING,
        },
        price : {
            type : DataTypes.INTEGER,
        },
        rating : {
            type : DataTypes.INTEGER,
        },
        title : {
            type : DataTypes.STRING,
        },
        description : {
            type : DataTypes.STRING,
        },
        stock : {
            type : DataTypes.STRING,
        },
        color : {
            type : DataTypes.STRING,
        },
        sku : {
            type : DataTypes.STRING,
        },
        category : {
            type : DataTypes.STRING,
        }
    })
}
export default category;