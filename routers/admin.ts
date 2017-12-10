import * as express from 'express';
import * as AdminController from '../controllers/AdminController';
import * as UserController from '../controllers/UserController';

export default (app) => {

    const apiRoutes = express.Router();

    apiRoutes.use(function (req, res, next) {
        if(!req.session.auth) res.redirect('/');
        next()
    });

    //Admin routers
    apiRoutes.get('/', AdminController.index);
    apiRoutes.get('/create', AdminController.create);
    apiRoutes.get('/user/create', UserController._create);

    app.use('/admin', apiRoutes);
}
