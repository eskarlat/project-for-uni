"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("../models/Phone");
function index(req, res, next) {
    Phone_1.default.find()
        .then(function (phones) {
        res.render('admin', { phones: phones });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.index = index;
//# sourceMappingURL=AdminController.js.map