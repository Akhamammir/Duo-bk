const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Equipo = require('../models/Equipo');
const Sequelize = require('sequelize');
/* GET Equipos listing. */
//test with APISONADOR VIBRATORIO MIKASA MOD MT-74F
//test with APISONADOR VIBRATORIO WACKER MOD BS60-2I
router.get('/', (req, res, next) =>{
const name = req.query.name
console.log(req.query)
  db.query("SELECT TOP 5 Nombre, Descripcion, Modelo, Anio, Placas, TipoCombustible, IdEquipo FROM dbo.Equipos WHERE IdEquipo LIKE '%"+name+"%'")
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

module.exports = router;
