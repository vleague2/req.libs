module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    
    Story.associate = function(models) {
      // Story.hasMany(models.VarBlanks, {foreignKey: 'title', sourceKey: 'storyName'});
      // Story.hasMany(models.VarBlanks, {
      //   onDelete: "cascade"
      // });
    };
    
    return Story;
  };