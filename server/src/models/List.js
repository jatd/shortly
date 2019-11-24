const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    name: DataTypes.STRING,
  });

  List.associate = models => {
    List.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
      type: DataTypes.UUID,
    });
    List.hasMany(models.Item, {
      as: 'items',
      foreignKey: 'listId',
      type: DataTypes.UUID,
    });
  };

  return List;
};
