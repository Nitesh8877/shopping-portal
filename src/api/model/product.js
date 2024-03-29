const mongoose = require('mongoose');
const {statusType}=require('../../utils/contants')
const Schema = mongoose.Schema;
const product = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum:statusType,
        default: statusType.AVAILABLE
    }
}, { timestamps: true });

const Product = mongoose.model('products', product);

module.exports = Product;
