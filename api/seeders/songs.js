"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          tittle: "Drake",
          lyrics: "long strng here",
          artistId: 1,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: "Frank",
          lyrics: "another long string",
          artistId: 2,
          genreId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
