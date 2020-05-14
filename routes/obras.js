const express = require('express');
const router = express.Router();

const db = require('../config/database');
const Obra = require('../models/Obra');

/* GET Obras listing. */

router.get('/', (req, res, next) =>
  Obra.findAll()
    .then((data) => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch((e) => console.log('Ha ocurrido un error: ', e))
);

module.exports = router;
