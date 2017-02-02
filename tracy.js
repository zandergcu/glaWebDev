var express = require('express');
var router = express.Router();


var name    = 'Tracy Norman';
var twitter = '@verde79';
var github  = 'https://www.github.com/verde79';
var blurb   = "Hi, I'm Tracy and have a profile!!";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/tracy.jade', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
