const catchAsync = require('../../utils/catch-async');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/switchObject');
const { cakeService, typeCakeService, orderService } = require('../services');
const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        user: mongooseToObject(user),
    };
    res.render('admin/admin', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Thông tin cá nhân',
                href: '#',
            },
        ],
        data,
    });
});
const changePassword = catchAsync(async (req, res) => {
    res.render('admin/change-password', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'change-password'],
        scripts: ['change-password'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Đổi mật khẩu',
                href: '#',
            },
        ],
    });
});

const info = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        user: mongooseToObject(user),
    };
    console.log(data.user.birthday);
    res.render('admin/info', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'info'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Thông tin cá nhân',
                href: '#',
            },
        ],
        scripts: ['info'],
        data,
    });
});
const managerCake = catchAsync(async (req, res) => {
    const cakes = await cakeService.getCakes();
    const data = {
        cakes: multipleMongooseToObject(cakes),
    };
    res.render('admin/managerCake', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        scripts: ['managerCake'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý bánh',
                href: '#',
            },
        ],
    });
});
const managerReceipt = catchAsync(async (req, res) => {
    const orders = await orderService.getOrders();
    const data = {
        orders: multipleMongooseToObject(orders),
    };
    res.render('admin/managerReceipt', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý hóa đơn',
                href: '#',
            },
        ],
    });
});
const managerAccount = catchAsync(async (req, res) => {
    res.render('admin/managerAccount', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý tài khoản',
                href: '#',
            },
        ],
    });
});

const managerTypeCake = catchAsync(async (req, res) => {
    const typeCakes = await typeCakeService.getTypeCakes();
    const data = {
        typeCakes: multipleMongooseToObject(typeCakes),
    };
    res.render('admin/managerTypeCake', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'mana-type-cake'],
        scripts: ['mana-type-cake'],
                breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý loại bánh',
                href: '#',
            },
        ],
    });
});

module.exports = {
    index,
    changePassword,
    managerCake,
    managerTypeCake,
    managerReceipt,
    managerAccount,
    info,
};
