import * as fs from 'fs';
import Book from '../models/Book';
import Category from '../models/Category';

export function edit(req, res, next) {
    const id = req.params.id;

    Book.findById(id)
        .then(book =>
        {
            Category.find()
                .then(categories => {
                    res.render('book/edit', {book, categories});
                });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function create(req, res, next) {
    Category.find()
        .then(categories => {
            res.render('book/create', {categories});
        });
}

export function store(req, res, next) {
    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    };

    let book = new Book(body);

    book.image.data = fs.readFileSync(req.file.path, 'base64');
    book.image.contentType = 'image/jpeg';

    book.save()
        .then(result => {
            res.redirect('/admin');
        })
        .catch(error => {
            res.render('error', { error })
        })
}

export function update(req, res, next) {
    const id = req.params.id;

    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
    };

    //if the file was uploaded
    if (req.file) {
        body['image'] = {
            data: fs.readFileSync(req.file.path, 'base64'),
            contentType: 'image/jpeg'
        }
    }

    Book.findById(id)
        .then(book => {
            book.update(body, () => {
                res.redirect('/admin');
            });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function destroy (req, res, next) {
    const id = req.params.id;

    Book.findById(id)
        .then(book => {
            book.remove();
            res.redirect('/admin');
        })
        .catch(error => {
            res.render('error', { error })
        })
}