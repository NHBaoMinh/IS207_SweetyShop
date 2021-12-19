const catchAsync = require('../../utils/catch-async');
const { mongooseToObject } = require('../../utils/switchObject');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user: mongooseToObject(user),
    };
    res.render('user/contact', {
        title: 'About', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'contact'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
};
