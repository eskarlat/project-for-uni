"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
function search(req, res, next) {
    var queryTitle = req.query.q;
    Book_1.default.findByTitle(queryTitle)
        .then(function (books) {
        res.render('search', { books: books, queryTitle: queryTitle });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.search = search;
//# sourceMappingURL=SearchController.js.map