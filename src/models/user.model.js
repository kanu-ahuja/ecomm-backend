const user=(sequelize,DataTypes)=>{
    return sequelize.define("user",{
        name:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:"John Doe"
          },
          class:{
            type:DataTypes.STRING
          },
    })
}
export default user;