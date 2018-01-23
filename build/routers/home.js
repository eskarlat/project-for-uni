"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var HomeController = require("../controllers/HomeController");
var AuthController = require("../controllers/AuthController");
var SearchController = require("../controllers/SearchController");
var CategoryController = require("../controllers/CategoryController");
exports.default = function (app) {
    var apiRoutes = express.Router();
    //Home routers
    apiRoutes.get('/', HomeController.index);
    apiRoutes.get('/book/:id', HomeController.findById);
    apiRoutes.get('/login', AuthController.login);
    apiRoutes.post('/auth', AuthController.auth);
    apiRoutes.get('/logout', AuthController.logout);
    apiRoutes.get('/search', SearchController.search);
    apiRoutes.get('/category', CategoryController.search);
    app.use('/', apiRoutes);
};
//# sourceMappingURL=home.js.map