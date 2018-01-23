import * as fs from 'fs';
import Book from '../models/Book';

export function edit(req, res, next) {
    const id = req.params.id;

    Book.findById(id)
        .then(book => {
            res.render('edit', { book });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function create(req, res, next) {
    res.render('create');
}

export function store(req, res, next) {
    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
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
    console.log(id);

    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
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
            book.update(body, (err, phone) => {
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