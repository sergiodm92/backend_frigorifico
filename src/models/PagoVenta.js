const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pagoVenta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    clienteID:  {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ventaID:  {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{
    timestamps:false
  });
};
