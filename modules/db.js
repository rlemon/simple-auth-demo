var pg = require('pg'),
	bluebird = require('bluebird');
bluebird.longStackTraces();
bluebird.promisifyAll(pg);
bluebird.promisifyAll(pg.Client.prototype);

module.exports = function(fn) {
//	var closeConnection;
	return pg.connectAsync(process.env.DATABASE_URL).bind({}).spread(function(client, close) {
		console.log('DB CONNECTED');
		this.closeConnection = close;
		return fn(client);
	}).finally(function() {
		console.log('DB TERMINATED');
		this.closeConnection();
	});
};