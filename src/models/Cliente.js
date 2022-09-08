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
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ultima_venta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    saldo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};