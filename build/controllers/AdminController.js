"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
function index(req, res, next) {
    Book_1.default.find()
        .then(function (books) {
        res.render('admin', { books: books });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.index = index;
//# sourceMappingURL=AdminController.js.map