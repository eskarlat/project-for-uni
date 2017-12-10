"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var md5 = require("md5");
//create user
function _create(req, res, next) {
    var user = new User_1.default({
        login: 'admin',
        password: md5('admin123')
    });
    user.save()
        .then(function (result) {
        res.send('OK!');
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports._create = _create;
//# sourceMappingURL=UserController.js.map