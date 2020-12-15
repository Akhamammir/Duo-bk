var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body)
  try {
    let x = {
      'root': {
        pwd: 'toor'
      }
    }
    console.log((x[req.body.usr].pwd == req.body.pwd ? true : false))
    res.send({ auth: (x[req.body.usr].pwd == req.body.pwd ? true : false) });
  } catch (Err) {
    console.log(Err)
  }
});


module.exports = router;
