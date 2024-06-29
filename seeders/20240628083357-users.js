'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'User 1',
          email: 'user1@mail.com',
          password: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'User 2',
          email: 'user2@mail.com',
          password: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'User 3',
          email: 'user3@mail.com',
          password: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'User 4',
          email: 'user4@mail.com',
          password: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'User 5',
          email: 'user5@mail.com',
          password: 'user123',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  },
}
