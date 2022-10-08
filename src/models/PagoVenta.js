const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pago_venta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente:  {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha:  {
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
    venta_id:  {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};
