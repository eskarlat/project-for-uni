import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as session from 'express-session';
import config from './config/main';
import home from './routers/home';
import admin from './routers/admin';

const app = express();

mongoose.connect(config.db, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.set('view engine', 'pug');
app.use(session({ secret: 'keyboard cat' }));

app.locals = {
    isAuth: false
};

home(app);
admin(app);

let server = app.listen(config.port, function () {
    console.log('server start on ' + config.port + 'port');
});

export default server;
