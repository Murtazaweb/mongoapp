var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/users');





var mongoose = require('mongoose');

// Connect to MongoDB...
mongoose.connect('mongodb://127.0.0.1:27017/FYP');

//attach listener to connected event (optional)
mongoose.connection.once('connected',function(){
    console.log('Connected to Database');
});





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/polls/polls', routes.list);
app.post('/polls', routes.create);


app.use('/users', users);


module.exports = app;
