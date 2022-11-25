"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Books", [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        pageQuantity: 341,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Jurassic Park",
        author: "Michael Crichton",
        pageQuantity: 423,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pageQuantity: 1178,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pageQuantity: 310,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        pageQuantity: 208,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Books", null, {});
  },
};
