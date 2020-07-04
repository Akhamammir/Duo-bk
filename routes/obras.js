const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const { Op } = require("sequelize");
const db = require('../config/database');
const Obra = require('../models/Obra');

/* GET Obras listing. */
//test with : ADICIONALES EL ROBLE 2 
router.get('/', (req, res, next) => {
  const name = req.query.name
  db.query("SELECT TOP 8 Direccion, NombreCorto, Descripcion, IdObra FROM dbo.Obras WHERE IdObra LIKE '%"+name+"%' AND IdEstatus = 46")
    /*Obra.findAll({
      where:{
        NombreCorto : name
      },
      limit:7
    })*/
    .then((data) => {
      //console.log('Soolushun:',data);
      res.send(data);
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

  


module.exports = router;
