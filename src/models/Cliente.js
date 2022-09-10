const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cliente', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ultima_venta: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};