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

   return queryInterface.bulkInsert('Users', [{
      email: 'John',
      password: '123456',
      lastName: 'Doe',
      firstName: 'example@example.com',
      lastName: 'Cena',
      address: 'HN',
      gender: 1,
      typeRole: 'ROLE',
      keyRole:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
