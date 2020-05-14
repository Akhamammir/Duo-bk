const Sequelize = require('sequelize');

module.exports = new Sequelize('DESUR', 'VSControl', 'vsm1234@', {
  host: "192.168.10.1", //'localhost|| 192.168.10.1\VSCONTROLTOTAL',
  port:'49686',
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
