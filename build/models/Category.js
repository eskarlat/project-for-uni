"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new Schema({
    title: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('Category', CategorySchema);
//# sourceMappingURL=Category.js.map