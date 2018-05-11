module.exports = function(sequelize, DataTypes) {
    var VarBlanks = sequelize.define("VarBlanks", {
      varBlanks: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i']
          }
      }
     });

      VarBlanks.associate = function(models) {
        VarBlanks.belongsTo(models.Story);
      };
      
    return VarBlanks;
  };