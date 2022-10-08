require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');


const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize =
  // process.env.NODE_ENV === "production"
    //  new Sequelize( {
    //   database: DB_NAME,
    //   dialect: "postgres",
    //   host: DB_HOST,
    //   port: 5432,
    //   user: DB_USER,
    //   password: DB_PASSWORD,
    // pool: {
       //   max: 3,
      //   min: 1,
      //   idle: 10000,
    // },
       // dialectOptions: {
       //   ssl: {
       //     require: true,
       //     rejectUnauthorized: false,
      //   },
     //   keepAlive: true,
       // },
       // ssl: true,
    // })
    // :
    new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
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
  Proveedor,
  Res,
  Stock,
  User,
  Venta,
  PagoCompra,
  PagoVenta,
  PagoFaena
} = sequelize.models;

// Aca vendrian las relaciones

// Cliente.hasMany(Venta)
// Venta.hasOne(Cliente)
// Proveedor.hasMany(Compra);
// Compra.belongsTo(Proveedor)
// Faena.hasMany(Res);
// Res.belongsTo(Faena)
// Faena.hasMany(Compra)
// Compra.belongsTo(Faena)
// Res.belongsTo(Venta)
// Venta.hasMany(Res)
// Faena.hasMany(Venta);
// Proveedor.hasOne(Compra);//
// Proveedor.hasMany(PagoCompra)
// PagoCompra.belongsTo(Proveedor)
// Faena.hasMany(PagoFaena)
// Cliente.hasMany(PagoVenta)

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

