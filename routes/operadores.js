const express = require('express');
const router = express.Router();

const { Op } = require("sequelize");
const db = require('../config/database');

/* GET Operadores listing. */
//test with : ADICIONALES EL ROBLE 2 
router.get('/', (req, res, next) => {
  const name = req.query.name
  db.query("SELECT TOP 8 IdEmpleado, Nombre FROM dbo.Empleados WHERE Nombre LIKE '%"+name+"%' AND EsConductor=1")
    .then((data) => {
      //console.log('Soolushun:',data);
      res.send({
        data
      });
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

  


module.exports = router;