const catchAsync = require('../../utils/catch-async');
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/switchObject');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user: mongooseToObject(user),
    };
    res.render('user/about-us', {
        title: 'About', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'about-us'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
};
