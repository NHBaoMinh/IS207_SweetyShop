const catchAsync = require('../../utils/catch-async');
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/switchObject');
const { cakeService } = require('../services');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const cakes = await cakeService.getCakes();
    const data = {
        user: mongooseToObject(user),
        cakes: multipleMongooseToObject(cakes),
    };
    return res.render('user/menu', {
        title: 'Sản phẩm', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'menu'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

const showCake = catchAsync(async (req, res) => {
    const { user } = req;
    const { cakeID } = req.params;
    const cake = await cakeService.getCakeById(cakeID);
    const data = {
        cake: mongooseToObject(cake),
        user: mongooseToObject(user),
    };
    // Select view to render
    res.render('user/product', {
        styles: ['header', 'footer', 'product', 'layout-user'], // Required Stylesheet name from public
        scripts: ['product', 'header'], // Required Script name from public
        title: 'Chi tiết bánh',
        data,
    });
});

const showCakeByTypeCake = catchAsync(async (req, res) => {
    const { user } = req;
    const { typeCakeID } = req.params;
    const cakes = await cakeService.getCakesByTypeCake(typeCakeID);
    const data = {
        user,
        cakes: multipleMongooseToObject(cakes),
    };
    return res.render('user/menu', {
        title: 'Sản phẩm', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'menu'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
    showCake,
    showCakeByTypeCake,
};
