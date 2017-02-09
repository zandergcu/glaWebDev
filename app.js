var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var https = require('https');

// var slack = require('./routes/slack');

// User profile routes
// this routes to the files that will render your page
var neil = require('./routes/profiles/neil');
var tomche = require('./routes/profiles/tomche');
var bryan = require('./routes/profiles/bryan');
var tracy = require('./routes/profiles/tracy');
var anguel = require('./routes/profiles/anguel');
var farhan = require('./routes/profiles/farhan');
var neil_b = require('./routes/profiles/neil_b');
var zander = require('./routes/profiles/zander');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


/* routes */
app.use('/', index);

/* mail route */
// app.use('/slack', slack);


/* routes for our User profiles */
app.use('/neil', neil);
app.use('/tomche', tomche);
app.use('/bryan', bryan);
app.use('/tracy', tracy);
app.use('/anguel', anguel);
app.use('/farhan', farhan);
app.use('/neil_b', neil_b);
app.use('/zander', zander);


// Slack Request Invite
app.post('/slack', function(req, res){

  // get the email address submitted from the client
  var email = req.body.email;
  // get the auth token from the Heroku config vars
  var slackToken = process.env.SLACK_TOKEN;

  var options = {
    hostname: "slack.com",
    path: '/api/users.admin.invite?token='+slackToken+'&email='+email+'&resend=true',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  // open a GET request to the Slack api
  var slack = https.request(options, (resSlack) => {

    resSlack.on('data', (d) => {
      process.stdout.write(d);
      // send response back to client
      res.send(d);
    });
  });

  slack.on('error', (e) => {
    console.error(e);
  });
  slack.end();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('¯\\_(ツ)_/¯');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
