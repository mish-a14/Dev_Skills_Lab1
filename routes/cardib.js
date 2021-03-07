var express = require('express');
var router = express.Router();


let artistModels = require('../models/artistModels.js')
let money = artistModels.cardib


//ROUTE HNADLER for CARDI B 
router.get('/', function(req, res) {
  res.render('cardib.ejs', {money: money})
});


router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  for (let c of money) {
    if (req.params.id === c.id) {
      res.render('showc.ejs', {c: c})
    }
  }
});


module.exports = router;