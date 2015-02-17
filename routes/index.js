var express = require('express'),
    router = express.Router(),
    passport = require('passport');
// router.use(function(req, res, next) {
//     if (!req.user) return next(); // if there is no user
//     return res.redirect('/'); // if there is a user redirect to /
// });
router.get('/', function(req, res) {
    if (req.user) {
        if (req.user.role && req.user.role === 'admin') {
            return res.redirect('/admins/dashboard/');
        }
        return res.redirect('/users/dashboard/');
    }
    res.redirect('/login');
});
router.get('/login', function(req, res) {
    res.render('login.ejs', {
        user: null
    });
});
router.post('/login', function(req, res, next) {
    console.log('login path hit');
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            console.log('authenticate error', err);
            return next(err);
        }
        if (!user) {
            return res.redirect('/?loginFailed');
        }
        console.log('attempting to login the user');
        req.login(user, function(err) {
            if (err) {
                console.log('login error', err);
                return next(err);
            }
            if (user.role === 'admin') {
                return res.redirect('/admins');
            }
            return res.redirect('/users');
        });
    })(req, res, next);
});
module.exports = router;