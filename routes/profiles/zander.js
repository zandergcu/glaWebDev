var express = require('express');
var router = express.Router();


var name    = 'Zander!';
var twitter = '@zanderGcu';
var github  = 'https://www.github.com/zanderGcu';
var blurb   = 'Zander has just recently graduated and is getting ready for a web development career.';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/zander.pug', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
