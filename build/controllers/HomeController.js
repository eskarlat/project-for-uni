"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
var Category_1 = require("../models/Category");
//index
function index(req, res, next) {
    Book_1.default.find()
        .then(function (books) {
        res.render('index', { books: books });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.index = index;
//findByID
function findById(req, res, next) {
    var id = req.params.id;
    Book_1.default.findById(id)
        .then(function (book) {
        Category_1.default.findById(book.category)
            .then(function (category) {
            res.render('book/detail', { book: book, category: category });
        });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.findById = findById;
//# sourceMappingURL=HomeController.js.map