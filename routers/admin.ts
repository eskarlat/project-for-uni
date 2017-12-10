import * as express from 'express';
import * as AdminController from '../controllers/AdminController';

export default (app) => {

    const apiRoutes = express.Router();

    //Home routers
    // apiRoutes.get('/', AdminController.index);
    apiRoutes.get('/create', AdminController.create);
    // apiRoutes.get('/login', AuthController.login);

    app.use('/admin', apiRoutes);
}
