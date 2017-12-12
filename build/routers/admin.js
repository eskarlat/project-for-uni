"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var AdminController = require("../controllers/AdminController");
var UserController = require("../controllers/UserController");
var BookController = require("../controllers/BookController");
exports.default = function (app) {
    var apiRoutes = express.Router();
    apiRoutes.use(function (req, res, next) {
        if (!req.session.auth)
            res.redirect('/');
        next();
    });
    //Admin routers
    apiRoutes.get('/', AdminController.index);
    apiRoutes.get('/user/create', UserController._create);
    apiRoutes.get('/book/edit/:id', BookController.edit);
    apiRoutes.post('/book/edit/:id', BookController.update);
    apiRoutes.get('/book/delete/:id', BookController.destroy);
    apiRoutes.get('/book/create', BookController.create);
    apiRoutes.post('/book/create', BookController.store);
    app.use('/admin', apiRoutes);
};
//# sourceMappingURL=admin.js.map