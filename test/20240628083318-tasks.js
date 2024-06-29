'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Task 1',
          description: 'Description for task 1',
          priority: 'low',
          status: 'pending',
          dueDate: new Date('2024-07-01T10:00:00Z'),
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task 2',
          description: 'Description for task 2',
          priority: 'medium',
          status: 'in progress',
          dueDate: new Date('2024-07-02T10:00:00Z'),
          todolistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task 3',
          description: 'Description for task 3',
          priority: 'high',
          status: 'completed',
          dueDate: new Date('2024-07-03T10:00:00Z'),
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task 4',
          description: 'Description for task 4',
          priority: 'medium',
          status: 'pending',
          dueDate: new Date('2024-07-04T10:00:00Z'),
          todolistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Task 5',
          description: 'Description for task 5',
          priority: 'low',
          status: 'in progress',
          dueDate: new Date('2024-07-05T10:00:00Z'),
          todolistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {})
  },
}
