import User from '../models/User';
import * as md5 from 'md5';

//create user
export function _create(req, res, next) {
    let user = new User({
        login: 'admin',
        password: md5('admin123')
    });

    user.save()
        .then(result => {
            res.send('OK!');
        })
        .catch(error => {
            res.render('error', { error })
        })
}