const httpStatus = require('http-status');
const CustomError = require('../../utils/custom-error');
const { TypeCake } = require('../models/type-cake.model');

const getTypeCakes = async () => TypeCake.find({});

const getTypeCakeById = async (typeCakeId) => TypeCake.findById(typeCakeId);

const createTypeCake = async (typeCakeBody) => TypeCake.create(typeCakeBody);

const updateTypeCake = async (typeCakeId, typeCakeBody) => {
    const foundTypeCake = await TypeCake.findById(typeCakeId);
    if (!foundTypeCake) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'Type Cake not found');
    }
    return TypeCake.findByIdAndUpdate(typeCakeId, typeCakeBody, {
        new: true,
    });
};

const deleteTypeCake = async (typeCakeId) => {
    const foundTypeCake = await TypeCake.findById(typeCakeId);
    if (!foundTypeCake) throw new CustomError(httpStatus.NOT_FOUND, 'Type Cake not found');
    return TypeCake.findByIdAndDelete(typeCakeId);
};

module.exports = {
    getTypeCakes,
    getTypeCakeById,
    createTypeCake,
    updateTypeCake,
    deleteTypeCake,
};
