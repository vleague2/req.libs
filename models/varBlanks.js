module.exports = function(sequelize, DataTypes) {

  // validation for future user input
    var VarBlanks = sequelize.define("VarBlanks", {
      varBlanks: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i']
          }
        },
        storyName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              is: ["^[a-z]+$",'i']
            }
          }
     });

      VarBlanks.associate = function(models) {
        // VarBlanks.belongsTo(models.Story);
        // VarBlanks.belongsTo(models.Story, {
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });
      };
    return VarBlanks;
  };