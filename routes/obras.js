const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');


const db = require('../config/database');
const Obra = require('../models/Obra');

/* GET Obras listing. */

router.get('/', (req, res, next) => {
  fetch('http://demo8439083.mockable.io/machines')
    .then((res) => res.json())
    .then((data) => {
      //res.send({ data });
    })
    .catch((err) => {
      res.redirect('/error');
    });
    Obra.findAll({limit:2})
    .then((data) => {
      //console.log('Soolushun:',data);
      res.send({
        data
      });
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
});

  


module.exports = router;
