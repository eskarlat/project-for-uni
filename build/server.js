"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var helmet = require("helmet");
var session = require("express-session");
var multer = require("multer");
var main_1 = require("./config/main");
var home_1 = require("./routers/home");
var admin_1 = require("./routers/admin");
var app = express();
mongoose.connect(main_1.default.db, { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.set('view engine', 'pug');
app.use(session({ secret: 'keyboard cat' }));
app.use(multer({ dest: './uploads/' }).single('image'));
app.locals = {
    isAuth: false
};
home_1.default(app);
admin_1.default(app);
var server = app.listen(main_1.default.port, function () {
    console.log('server start on ' + main_1.default.port + 'port');
});
exports.default = server;
//# sourceMappingURL=server.js.map