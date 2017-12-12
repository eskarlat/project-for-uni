import Book from '../models/Book';

export function index(req, res, next) {
    Book.find()
        .then(books => {
            res.render('admin', { books });
        })
        .catch(error => {
            res.render('error', { error });
        })
}