const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en puerto ' + process.env.PORT);
  });
});
