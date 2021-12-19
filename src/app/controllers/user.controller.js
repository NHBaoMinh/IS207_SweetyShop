const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-async');
const userService = require('../services/user.service');
const { User } = require('../models');
const { mongooseToObject } = require('../../utils/switchObject');

const getUsers = catchAsync(async (req, res) => {
    const users = await userService.getUsers();
    res.status(httpStatus.OK).send({ users });
});

const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ user });
});

const deleteUser = catchAsync(async (req, res) => {
    const deletedUser = await userService.deleteUser(req.params.userID);
    res.status(httpStatus.OK).send({ deletedUser });
});

const profile = catchAsync(async (req, res) => {
    // Select view to render
    const user = req.user;
    const data = {
        user: mongooseToObject(user),
    };
    res.render('user/profile', {
        data,
        styles: ['header', 'footer', 'profile', 'layout-user'], // Required Stylesheet name from public
        scripts: ['profile', 'header'], // Required Script name from public
    });
});

const checkout = catchAsync(async (req, res) => {
    const user = req.user;
    const data = {
        user,
    };
    res.render('user/checkout', {
        styles: ['header', 'footer', 'checkout', 'layout-user'], // Required Stylesheet name from public
        scripts: ['profile', 'header', 'checkout'], // Required Script name from public
        data,
    });
});

const addToCart = catchAsync(async (req, res) => {
    res.json(req.body);
});

const updateUser = catchAsync(async (req, res) => {
    const user = await userService.updateUser(req.params.userID, req.body);
    res.status(httpStatus.OK).send(user);
});

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    profile,
    addToCart,
    checkout,
};
