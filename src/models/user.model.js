const user = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "John Doe"
    },
    class: {
      type: DataTypes.STRING
    },
    rollno: {
      type: DataTypes.INTEGER
    },
    section: {
      type: DataTypes.STRING
    },
    fathername: {
      type: DataTypes.STRING
    },
    mothername: {
      type: DataTypes.STRING
    },
    obtainedmarks: {
      type: DataTypes.INTEGER
    },
    totalmarks: {
      type: DataTypes.INTEGER
    },
  })
}
export default user;