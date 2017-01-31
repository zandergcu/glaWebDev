var express = require('express');
var router = express.Router();


var name    = 'Bryan Docherty';
var twitter = '@BryanMDocherty';
var github  = 'https://www.github.com/bryandocherty';
var blurb   = 'Graduated with BSc (Hons) in Computing Science from the University of Glasgow. Pursuing a career in web development.';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/bryan.jade', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
