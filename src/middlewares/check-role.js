const httpStatus = require('http-status');
const CustomError = require('../utils/custom-error');

const checkRole = (roles) => async (req, res, next) => {
    const { role } = req.user;
    if (!role || roles.indexOf(role) === -1) {
        const error = new CustomError(
            httpStatus.UNAUTHORIZED,
            `Unauthorized - Insufficient user rights. Current role: ${role}. Required role: ${roles.toString()}`,
        );
        return res.redirect('/');
    }
    return next();
};

module.exports = { checkRole };
