import Phone from '../models/Phone';

//index
export function index(req, res, next) {
    Phone.find()
        .then(phones => {
            res.render('index', { phones });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

//findByID
export function findById(req, res, next) {
    const id = req.params.id;

    Phone.findById(id)
        .then(phone => {
            res.render('detail', { phone });
        })
        .catch( error => {
            res.render('error', { error });
        })
}
