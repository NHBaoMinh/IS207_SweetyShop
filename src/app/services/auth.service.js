const httpStatus = require('http-status');
const { User } = require('../models');
const CustomError = require('../../utils/custom-error');

const changePassword = async (userID, passwordPre, passwordNew) => {
    const foundUser = await User.findById(userID);
    if (!foundUser) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'User not found');
    }
    const isPasswordMatch = await foundUser.isPasswordMatch(passwordPre);

    if (!isPasswordMatch) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'Password present invalid');
    }
    foundUser.password = passwordNew;
    return foundUser.save();
};

module.exports = {
    changePassword,
};
