import * as express from 'express';
import * as AdminController from '../controllers/AdminController';
import * as UserController from '../controllers/UserController';
import * as BookController from '../controllers/BookController';

export default (app) => {

    const apiRoutes = express.Router();

    apiRoutes.use(function (req, res, next) {
        if(!req.session.auth) res.redirect('/');
        next()
    });

    //Admin routers
    apiRoutes.get('/', AdminController.index);
    apiRoutes.get('/user/create', UserController._create);
    apiRoutes.get('/book/edit/:id', BookController.edit);
    apiRoutes.post('/book/edit/:id', BookController.update);
    apiRoutes.get('/book/delete/:id', BookController.destroy);
    apiRoutes.get('/book/create', BookController.create);
    apiRoutes.post('/book/create', BookController.store);

    app.use('/admin', apiRoutes);
}
