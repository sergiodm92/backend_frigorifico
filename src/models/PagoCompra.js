const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pago_compra', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha:  {
        type: DataTypes.STRING,
        allowNull: true,
    },
    proveedor:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    monto:  {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    formaDePago:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    compra_id:  {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};
