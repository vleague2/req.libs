'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VarBlanks', [{
        varBlanks: "verb ending in (-ing)",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
         varBlanks: "adjective",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
         

     },
     {
         varBlanks: "verb",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
         varBlanks: "noun",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
        varBlanks: "noun (bodypart)",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun (clothing)",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun",
        StoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    
    },
    {
    varBlanks: "past tense verb",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
         varBlanks: "noun plural",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
         

     },
     {
         varBlanks: "noun plural",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
         varBlanks: "adjective",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
         
     },
     {
        varBlanks: "noun",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "noun (place)",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "verb",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        
    },
    {
        varBlanks: "adjective",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    
    },
    {
        varBlanks: "noun (animal singular)",
        StoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    
    }
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VarBlanks', null, {});
  }
};