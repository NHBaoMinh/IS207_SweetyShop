const jwt = require('jsonwebtoken');

const env = require('../../configs/env');

const generateToken = (user) => {
    const payload = {
        id: user.id,
        name: user.fullName,
        email: user.email,
        role: user.role,
        isVerifyEmail: user.isVerifyEmail,
    };
    return jwt.sign(payload, env.passport.jwtToken, {
        expiresIn: env.passport.jwtAccessExpired,
    });
};

module.exports = {
    generateToken,
};
