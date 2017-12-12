import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

UserSchema.statics.findByLogin = function(login, cb) {
    return this.findOne({ login: new RegExp(login, 'g') }, cb);
};

export default mongoose.model('User', UserSchema);
