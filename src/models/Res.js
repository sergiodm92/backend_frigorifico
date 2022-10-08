const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('res', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    correlativo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precio_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    tropa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    frigorifico: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    id_v: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{
    timestamps:false
  });
};
