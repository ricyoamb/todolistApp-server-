'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todolist.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
      Todolist.hasMany(models.Task, {
        foreignKey: 'todolistId',
        as: 'tasks'
      });
    }
  }
  Todolist.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Todolist',
  });
  return Todolist;
};
