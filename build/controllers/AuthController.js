"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require("md5");
var User_1 = require("../models/User");
//Login page
function login(req, res, next) {
    if (req.session.auth) {
        res.redirect('/admin');
    }
    else {
        res.render('login');
    }
}
exports.login = login;
function logout(req, res, next) {
    req.session.destroy(function (result) {
        req.app.locals.isAuth = false;
        res.redirect('/login');
    });
}
exports.logout = logout;
//Auth Method
function auth(req, res, next) {
    var login = req.body.login;
    var password = md5(req.body.password);
    User_1.default.findByLogin(login)
        .then(function (user) {
        if (user.password === password) {
            req.session.auth = user.login;
            req.app.locals.isAuth = true;
            res.redirect('/admin');
        }
        else {
            res.redirect('/login').send({ msg: "error login" });
        }
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.auth = auth;
//# sourceMappingURL=AuthController.js.map