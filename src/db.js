require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
      database: DB_NAME,
      dialect: "postgres",
      host: DB_HOST,
      port: 5432,
      username: DB_USER,
      password: DB_PASSWORD,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/frigorifico`,
      { logging: false, native: false }
    );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { 
  Cliente, 
  Compra,
  Faena,
  PagoCompra, 
  PagoFaena, 
  PagoVenta,
  Proveedor,
  Venta,
  Stock
} = sequelize.models;

// Aca vendrian las relaciones
Compra.belongsToMany(Proveedor, { through: 'compra_proveedor'});
Compra.belongsTo(Faena);
Venta.belongsToMany(Cliente, { through: 'cliente_venta'});
Faena.belongsTo(Compra);
Faena.belongsTo(Venta);
Proveedor.belongsTo(Compra);
Venta.belongsTo(Faena);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
