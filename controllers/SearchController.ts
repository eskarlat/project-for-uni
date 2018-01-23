import Book from '../models/Book';

export function search(req, res, next) {
    const queryTitle = req.query.q;

    Book.findByTitle(queryTitle)
        .then( books => {
            res.render('search', { books, queryTitle });
        })
        .catch(error => {
            res.render('error', { error });
        })
}