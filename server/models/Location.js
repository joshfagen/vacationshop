const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        maxlength: 50,
        default: 'User'
    },
    description: {
        type: String,
        default: 'basic description'
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    country: {
        type: String,
    },
    continent: {
        type: String,
        default: 'Europe'
    },
    sold: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

const Location = mongoose.model('Location', locationSchema);

module.exports = { Location };