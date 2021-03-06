var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    passwordHash = require('password-hash'),
    getDb = require('./modules/db');
passport.use(new LocalStrategy(function(username, password, done) {
    getDb(function(client) {
        client.queryAsync({
            text: 'SELECT * FROM subscribers WHERE username = $1',
            values: [username]
        }).then(function(results) {
            var user = results.rows[0];
            if (!user || !passwordHash.verify(password, user.password)) {
                return done(null, false, {
                    message: 'invalid username or password'
                });
            }
            return done(null, user);
        }).catch(done);
    });
}));
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    if (obj) {
        return done(null, obj);
    }
    getDb(function(client) {
        client.queryAsync({
            text: 'SELECT * FROM subscribers WHERE username = $1',
            values: [obj.username]
        }).then(function(results) {
            var user = results.rows[0];
            return done(null, user);
        }).catch(done);
    });
});
