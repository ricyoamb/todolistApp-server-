'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Todolist, {
        foreignKey: 'todolistId',
        as: 'todolist',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'in progress', 'completed'),
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    todolistId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'todolists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return Task;
};
