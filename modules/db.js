var pg = require('pg'),
	bluebird = require('bluebird'),
	configs = require('../configs');
bluebird.longStackTraces();
bluebird.promisifyAll(pg);
bluebird.promisifyAll(pg.Client.prototype);

module.exports = function(fn) {
	return pg.connectAsync(configs.dbConnectionString).bind({}).spread(function(client, close) {
		this.closeConnection = close;
		return fn(client);
	}).finally(function() {
		this.closeConnection();
	});
};