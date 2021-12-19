const express = require('express');
const { passport } = require('../plugins/passport');
const { authController } = require('../controllers');

const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', { session: false, failureFlash: 'Invalid username or password.' }),
    authController.login,
);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
router.post('/change-password', passport.authenticate('jwt', { session: false }), authController.changePassword);

module.exports = router;
