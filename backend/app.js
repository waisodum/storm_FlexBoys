var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const corsconfig={
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  preflightContinue: false, 
  optionsSuccessStatus: 204, 
};
app.use(cors(corsconfig))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler

app.listen(80,()=>{
  console.log("salman");
})
module.exports = app;
