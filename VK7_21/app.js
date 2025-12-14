var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const opintojaksoRouter = require('./routes/opintojakso');
const opiskelijaRouter = require('./routes/opiskelija');
const arviointiRouter = require('./routes/arviointi');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/opiskelija', opiskelijaRouter);
app.use('/arviointi', arviointiRouter);

module.exports = app;