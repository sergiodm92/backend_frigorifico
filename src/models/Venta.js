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
    },
    cant: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    kg_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    $_kg_prom: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    margen_kg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    margen_venta: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    margen_porciento: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};