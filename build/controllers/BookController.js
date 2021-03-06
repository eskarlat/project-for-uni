"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Book_1 = require("../models/Book");
var Category_1 = require("../models/Category");
function edit(req, res, next) {
    var id = req.params.id;
    Book_1.default.findById(id)
        .then(function (book) {
        Category_1.default.find()
            .then(function (categories) {
            res.render('book/edit', { book: book, categories: categories });
        });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.edit = edit;
function create(req, res, next) {
    Category_1.default.find()
        .then(function (categories) {
        res.render('book/create', { categories: categories });
    });
}
exports.create = create;
function store(req, res, next) {
    var body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    };
    var book = new Book_1.default(body);
    book.image.data = fs.readFileSync(req.file.path, 'base64');
    book.image.contentType = 'image/jpeg';
    book.save()
        .then(function (result) {
        res.redirect('/admin');
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.store = store;
function update(req, res, next) {
    var id = req.params.id;
    var body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    };
    //if the file was uploaded
    if (req.file) {
        body['image'] = {
            data: fs.readFileSync(req.file.path, 'base64'),
            contentType: 'image/jpeg'
        };
    }
    Book_1.default.findById(id)
        .then(function (book) {
        book.update(body, function () {
            res.redirect('/admin');
        });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.update = update;
function destroy(req, res, next) {
    var id = req.params.id;
    Book_1.default.findById(id)
        .then(function (book) {
        book.remove();
        res.redirect('/admin');
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.destroy = destroy;
//# sourceMappingURL=BookController.js.map