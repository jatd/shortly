const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    description: DataTypes.STRING,
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return Item;
};
