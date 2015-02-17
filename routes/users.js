var express = require('express'),
    router = express.Router();

router.use(function(req, res, next) {
	if(req.user) {
		return next(); // if there is a user
	}
	return res.redirect('/login'); // if there is no user redirect to /login
});

router.get(/\/|\/dashboard/, function(req, res) {
	res.render('users/dashboard.ejs', {user: req.user});
});

// router.post('/logout', function(req, res) {
	// req.session.destroy(function() {
	// 	return res.redirect('/');
	// });
// });

router.get('/logout', function(req, res) {
	req.session.destroy(function() {
		return res.redirect('/');
	});
});

module.exports = router;