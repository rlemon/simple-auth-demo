var express = require('express'),
	passport = require('passport'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session');

var app = express();
var port = 80;

var guests = require('./routes/index'),
	users = require('./routes/users'),
	admins = require('./routes/admins');

require('./authentication');

app.set('views', path.join(__dirname , 'views'));

app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static( path.join(__dirname , 'public')));
app.use(session({
	secret: process.env.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', guests);
app.use('/users', users);
app.use('/admins', admins);

app.listen(port);
console.log('app started and listening on port ', port);