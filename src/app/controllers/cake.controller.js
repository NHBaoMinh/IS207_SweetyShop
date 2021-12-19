const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-async');
const { cakeService } = require('../services');

const getCakes = catchAsync(async (req, res) => {
    const cakes = await cakeService.getCakes();
    res.status(httpStatus.OK).send({ cakes });
});

const getCakeById = catchAsync(async (req, res) => {
    const cake = await cakeService.getCakeById(req.params.cakeID);
    res.status(httpStatus.OK).send({ cake });
});

const createCake = catchAsync(async (req, res) => {
    const cake = await cakeService.createCake(req.body);
    res.status(httpStatus.CREATED).send({ cake });
});

const deleteCake = catchAsync(async (req, res) => {
    const deletedCake = await cakeService.deleteCake(req.params.cakeID);
    res.status(httpStatus.OK).send({ deletedCake });
});

const updateCake = catchAsync(async (req, res) => {
    const updatedCake = await cakeService.updateCake(req.params.cakeID, req.body);
    res.status(httpStatus.OK).send(updatedCake);
});

module.exports = {
    getCakes,
    getCakeById,
    createCake,
    updateCake,
    deleteCake,
};
