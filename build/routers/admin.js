"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var AdminController = require("../controllers/AdminController");
var UserController = require("../controllers/UserController");
var PhoneController = require("../controllers/PhoneController");
exports.default = function (app) {
    var apiRoutes = express.Router();
    apiRoutes.use(function (req, res, next) {
        if (!req.session.auth)
            res.redirect('/');
        next();
    });
    //Admin routers
    apiRoutes.get('/', AdminController.index);
    apiRoutes.get('/create', AdminController.create);
    apiRoutes.get('/user/create', UserController._create);
    apiRoutes.get('/phone/edit/:id', PhoneController.edit);
    apiRoutes.post('/phone/edit/:id', PhoneController.update);
    apiRoutes.get('/phone/delete/:id', PhoneController.destroy);
    apiRoutes.get('/phone/create', PhoneController.create);
    apiRoutes.post('/phone/create', PhoneController.store);
    app.use('/admin', apiRoutes);
};
//# sourceMappingURL=admin.js.map