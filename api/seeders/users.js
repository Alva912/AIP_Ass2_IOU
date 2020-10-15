"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Sarah",
          email: "111@aaa.com",
          password: "111111",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Thomas",
          email: "222@bbb.com",
          password: "222222",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
