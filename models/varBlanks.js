module.exports = function(sequelize, DataTypes) {

  // validation for future user input
    var VarBlanks = sequelize.define("VarBlanks", {
      varBlanks: {
        type: DataTypes.STRING,
        allowNull: false
        },
      StoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
     });
    return VarBlanks;
  };