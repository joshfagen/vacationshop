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
    },
    description: {
        type: String
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