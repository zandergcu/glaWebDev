var express = require('express');
var router = express.Router();


var name    = 'Neil Docherty';
var twitter = '@neildocherty';
var github  = 'https://www.github.com/neildocherty';
var blurb   = 'Neil is a physics teacher and self-taught web-developer with a degree in astrophysics. He is looking for a new career in web delvelopment.';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/neil.jade', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
