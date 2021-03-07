var express = require('express');
var router = express.Router();


let artistModels= require('../models/artistModels.js'); 
let barbie = artistModels.nickiMinaj

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('nicki.ejs', {barbie: barbie})
});


router.get('/:id', function(req, res, next) {
    console.log(req.params.id)
    for (let n of barbie) {
        if (n.id === req.params.id) {
            res.render('shown.ejs', {n: n})
        }
    }
  });



module.exports = router;
