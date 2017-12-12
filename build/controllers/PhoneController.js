"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Phone_1 = require("../models/Phone");
function edit(req, res, next) {
    var id = req.params.id;
    Phone_1.default.findById(id)
        .then(function (phone) {
        res.render('edit', { phone: phone });
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.edit = edit;
function create(req, res, next) {
    res.render('create');
}
exports.create = create;
function store(req, res, next) {
    var body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    };
    var phone = new Phone_1.default(body);
    phone.image.data = fs.readFileSync(req.file.path, 'base64');
    phone.image.contentType = 'image/jpeg';
    phone.save()
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
        image: {
            data: fs.readFileSync(req.file.path, 'base64'),
            contentType: 'image/jpeg'
        }
    };
    Phone_1.default.findById(id)
        .then(function (phone) {
        phone.update(body, function (err, phone) {
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
    Phone_1.default.findById(id)
        .then(function (phone) {
        phone.remove();
        res.redirect('/admin');
    })
        .catch(function (error) {
        res.render('error', { error: error });
    });
}
exports.destroy = destroy;
//# sourceMappingURL=PhoneController.js.map