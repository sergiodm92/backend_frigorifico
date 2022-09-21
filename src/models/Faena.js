const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('faena', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      default: new Date().toLocaleDateString(),
      allowNull: true,
    },
    tropa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frigorifico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    detalle: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
    },
    total_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    total_medias: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costo_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    }
  });
};
