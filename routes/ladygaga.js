var express = require('express');
var router = express.Router();

let artistModels = require('../models/artistModels.js')
let gaga = artistModels.ladyGaga


router.get('/', function(req, res, next) {
  res.render('ladygaga.ejs', {
      gaga: gaga
    })
});

router.get('/:id', function(req, res, next) {
    console.log(req.params.id) 
    for (let l of gaga) {
        if (l.id === req.params.id) {
        res.render('showl.ejs', {l: l})
    }
} 
}); 

module.exports = router;
