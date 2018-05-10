module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      story: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
    
    return Story;
  };