const catchAsync = require('../../utils/catch-async');
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/switchObject');
const { typeCakeService, cakeService } = require('../services');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const typeCakes = await typeCakeService.getTypeCakes();
    const cakes = await cakeService.getCakes();
    const data = {
        cake: [],
        user: mongooseToObject(user),
        typeCakes: multipleMongooseToObject(typeCakes),
        cakes: multipleMongooseToObject(cakes),
    };
    // Select view to render
    return res.render('user/home', {
        title: 'Home', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'home'], // Required Stylesheet name from public
        scripts: ['home'], // Required Script name from public
        data, // Data to handlebars
    });
});

module.exports = {
    index,
};
