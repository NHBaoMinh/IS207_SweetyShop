const httpStatus = require('http-status');
const CustomError = require('../../utils/custom-error');
const { Cake } = require('../models/cake.model');

const getCakes = async () => Cake.find({});

const getCakeById = async (CakeId) => Cake.findById(CakeId);

const getCakesByTypeCake = async (typeCakeID) => Cake.find({ 'typeCake._id': typeCakeID });

const createCake = async (CakeBody) => Cake.create(CakeBody);

const updateCake = async (CakeId, CakeBody) => {
    const foundCake = await Cake.findById(CakeId);
    if (!foundCake) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'Cake not found');
    }
    return Cake.findByIdAndUpdate(CakeId, CakeBody, {
        new: true,
    });
};

const deleteCake = async (CakeId) => {
    const foundCake = await Cake.findById(CakeId);
    if (!foundCake) throw new CustomError(httpStatus.NOT_FOUND, 'Cake not found');
    return Cake.findByIdAndDelete(CakeId);
};

module.exports = {
    getCakes,
    getCakeById,
    createCake,
    updateCake,
    deleteCake,
    getCakesByTypeCake,
};
