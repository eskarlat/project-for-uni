import * as express from 'express';
import * as HomeController from '../controllers/HomeController';
// import * as AuthController from '../controllers/AuthController';

export default (app) => {

    const apiRoutes = express.Router();

    //Home routers
    apiRoutes.get('/', HomeController.index);
    // apiRoutes.get('/login', AuthController.login);

    app.use('/', apiRoutes);
}
