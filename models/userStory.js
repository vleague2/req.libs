
// validation function 
module.exports = function(sequelize, DataTypes) {
    var UserStory = sequelize.define("UserStory", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });

    return UserStory;
  };
