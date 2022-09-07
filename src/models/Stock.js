const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('stock', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
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
    }
  });
};