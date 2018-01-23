import * as express from 'express';
import * as AdminController from '../controllers/AdminController';
import * as UserController from '../controllers/UserController';
import * as BookController from '../controllers/BookController';
import * as CategoryController from '../controllers/CategoryController';

export default (app) => {

    const apiRoutes = express.Router();

    apiRoutes.use(function (req, res, next) {
        //if(!req.session.auth) res.redirect('/');
        next()
    });

    //Admin routers
    apiRoutes.get('/', AdminController.index);

    //Only for first start to create first user
    apiRoutes.get('/user/create', UserController._create);

    //User
    apiRoutes.get('/book/edit/:id', BookController.edit);
    apiRoutes.post('/book/edit/:id', BookController.update);
    apiRoutes.get('/book/delete/:id', BookController.destroy);
    apiRoutes.get('/book/create', BookController.create);
    apiRoutes.post('/book/create', BookController.store);

    //Categories
    apiRoutes.get('/categories', CategoryController.index);
    apiRoutes.get('/category/create', CategoryController.create);
    apiRoutes.post('/category/create', CategoryController.store);
    apiRoutes.get('/category/edit/:id', CategoryController.edit);
    apiRoutes.post('/category/edit/:id', CategoryController.update);
    apiRoutes.get('/category/delete/:id', CategoryController.destroy);

    app.use('/admin', apiRoutes);
}
