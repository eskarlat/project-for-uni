// import * as mongoose from 'mongoose';
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        default: '',
        required: true
    }
});

export default mongoose.model('Category', CategorySchema);
