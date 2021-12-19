const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-async');
const { typeCakeService } = require('../services');

const getTypeCakes = catchAsync(async (req, res) => {
    const typeCakes = await typeCakeService.getTypeCakes();
    res.status(httpStatus.OK).send({ typeCakes });
});

const createTypeCake = catchAsync(async (req, res) => {
    const typeCake = await typeCakeService.createTypeCake(req.body);
    res.status(httpStatus.CREATED).send({ typeCake });
});

const deleteTypeCake = catchAsync(async (req, res) => {
    const deletedTypeCake = await typeCakeService.deleteTypeCake(req.params.typeCakeID);
    res.status(httpStatus.OK).send({ deletedTypeCake });
});

const updateTypeCake = catchAsync(async (req, res) => {
    const updatedTypeCake = await typeCakeService.updateTypeCake(req.params.typeCakeID, req.body);
    res.status(httpStatus.OK).send(updatedTypeCake);
});

module.exports = {
    getTypeCakes,
    createTypeCake,
    deleteTypeCake,
    updateTypeCake,
};
