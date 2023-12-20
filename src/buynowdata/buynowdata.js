const buynow=(sequelize,DataTypes)=>{
        return sequelize.define("product_buynow_detail",{
            title : {
                type : DataTypes.STRING,
            },
            price :{
                type : DataTypes.INTEGER,
            },
            rating : {
                type : DataTypes.STRING,
            },
            color : {
                type : DataTypes.STRING,
            },
            category : {
                type : DataTypes.STRING,
            },
            img : {
                type : DataTypes.STRING,
            },
        })
}
export default buynow