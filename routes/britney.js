var express = require('express');
var router = express.Router();

let artistModels = require('../models/artistModels.js')
let britneyBeep = artistModels.britneySpears

//ROUTE HNADLER for Britney Spears 
router.get('/', function(req,res) {
  res.render('britney.ejs', {britneyBeep: britneyBeep})
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  for (let b of britneyBeep) {
    if (req.params.id === b.id) {
      res.render('show.ejs', 
        {b: b})
    }
  }
  });

module.exports = router;