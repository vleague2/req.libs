'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VarBlanks', [{
        varBlanks: "verb ending in (-ing)",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
         varBlanks: "adjective",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         

     },
     {
         varBlanks: "verb",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
         varBlanks: "noun",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
        varBlanks: "noun (bodypart)",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun (clothing)",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun",
        StoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VarBlanks', null, {});
  }
};