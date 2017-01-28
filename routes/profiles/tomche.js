var express = require('express');
var router = express.Router();


var name    = 'Tomas Chmelevskij';
var twitter = '@megamolis';
var github  = 'https://www.github.com/chmelevskij';
var blurb   = "Hi, I am Tom. I speak several human languages and I speak computers.";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/tomche.jade', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
