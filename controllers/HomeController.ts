import Book from '../models/Book';

//index
export function index(req, res, next) {
    Book.find()
        .then(books => {
            res.render('index', { books });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

//findByID
export function findById(req, res, next) {
    const id = req.params.id;

    Book.findById(id)
        .then(book => {
            res.render('detail', { book });
        })
        .catch( error => {
            res.render('error', { error });
        })
}
