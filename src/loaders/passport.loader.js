const passport = require('passport');

const { jwtStrategy, localStrategy, facebookStrategy, googleStrategy } = require('../app/plugins/passport');

module.exports = (app) => {
    app.use(passport.initialize());
    passport.use('jwt', jwtStrategy);
    passport.use('local', localStrategy);
};
