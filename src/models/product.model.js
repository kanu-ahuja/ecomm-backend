const product = (sequelize, DataTypes) => {
    return sequelize.define("product", {
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.STRING,
      },
      availability: {
        type: DataTypes.STRING,
      },
    });
  };
  
  export default product;
   