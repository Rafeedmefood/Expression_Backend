'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Written extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Written.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    context: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Written',
  });
  return Written;
};