const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('compra', {
    id_compra:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    n_dte: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cant: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kgv_brutos: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    desbaste: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kg_desbaste: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kgv_netos: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    $_kgv_netos: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    n_tropa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kg_carne: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kg_achuras: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    $_venta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recupero_$kg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costo_hac: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    costo_faena_kg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comision: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_flete: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    costo_veps: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    costo_faena: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    costo_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    costo_kg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};