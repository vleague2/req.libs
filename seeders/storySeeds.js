'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [{
        story: "Rick and Morty had a ${var[0]} while ${var[1]} at the ${var[2]}.",
        createdAt : new Date(),
        updatedAt : new Date()
     } 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
