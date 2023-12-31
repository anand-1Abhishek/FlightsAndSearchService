'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airpots',[
      {
        name:'KempeGoda International Airport',
        cityId:18,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mysuru International Airport',
        cityId:18,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Megaluru International Airport',
        cityId:18,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Jay Prakash Narayan Airport',
        cityId:22,
        createdAt:new Date(),
        updatedAt:new Date()
      }
      
    ],{});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
