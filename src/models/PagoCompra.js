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
    proveedor: {
      type: DataTypes.STRING,
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
    },
    img_comp:{
      type: DataTypes.JSON,
      allowNull: true,
    }

  },{
    timestamps:false
  });
};


