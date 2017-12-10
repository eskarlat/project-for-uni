import * as md5 from 'md5';
import User from '../models/User';

//Login page
export function login(req, res, next) {
    if (req.session.auth) {
        res.redirect('/admin');
    }else{
        res.render('login');
    }
}

export  function logout(req, res, next) {
    req.session.destroy(result => {
        req.app.locals.isAuth = false;
        res.redirect('/login');
    });
}

//Auth Method
export function auth(req, res, next) {

    let login = req.body.login;
    let password = md5(req.body.password);

    User.findByLogin(login)
        .then(user => {
            if (user.password === password) {
                req.session.auth = user.login;
                req.app.locals.isAuth = true;
                res.redirect('/admin');
            }else{
                res.redirect('/login').send({ msg: "error login" });
            }
        })
        .catch(error => {
            res.render('error', { error })
        })
}