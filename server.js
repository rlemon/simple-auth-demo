var app = require('./app');
var configs = require('./configs');

app.set('port', process.env.PORT || configs.defaultPort);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});