var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var expressValidator = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local').strategy;
var multer = require('multer');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var upload = require('express-fileupload');


var mongoose = require('mongoose');
var mongoDB = 'mongodb://rakoo:rakoo123@ds227243.mlab.com:27243/gantavya2018';
mongoose.connect(mongoDB,{  useNewUrlParser: true }).then(db=>{
  console.log('mongo connected');
}).catch(error=> console.log(error));
//mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersignin = require('./routes/auth/login');
var admindashboard= require('./routes/admin/adminDashboard');
var coordinator= require('./routes/coordinator/coordinator');
var events = require('./routes/event/event');
var students = require('./routes/student/student');
var CoordinatorDashboard = require('./routes/CoordinatorDashboard/Dashboard/dashboard');




var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//upload middleware

app.use(upload());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

//handle sessions
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//validator
app.use(expressValidator({
  errorFormatter: function(param, msg ,value){
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;
    while(namespace.length){
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value:value
    };
  }
}));

app.use(require('connect-flash')());
app.use(function(req,res,next){
  res.locals.messages = require('express-messages')(req,res);
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', usersignin);
app.use('/admin', admindashboard);
app.use('/admin/coordinator', coordinator);
app.use('/admin/event', events);
app.use('/admin/student', students);
app.use('/CoordinatorDashboard', CoordinatorDashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
