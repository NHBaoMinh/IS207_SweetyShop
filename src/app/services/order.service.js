const httpStatus = require('http-status');
const CustomError = require('../../utils/custom-error');
const { Order } = require('../models/order.model');

const getOrders = async () => Order.find({});

const getOrderById = async (orderId) => Order.findById(orderId);

const createOrder = async (orderBody) => Order.create(orderBody);

const updateOrder = async (orderId, orderBody) => {
    const foundOrder = await Order.findById(orderId);
    if (!foundOrder) {
        throw new CustomError(httpStatus.BAD_REQUEST, 'Order not found');
    }
    return Order.findByIdAndUpdate(orderId, orderBody, {
        new: true,
    });
};

const deleteOrder = async (orderId) => {
    const foundOrder = await Order.findById(orderId);
    if (!foundOrder) throw new CustomError(httpStatus.NOT_FOUND, 'Order not found');
    return Order.findByIdAndDelete(orderId);
};

module.exports = {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
