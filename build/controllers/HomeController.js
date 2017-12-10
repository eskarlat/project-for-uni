"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("../models/Phone");
//index
function index(req, res, next) {
    Phone_1.default.find()
        .then(function (phones) {
        res.render('index', { phones: phones });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.index = index;
//findByID
function findById(req, res, next) {
    var id = req.params.id;
    Phone_1.default.findById(id)
        .then(function (phone) {
        res.render('detail', { phone: phone });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.findById = findById;
//# sourceMappingURL=HomeController.js.map