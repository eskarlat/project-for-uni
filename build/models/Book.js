"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }
});
exports.default = mongoose.model('Book', BookSchema);
//# sourceMappingURL=Book.js.map