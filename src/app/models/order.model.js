const mongoose = require('mongoose');
const { UserSchema } = require('./user.model');
const { CakeSchema } = require('./cake.model');

const OrderSchema = mongoose.Schema(
    {
        user: {
            type: UserSchema,
            required: true,
        },
        cakes: {
            type: [
                {
                    cake: CakeSchema,
                    quantity: Number,
                    amount: Number,
                },
            ],
        },
        totalPrice: {
            type: Number,
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Order = mongoose.model('orders', OrderSchema);

module.exports = {
    Order,
    OrderSchema,
};
