const catchAsync = require('../../utils/catch-async');
const { mongooseToObject } = require('../../utils/switchObject');
const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user: mongooseToObject(user),
    };
    res.render('user/blog', {
        title: 'Blog', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'blog'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

const detailBlog = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user: mongooseToObject(user),
    };
    res.render('user/detail-blog', {
        title: 'Blog', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'detail-blog'], // Required Stylesheet name from public
        scripts: ['detail-blog'], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
    detailBlog,
};
