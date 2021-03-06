var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var accessoriesRouter = require('./routes/accessories');
var phonesRouter = require('./routes/phones');
var accountRouter = require('./routes/account');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/accessories', accessoriesRouter);
app.use('/phones', phonesRouter);
app.use('/account', accountRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.use('*', function(req, res){
  res.send('Not Found', 404);
});

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

module.exports = app;
