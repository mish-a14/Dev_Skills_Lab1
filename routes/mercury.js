var express = require('express');
var router = express.Router();

let artistModels = require('../models/artistModels.js')
let mrFahrenheit = artistModels.freddieMercury

//ROUTE HANDLER for FREDDIE MERCURY 
router.get('/', function(req, res, next) {
  res.render('mercury.ejs', {
    mrFahrenheit: mrFahrenheit
  })
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  for (let f of mrFahrenheit) {
    if (f.id === req.params.id) {
      res.render('showf.ejs', {f: f})
    }
  }
});

module.exports = router;