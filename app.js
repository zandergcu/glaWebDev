var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var index = require('./routes/index');

// User profile routes

var neil = require('./routes/profiles/neil'); // this routes to the files that will render your page
var tomche = require('./routes/profiles/tomche'); // this routes to the files that will render your page
var bryan = require('./routes/profiles/bryan');
var tracy = require('./routes/profiles/tracy');
var anguel = require('./routes/profiles/anguel');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set some security-related headers to be sent out with each response
//app.use(helmet());
app.use('/', index);

// Defining the routes for our User profiles

app.use('/neil', neil);
app.use('/tomche', tomche);
app.use('/bryan', bryan);
app.use('/tracy', tracy);
app.use('/anguel', anguel);





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
