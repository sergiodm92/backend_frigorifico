const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('faena', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tropa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    frigorifico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    },
    total_kg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_medias: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    costo_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  });
};