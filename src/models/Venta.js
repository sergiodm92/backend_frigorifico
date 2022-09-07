const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('venta', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    }
  });
};