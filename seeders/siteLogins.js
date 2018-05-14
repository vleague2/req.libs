"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
          username: "Ben",
          password: "tester",
          email: "ben@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
        username: "Vicki",
        password: "tester2",
        email: "vicki@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()

       },
       {
        username: "Trey",
        password: "tester3",
        email: "trey@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()  
       },
       {
        username: "Alex",
        password: "tester4",
        email: "alex@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date() 
       }
    ], {});
},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
}
};
    