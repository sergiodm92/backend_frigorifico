const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('compra', {
    fecha: {
      type: DataTypes.DATEONLY,
      default: new Date().toLocaleDateString(),
      allowNull: true,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    n_dte: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cant: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    kgv_brutos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
      saldo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    desbaste: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kg_desbaste: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    kgv_netos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precio_kgv_netos: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    n_tropa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kg_carne: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
     rinde: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    cant_achuras: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precio_venta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    recupero_precio_kg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    costo_hac: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_faena_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    comision: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_flete: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_veps: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_faena: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    costo_kg: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
