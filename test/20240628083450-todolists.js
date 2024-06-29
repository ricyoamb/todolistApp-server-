'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'todolists',
      [
        {
          title: 'Todolist 1',
          description: 'Description for todolist 1',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Todolist 2',
          description: 'Description for todolist 2',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Todolist 3',
          description: 'Description for todolist 3',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Todolist 4',
          description: 'Description for todolist 4',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Todolist 5',
          description: 'Description for todolist 5',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todolists', null, {})
  },
}
