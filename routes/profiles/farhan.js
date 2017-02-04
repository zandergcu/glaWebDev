var express = require('express');
var router = express.Router();


var name    = 'Farhan Ali';
var twitter = '@farhans_tweets';
var github  = 'https://www.github.com/farhansrepo';
var blurb   = "Aspiring web/software developer, avid coffee drinker.";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profiles/farhan.pug', {
    name    : name,
    twitter : twitter,
    blurb   : blurb,
    github  : github
  });
});

module.exports = router;
