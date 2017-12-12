import Phone from '../models/Phone';

export function index(req, res, next) {
    Phone.find()
        .then(phones => {
            res.render('admin', { phones });
        })
        .catch(error => {
            res.render('error', { error });
        })
}