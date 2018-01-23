import * as express from 'express';
import * as HomeController from '../controllers/HomeController';
import * as AuthController from '../controllers/AuthController';
import * as SearchController from '../controllers/SearchController';

export default (app) => {
    const apiRoutes = express.Router();
    //Home routers
    apiRoutes.get('/', HomeController.index);
    apiRoutes.get('/book/:id', HomeController.findById);
    apiRoutes.get('/login', AuthController.login);
    apiRoutes.post('/auth', AuthController.auth);
    apiRoutes.get('/logout', AuthController.logout);
    apiRoutes.get('/search', SearchController.search);

    app.use('/', apiRoutes);
}
