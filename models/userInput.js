module.exports = function(sequelize, DataTypes) {
    var UserInput = sequelize.define("UserInput", {
      userInput: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i']
          }
      }
    });

    UserInput.associate = function(models) {
        // UserInput.belongsTo(models.VarBlanks);
        // UserInput.belongsTo(models.Story);
        // UserInput.belongsTo(models.User);
    };
    return UserInput;
  };