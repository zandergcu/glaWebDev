var express = require('express');
var router = express.Router();


var name    = 'Anguel Hristozov';
var twitter = '';
var github  = 'https://www.github.com/modelorona';
var blurb   = 'I am a student at the University of Glasgow. That is in fact a real hamburger on my head.';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/anguel', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
