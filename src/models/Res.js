const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('res', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    correlativo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precio_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tropa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    id_v: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
