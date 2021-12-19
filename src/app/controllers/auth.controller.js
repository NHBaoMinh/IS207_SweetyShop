const httpStatus = require('http-status');
const CatchAsync = require('../../utils/catch-async');
const { userService, tokenService, authService } = require('../services');

const login = CatchAsync(async (req, res) => {
    const { user } = req;
    const token = await tokenService.generateToken(user);
    res.cookie('token', token);
    const userID = user._id.toString();
    res.cookie('userID', userID);
    res.status(httpStatus.OK).send({ user });
});

const register = CatchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    const token = await tokenService.generateToken(user);
    res.cookie('token', token);
    res.status(httpStatus.CREATED).send(user);
});

const logout = CatchAsync(async (req, res) => {
    res.clearCookie('token');
    res.clearCookie('userID');
    res.status(httpStatus.OK).send();
});

const changePassword = CatchAsync(async (req, res) => {
    const user = await authService.changePassword(req.user._id, req.body.passwordPre, req.body.passwordNew);
    const token = await tokenService.generateToken(user);
    res.cookie('token', token);
    res.status(httpStatus.OK).send(user);
});

module.exports = {
    login,
    register,
    logout,
    changePassword,
};
