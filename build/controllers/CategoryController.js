"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
var Category_1 = require("../models/Category");
function index(req, res, next) {
    Category_1.default.find()
        .then(function (categories) {
        res.render('category/index', { categories: categories });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.index = index;
function edit(req, res, next) {
    var id = req.params.id;
    Category_1.default.findById(id)
        .then(function (category) {
        res.render('category/edit', { category: category });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.edit = edit;
function create(req, res, next) {
    res.render('category/create');
}
exports.create = create;
function store(req, res, next) {
    var body = {
        title: req.body.title,
    };
    var category = new Category_1.default(body);
    category.save()
        .then(function (result) {
        res.redirect('/admin/categories');
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
    };
    Category_1.default.findById(id)
        .then(function (category) {
        category.update(body, function () {
            res.redirect('/admin/categories');
        });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.update = update;
function destroy(req, res, next) {
    var id = req.params.id;
    Category_1.default.findById(id)
        .then(function (category) {
        category.remove();
        res.redirect('/admin/categories');
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.destroy = destroy;
function search(req, res, next) {
    var categoryId = req.query.cat;
    Book_1.default.findByCategory(categoryId)
        .then(function (books) {
        Category_1.default.findById(categoryId)
            .then(function (category) {
            res.render('book/categorySearch', { books: books, category: category });
        });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.search = search;
//# sourceMappingURL=CategoryController.js.map