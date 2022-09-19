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
      default: new Date().toLocaleDateString(),
      allowNull: true,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    cant: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kg_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precio_kg_prom: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    margen_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    margen_venta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    margen_porciento: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
