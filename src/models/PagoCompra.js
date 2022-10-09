const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pagoCompra', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    proveedorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    formaDePago: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    compraID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }

  },{
    timestamps:false
  });
};


