"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      lyrics: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      artistId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Artists",
          key: "id",
          as: "artistId",
        },
      },
      genreId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Genres",
          key: "id",
          as: "genreId",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Songs");
  },
};
