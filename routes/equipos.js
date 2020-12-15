const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Equipo = require('../models/Equipo');
const Sequelize = require('sequelize');
/* GET Equipos listing. */
//test with APISONADOR VIBRATORIO MIKASA MOD MT-74F
//test with APISONADOR VIBRATORIO WACKER MOD BS60-2I
router.get('/main', (req, res, next) =>{
const name = req.query.name
console.log(req.query)
  db.query("SELECT TOP 20 Nombre, Descripcion, Modelo, Anio, Placas, TipoCombustible, IdEquipo, ContadorActualEquipo, IdEmpleadoOperador, IdObra FROM dbo.Equipos WHERE AND NOT IdEstatus = 13")
  /*Equipo.findAll({
  	where:{
  	  'Nombre' : {[Sequelize.Op.iLike]:'%'+name+'%'}
  	},
  })
  //This library is providing an error do manual query
  */
  .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});
router.get('/driver', (req, res, next) =>{
  const name = req.query.name
  db.query("SELECT IdEmpleado, Nombre FROM dbo.Empleados WHERE IdEmpleado ="+name)
  .then((data2) => {
      console.log(data2)
      //console.log('Soolushun:',data);
      res.send(data2);
    }).catch((e) => console.log('Ha ocurrido un error: ', e))
});
router.get('/obras', (req, res, next) =>{
  const name = req.query.name
  db.query("SELECT IdObra, NombreCorto, Direccion, Descripcion FROM dbo.Obras WHERE IdObra = '"+name+"'")
  .then((data3) => {
      console.log(data3)
      //console.log('Soolushun:',data);
      res.send(data3);
    }).catch((e) => console.log('Ha ocurrido un error: ', e))
});
module.exports = router;