"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
// var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PhoneSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: true
    },
    image: {
        type: String,
        default: '',
        required: true
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
exports.default = mongoose.model('Phone', PhoneSchema);
//# sourceMappingURL=Phone.js.map