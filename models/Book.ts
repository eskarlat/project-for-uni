// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
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

BookSchema.statics.findByTitle = function(title, cb) {
    return this.find({ title: new RegExp('^'+title, 'g') }, cb);
};

export default mongoose.model('Book', BookSchema);
