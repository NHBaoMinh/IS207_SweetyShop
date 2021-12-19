const httpStatus = require('http-status');

const CustomError = require('../../utils/custom-error');
const { User } = require('../models');

const getUsers = async () => User.find({});

const createUser = async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    return User.create(userBody);
};

const updateUser = async (userID, userBody) => {
    const foundUser = await User.findById(userID);
    if (!foundUser) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'User not found');
    }
    return User.findByIdAndUpdate(userID, userBody, {
        new: true,
    });
};

const deleteUser = async (userID) => {
    const foundUser = await User.findById(userID);
    if (!foundUser) throw new CustomError(httpStatus.NOT_FOUND, 'User not found');
    return User.findByIdAndDelete(userID);
};

const getUserByEmail = async (email) => User.findOne({ email });

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail,
};
