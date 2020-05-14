const Sequelize = require('sequelize');

module.exports = new Sequelize('DESUR', 'VScontrol', 'vsm1234@', {
  host: 'localhost', //'localhost|| 192.168.10.1\VSCONTROLTOTAL',
  port: '1433',
  dialect: 'mssql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// Get All
// - Operadores
// - Obras
// - Equipos
