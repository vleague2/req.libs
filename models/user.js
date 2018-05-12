const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {

    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }

    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
});

  return User;
};