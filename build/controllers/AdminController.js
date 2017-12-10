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
//Create Phone
function create(req, res, next) {
    var phone = new Phone_1.default({
        title: 'iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/KH/HKHC2/HKHC2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1474481298618',
        description: 'ech21 Impact Shield Screen Protector with Anti-Glare for iPhone…',
        price: 200
    });
    phone.save()
        .then(function (result) {
        res.send('OK');
    })
        .catch(function (error) {
        res.send('error:' + error);
    });
}
exports.create = create;
//# sourceMappingURL=AdminController.js.map