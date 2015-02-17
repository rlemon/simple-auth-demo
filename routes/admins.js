var express = require('express'),
    router = express.Router();
router.use(function(req, res, next) {
    if (req.user && req.user.role && req.user.role === 'admin') {
        return next(); // if there is a user and the user is an admin
    }
    return res.redirect('/'); // if there is no user with the admin role redirect to /
});
// matches / and /dashboard
router.get(/\/|\/dashboard/, function(req, res) {
    res.render('admins/dashboard.ejs', {
        user: req.user
    });
});
router.post('/logout', function(req, res) {
    req.session.destroy(function() {
        return res.redirect('/');
    });
});
module.exports = router;