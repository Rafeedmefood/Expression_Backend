'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  note.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    link: DataTypes.STRING,
    tag : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'note',
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return note;
};