const mongoose = require('mongoose');
const { TypeCakeSchema } = require('./type-cake.model');

const CakeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        priceDiscount: {
            type: Number,
        },
        image: {
            type: String,
        },
        discount: {
            type: Number,
        },
        typeCake: {
            type: TypeCakeSchema,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tym: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

CakeSchema.pre('save', async function (next) {
    this.priceDiscount = this.price - this.price * (this.discount / 100);
    next();
});

const Cake = mongoose.model('cakes', CakeSchema);

module.exports = {
    Cake,
    CakeSchema,
};
