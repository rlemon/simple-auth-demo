var express = require('express'),
	passport = require('passport'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
    configs = require('./configs');

var app = express();
var port = 80;

var guests = require('./routes/index'),
	users = require('./routes/users'),
	admins = require('./routes/admins');

require('./authentication');

app.set('views', path.join(__dirname , 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static( path.join(__dirname , 'public')));
app.use(session({
	secret: configs.sessionSecretKey
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', guests);
app.use('/users', users);
app.use('/admins', admins);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
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