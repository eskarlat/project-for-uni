import Book from '../models/Book';
import Category from '../models/Category';

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
            Category.findById(book.category)
                .then(category => {
                    res.render('book/detail', { book, category });
                });
        })
        .catch( error => {
            res.render('error', { error });
        })
}
