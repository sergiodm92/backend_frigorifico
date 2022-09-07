const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pago_faena', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pagos: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
    }
  });
};