"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    login: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    }
});
UserSchema.statics.findByLogin = function (login, cb) {
    return this.findOne({ login: new RegExp(login, 'g') }, cb);
};
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map