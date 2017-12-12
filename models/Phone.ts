// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
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

export default mongoose.model('Phone', PhoneSchema);
